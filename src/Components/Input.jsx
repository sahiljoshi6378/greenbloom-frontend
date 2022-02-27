import React from "react";




// importing stuff form material-ui
import {InputBase,Box} from '@mui/material/';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';



const InputBar = (props) =>{



    const bpConfig ={
        bp : props?.bp_Config?.bp ? props.bp_Config.bp : "sm",
        content_up : props?.bp_Config?.content_up ? props.bp_Config.content_up: null,
        content_down : props?.bp_Config?.content_down ? props?.bp_Config?.content_down :null
    }






    const CustomSearch = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },

        
        // Custom margin and padding
        marginRight: props.mr ? theme.spacing(props.mr) : 0,
        marginLeft: props.ml ? theme.spacing(props.ml) : 0,
        marginTop: props.mt ? theme.spacing(props.mt) : 0,
        marginBottom: props.mb ? theme.spacingprops(props.mb) :0,
        paddingTop : props.pt ? theme.spacing(props.pt) : 0,
        paddingBottom : props.pb ? theme.spacing(props.pb) :0,
        paddingLeft : props.pl ? theme.spacing(props.pl) : 0,
        paddingRight : props.pr ? theme.spacing(props.pr) :0,
       

        // custom width and height
        width : props.w ?  `${props.w}` : "100%",
        maxWidth: props.mw ?  `${props.mw}px`  : 'auto',

        [theme.breakpoints.up('sm')]: props.bp_enable ? {
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
          width: 'auto',
        } : null

    }));


      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));




      const CustomStyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width : "100%",
          maxWidth: 'auto',
        },
      }));

 

    return (
        <>
            <Box sx={{flexGrow:1}} >
                <CustomSearch  >
                    <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <CustomStyledInputBase sx={{
                            width : "100%",
                        }}
                        placeholder="Soil,plants,flowerpots..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </CustomSearch>
            </Box>
        </>
    )

}



// exporting default 
export default InputBar





