import React from "react";

import { theme } from "../Helpers/mui";
import { ThemeProvider, } from '@mui/material/styles';





// import components
import Navbar from "../Components/Navbar";


// Home page 
const Home = () =>{
 
    return (
        <>
        <ThemeProvider theme={theme}>
            <Navbar HEADER__TYPE="FULL"/>
        </ThemeProvider>
        </>
    )
}




// exporting default
export default Home