class LocationDenied{
    constructor (msg=null){
        this.ERR_MSG = "Location denied";
        this.ERR_DESC = "Geolocation blocked by user.";
        this.ERR_TYPE = "LocationDenied";
        this.ERR_CUSTOM_MAG = msg;
    }
}


class LOCATION_ALI_DEINED_REPONSE{
    constructor (msg=null){
        this.ERR_MSG = "Location denied by user";
        this.ERR_DESC = "Geolocation blocked by user.";
        this.ERR_TYPE = "LOCATION_API_DEINED_REPONSE";
        this.ERR_CUSTOM_MAG = msg;
    }
}


// exporting errors
export {LocationDenied,LOCATION_ALI_DEINED_REPONSE}