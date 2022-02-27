import React, { useEffect, useState } from "react";

import { theme } from "../Helpers/mui";

// importing images and svg
import logoSvg from "../Assets/svgs/GreenBloom-logo.svg";
import logoMiniSvg from "../Assets/svgs/GreenBloom-logo-mini.svg";
import bannerAd from "../Assets/images/bannerAD.png";
import drawerAd from "../Assets/images/drawerAD.png";
import orders from "../Assets/images/orders.png";
import wishlist from "../Assets/images/wishlist.png";
import rewards from "../Assets/images/rewards.png";
import categories from "../Assets/images/categories.png";


// matetial components and icons
import {
    Stack,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Badge,
    Box
} from "@mui/material";


import Containor from "@mui/material/Container";
import { styled, alpha } from '@mui/material/styles';
import { Icon } from "@mui/material";




import {
    ShoppingBagOutlined,
    CampaignOutlined,
    AccountCircleOutlined,
    Menu,
    Help,
    School,
    ArrowDropDownOutlined,
    
} from "@mui/icons-material";



import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

//importing functions
import DEVICE from "../Services/device_info";
import {  borderRadius, minWidth } from "@mui/system";





// importing components
import InputBar from "./Input";



// Home page 
const Navbar = ({ HEADER__TYPE }) => {


    



    // adding useStates
    const [fetchingLocation, setfetchingLocation] = useState({
        location: null,
        isError: null
    });

 

    const [isUser, setisUser] = useState({
        name  : "sahil",
        notifications_count : 50,
        cart_count : 13
    });



    // const [isUser, setisUser] = useState(null);


    const [dwr,setDwr]  = useState(false);
    const toggleDrawer = () =>{
        setDwr(!dwr);
    }


    useEffect(async () => {
        const user_location = await DEVICE.FETCH_GEO_LOCATION();

        if (user_location.errType === "LocationDenied" || user_location.errType === "LOCATION_API_DEINED_REPONSE") {
            setfetchingLocation({
                location: null,
                isError: true
            });
        } else {
            setfetchingLocation({
                location: user_location,
                isError: null
            });

        }
    }, []);



  

     









  

    //Custom ad banner
    const  AdBanner =  styled('div')((props) => ({
        position: props?.p ? props.p  : "absolute",
        top: "0",
        right: "0",
        height: `${props.h}%`,
        width: `${props.w}%`,
        backgroundImage: `url(${props.AD_URI})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"

    }));



    return (
        <>
      
            <AppBar   position="static" elevation={0} sx={{
                backgroundColor: "#0A1929"
            }} >
                <Containor maxWidth="lg" >
                    <Toolbar variant="regular" sx={{
                         [theme.breakpoints.down("midmeadium")]:{
                            padding: "1em 0.5rem 0.5rem 0.5rem",
                        },
                        padding: "1em 0.8rem 1rem 0.8rem",
                        width: minWidth("1160px", "100%"),
                        margin: "auto"
                    }}>
                      
                        <Box
                                component="img"
                                sx={{
                                    width: "7.4rem",
                                    [theme.breakpoints.up("small")]:{
                                        display : "none"
                                    },
                                    [theme.breakpoints.down("xsmall")]:{
                                        width: "6.8rem",
                                    },
                                
                                }}
                                alt="The house from the offer."
                                src={logoSvg}
                            />

                        <Stack direction="column" sx={{
                            [theme.breakpoints.down("small")]:{
                                display : "none"
                            },
                        }}>



                      
                            <img src={logoSvg} style={{
                                width: "8.785rem",
                                marginBottom: "0.5rem",
                                cursor: "pointor"
                            }} />
                            <Stack direction="row" sx={{
                                [theme.breakpoints.down("small")]:{
                                    display : "none"
                                },
                                justifyContent: "flex-start",
                                alignItems: "flex-end"
                            }}>
                                {
                                    fetchingLocation.isError ? (
                                        <Typography ml={0.5} variant="p" sx={{
                                            fontSize: "0.8rem",
                                            fontWeight: "500"
                                        }}>
                                            LIVING WITH NATURE
                                        </Typography>
                                    ) : !fetchingLocation.isError && fetchingLocation.location ? (
                                        <>
                                           
                                            <Typography ml={0.5} variant="p" sx={{
                                                fontSize: "0.8rem",
                                                fontWeight: "500",
                                                textTransform: "uppercase"
                                            }}>
                                                {fetchingLocation.location.city},{fetchingLocation.location.postalCode}
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                         
                                            <div className="line__loader"></div>
                                        </>

                                    )
                                }
                            </Stack>
                        </Stack>
                        {/* search bar */}
                        <Box sx={{
                            flexGrow : 1,
                            [theme.breakpoints.up("midmeadium")]:{
                                display : "none"
                            }
                        }} ></Box>
                        <Box sx={{
                            flexGrow : 1,
                            [theme.breakpoints.down("midmeadium")]:{
                                display : "none"
                            }
                        }}>
                        <InputBar sx={{
                           
                        }}  w="auto" ml={0} mw={540}   bp_enable={true}  bp_Config={{
                            bp : "sm",
                            content_up:{
                                marginLeft: "3rem",
                                marginRight :"3rem",
                                width: 'auto'
                            }
                            }} />
                        </Box>

                            
                        <Stack direction="row"  sx={{
                            justifyContent: "flex-end",
                            alignItems: "flex-center"
                        }} >
                            {isUser ? (
                                <Button variant="contained" startIcon={
                                    <AccountCircleOutlined/>
                                } 
                                sx={{
                                    [theme.breakpoints.down("small")]:{
                                        padding: "4px 10px",
                                     },
                                    backgroundColor: "transparent",
                                    color: "rgb(102, 178, 255)",
                                    border: "1px solid rgb(19, 47, 76)",
                                    borderRadius: "4px",
                                    padding: "6px 16px",
                                    overflow: " visible",
                                    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    '&:hover': {
                                        backgroundColor: "#0E2336"
                                    }
                                }}  >
                                    {isUser.name}
                                    
                               </Button>
                            ):(
                                <Button variant="outlined" 
                                sx={{
                                    [theme.breakpoints.down("small")]:{
                                        padding: "4px 10px",
                                     },
                                    backgroundColor: "transparent",
                                    color: "rgb(102, 178, 255)",
                                    border: "1px solid rgb(19, 47, 76)",
                                    borderRadius: "4px",
                                    padding: "6px 16px",
                                    overflow: " visible",
                                    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    '&:hover': {
                                        backgroundColor: "#0E2336"
                                    }
                                }}  >
                                    login
                               </Button>
                            )}

                            <IconButton variant="outlined" sx={{
                                [theme.breakpoints.down("small")]:{
                                   display  : "none"
                                },
                                marginLeft: "10px",
                                backgroundColor: "transparent",
                                color: "rgb(102, 178, 255)",
                                width: "34px",
                                height: "34px",
                                border: "1px solid rgb(19, 47, 76)",
                                borderRadius: "8px",
                                padding: "18px",
                                overflow: " visible",
                                transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                '&:hover': {
                                    backgroundColor: "#0E2336"
                                }
                            }} >
                                <Badge badgeContent={isUser ? isUser.notifications_count : 0} max={99} color="primary"><CampaignOutlined sx={{
                                     [theme.breakpoints.down("small")]:{
                                        width: "24px",
                                     },
                                }} /></Badge>
                            </IconButton>


                            <IconButton  variant="outlined" sx={{
                                 [theme.breakpoints.between("small","xsmall")]:{
                                    padding: "16px",
                                    borderRadius: "6px",
                                 },
                                 [theme.breakpoints.down("xsmall")]:{
                                    padding: "1px",
                                },
                                 
                                backgroundColor: "transparent",
                                color: "rgb(102, 178, 255)",
                                width: "34px",
                                height: "34px",
                                border: "1px solid rgb(19, 47, 76)",
                                borderRadius: "10px",
                                marginLeft: "8px",
                                padding: "18px",
                                overflow: " visible",
                                transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                '&:hover': {
                                    backgroundColor: "#0E2336"
                                }
                            }} >

                                <Badge badgeContent={isUser ? isUser.cart_count : 0} max={99} color="primary"> <ShoppingBagOutlined sx={{
                                     [theme.breakpoints.down("small")]:{
                                        width: "24px",
                                     },
                                     [theme.breakpoints.down("xsmall")]:{
                                        width: "19px",
                                    },
                                }} /> </Badge>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Containor>
            </AppBar>

            {/* search bar for mobile */}
            <AppBar  position="static" elevation={0} sx={{
                backgroundColor: "#0A1929",
                [theme.breakpoints.up("midmeadium")]:{
                    display : "none"
                }
            }} >
                <Containor maxWidth="lg" >
                    <Toolbar variant="regular" sx={{
                        width: minWidth("1160px", "100%"),
                        margin: "auto",
                        padding: "1rem 0"
                    }}>
                         <IconButton variant="contained" sx={{
                                        marginRight : "10px",
                                        backgroundColor: "transparent",
                                        color: "rgb(102, 178, 255)",
                                        width: "34px",
                                        height: "34px",
                                        border: "1px solid rgb(19, 47, 76)",
                                        borderRadius: "5px",
                                        padding: "18px",
                                        overflow: " visible",
                                        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                        '&:hover': {
                                            backgroundColor: "#0E2336"
                                        }
                                    }} onClick={() => setDwr(true)} >
                                    <Menu  />
                            </IconButton>
                          <InputBar  sx={{
                          }}  bp_enable={false}  />    
                           
                    </Toolbar>
                </Containor>
            </AppBar>




            {/* category header */}
            {
                HEADER__TYPE === "FULL" ? (
                    <AppBar position="static" elevation={0} color="secondary" sx={{
                        backgroundColor: "#9BD388",
                        [theme.breakpoints.down("midmeadium")]:{
                            display : "none"
                        }
                    }} >
                        <Containor maxWidth="lg" >
                            <Toolbar variant="dense" sx={{
                                width: minWidth("1160px", "100%"),
                                margin: "right",
                                height: "45px",
                                maxHeight: "45px",
                                minHeight: "45px",
                                position: "relative"
                            }}>
                                <Stack direction="row" >
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        marginRight: "10px"
                                    }}>
                                        Gardning
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        marginRight: "10px"
                                    }}>
                                        Plants
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        marginRight: "10px"
                                    }}>
                                        Seeds
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        marginRight: "10px"
                                    }}>
                                        Soil & Fertilizer
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize",
                                        marginRight: "10px"
                                    }}>
                                        Pebbles
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                    <Typography variant="p" sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "black",
                                        fontSize: "0.8rem",
                                        fontWeight: "500",
                                        textTransform: "capitalize"
                                    }}>
                                        Gardning services
                                        <ArrowDropDownOutlined />
                                    </Typography>
                                </Stack>

                                <AdBanner w={30} h={100} AD_URI={bannerAd} sx={{
                                    [theme.breakpoints.down("large")]:{
                                        display : "none"
                                    }
                                }} />
                            </Toolbar>
                        </Containor>
                    </AppBar>
                ) : null
            }


            {/* drawer component */}
            <SwipeableDrawer
          
          anchor="left"
          open={dwr}
          onOpen={() => setDwr(true)}
          onClose={() =>setDwr(false)}
           
          >
              
              
              
              <Box sx={{
               
                width : "250px",
                maxWidth : "250px",
                height : "100%"
            }}>
                {/* header for drawer */}
               <Box sx={{
                   width : "100%",
                   backgroundColor: "#0A1929"
               }}>

                   <Stack direction="row" sx={{
                       padding : "0.8rem 0.8rem",
                       alignItems : "center",
                       justifyContent : "space-between"
                   }}>
                        <img src={logoMiniSvg} style={{
                                width: "2.2rem",
                                cursor: "pointor"
                            }} />
                            {isUser ? (
                                <Button variant="contained" startIcon={
                                    <AccountCircleOutlined/>
                                } 
                                sx={{
                                    [theme.breakpoints.down("small")]:{
                                        padding: "4px 10px",
                                     },
                                    backgroundColor: "transparent",
                                    color: "rgb(102, 178, 255)",
                                    border: "1px solid rgb(19, 47, 76)",
                                    borderRadius: "4px",
                                    padding: "6px 16px",
                                    overflow: " visible",
                                    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    '&:hover': {
                                        backgroundColor: "#0E2336"
                                    }
                                }}  >
                                    {isUser.name}
                                    
                               </Button>
                            ):(
                                <Button variant="outlined" 
                                sx={{
                                    [theme.breakpoints.down("small")]:{
                                        padding: "4px 10px",
                                     },
                                    backgroundColor: "transparent",
                                    color: "rgb(102, 178, 255)",
                                    border: "1px solid rgb(19, 47, 76)",
                                    borderRadius: "4px",
                                    padding: "6px 16px",
                                    overflow: " visible",
                                    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                    '&:hover': {
                                        backgroundColor: "#0E2336"
                                    }
                                }}  >
                                    login
                               </Button>
                            )}
                   </Stack>
               </Box>
               <List>
                   <ListItem>
                       <ListItemIcon>
                           <Icon>
                               <img src={categories} height={24} width={24} />
                           </Icon>
                        </ListItemIcon>
                    <ListItemText primary="All Categories" />
                   </ListItem>
                   <Divider light sx={{
                      backgroundColor: "#2120204d"
                   }} />
                   <ListItem>
                       <ListItemIcon>
                       <Icon>
                           <img src={orders} height={24} width={24}/>
                        </Icon>
                       </ListItemIcon>
                       <ListItemText primary="Orders" />
                       <Badge badgeContent={isUser ? isUser.cart_count : 0} max={99} color="primary" sx={{
                           marginRight : "1rem"
                       }} />
                   </ListItem>
                   <ListItem>
                       <ListItemIcon>
                           <Icon>
                            <img src={wishlist} height={24} width={24} />
                           </Icon>
                       </ListItemIcon>
                       <ListItemText primary="Wishlist" />
                       <Badge badgeContent={isUser ? isUser.cart_count : 0} max={99} color="primary" sx={{
                           marginRight : "1rem"
                       }} />
                   </ListItem>
                   <ListItem>
                       <ListItemIcon>
                           <Icon>
                           <img src={rewards} height={24} width={24} />
                           </Icon>
                       </ListItemIcon>
                       <ListItemText primary="Rewards" />
                   </ListItem>
                   <ListItem>
                       <ListItemIcon>
                           <ShoppingBagOutlined/>
                       </ListItemIcon>
                       <ListItemText primary="Cart" />
                       <Badge badgeContent={isUser ? isUser.cart_count : 0} max={99} color="primary" sx={{
                           marginRight : "1rem"
                       }} />
                   </ListItem>
                   <ListItem >
                       <ListItemIcon >
                           <CampaignOutlined/>
                       </ListItemIcon>
                       <ListItemText primary="Notifications" />
                       <Badge badgeContent={isUser ? isUser.cart_count : 0} max={99} color="primary" sx={{
                           marginRight : "1rem"
                       }} />
                   </ListItem>
                   
               </List>
               <Divider light sx={{
                      backgroundColor: "#2120204d"
                   }} />
                   {/* Drawer AD */}
                   <AdBanner 
                   w={100}
                   p = "relative"
                    h={34} 
                    AD_URI={drawerAd} />
                    {/* Drawer AD */}

               <List>
               <Divider light sx={{
                      backgroundColor: "#2120204d"
                   }} />
               <ListItem sx={{
                //    marginTop : "100%"
               }}>
                       <ListItemIcon>
                        <School/>
                       </ListItemIcon>
                       <ListItemText primary="GB Academy" />
                    </ListItem>
                    <ListItem >
                       <ListItemIcon>
                        <Help/>
                       </ListItemIcon>
                       <ListItemText primary="Help center" />
                    </ListItem>
                </List>            
            </Box>
             
          </SwipeableDrawer>
       
        </>
    )
}




// exporting default
export default Navbar

