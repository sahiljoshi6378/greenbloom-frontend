import   {LocationDenied,LOCATION_ALI_DEINED_REPONSE} from "../errors/commonerrors";


class DEVICE {
    static FETCH_GEO_COORDS =  () =>{
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: Infinity
          };
        return new Promise(function(resolve, reject) {
            if(navigator){
                navigator.geolocation.getCurrentPosition(
                    pos => { resolve([pos.coords.latitude,pos.coords.longitude]);}, 
                    err => { reject (err); },options);
            }
        });
    }
    




    static FETCH_GEO_LOCATION = async () =>{
        let geoCoords; 
        let  API_RES ;
        let location_data; 
        try {
            

            
            try {
                geoCoords = await this.FETCH_GEO_COORDS();
               
            } catch (error) {
                if(error.code === 1){
                    throw new LocationDenied("PERMISSION_DENIED");
                }
                else if(error.code === 2){
                    throw new LocationDenied("POSITION_UNAVAILABLE");
                }
                if(error.code === 3){
                    throw new LocationDenied("TIMEOUT");
                }
            }
            
            
            // reducing the api calls by caching location into localStorage
            const cachedLocation = JSON.parse(localStorage.getItem("location-cache"));
            if(cachedLocation && cachedLocation.latitude === geoCoords[0] && cachedLocation.longitude === geoCoords[1]){
                // cached location data if the long and lat matches.
                location_data = {
                    latitude  : cachedLocation.latitude,
                    longitude: cachedLocation.longitude,
                    city : cachedLocation.city,
                    state : cachedLocation.state,
                    postalCode : cachedLocation.postalCode,
                    state_code : cachedLocation.state_code,
                    state_district : cachedLocation.state_district
                }
                return location_data;
            }else if(!cachedLocation || cachedLocation.latitude !== geoCoords.latitude || cachedLocation.longitude !== geoCoords.longitude){
                const apik = process.env.REACT_APP_OPENCADGE_API_KEY;
                console.log(apik);
                API_RES = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${geoCoords[0]}+${geoCoords[1]}&key=253f5ca97179486d92be0491cc77061e`);
                const data   = await API_RES.json();
                if(data.status.code === 401){
                    throw new LOCATION_ALI_DEINED_REPONSE(data.status.message);
               }else{

                // creating uncached location object
                location_data = {
                    latitude  : geoCoords[0],
                    longitude: geoCoords[1],
                    city : data.results[0].components.city,
                    state : data.results[0].components.state,
                    postalCode : data.results[0].components.postcode,
                    state_code : data.results[0].components.state_code,
                    state_district : data.results[0].components.state_district
                }
                localStorage.setItem("location-cache", JSON.stringify(location_data));
                return location_data;
            }
            }
            
        } catch (error) {
            if(error instanceof LocationDenied || LOCATION_ALI_DEINED_REPONSE){
                // TODO : remove in production
                console.log(error.ERR_CUSTOM_MAG)
                return{
                    errType : error.ERR_TYPE
                }
            }
        }
    } 
} 


// exporting default
export default DEVICE;