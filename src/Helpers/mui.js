import  {  createTheme } from "@mui/material/styles";


// custom theme
const defaultTheme = createTheme();
export const theme = createTheme({
 
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      xsmall: 330,
      small: 520,
      smallplus: 640,
      meadium : 720,
      midmeadium :860,
      large : 1024,
      xlarge : 1400
    },
  },
});
