import Routes from './routes';
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import { MarginSharp } from '@mui/icons-material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [ darkMode, setDarkmode ] = useState(false)

  let theme = createTheme({
    palette: {
      ...(darkMode ? {
        mode: "dark",
      }:{
        mode: "light",
        primary: {
          main: "#003B4999",
          // light: '#757ce8',
          contrastText: '#fff',
        },
        secondary: {
          main: "#0F9F59",
          // light: '#757ce8',
          contrastText: '#fff',
        },
        grey: {
          one: "#F9F9FA",
          two: "#EBEBEB",
          three: "#D1D1D1",
          four: "#A9A9A9",
          five: "#666666",
        },
        ice: "#003B491A",
        blue: "#507AB0",
        blueTwo: "#003B49",
        blueThree: "#003B4999",
        red: "#EA5351",
        yellow: "#F8D6A1",
        green: "#0F9F59",
        aqua: "#86AE99",
        aquaTwo: "#86AE9980",
      })
    },
    typography: {
      fontFamily: [
        "Roboto",
        "Ubuntu",
        "Montserrat",
      ].join(",")
    },
  })

  theme.typography.h1 = {
    fontFamily: "Ubuntu",
    fontSize: "1.5rem",
    fontWeight: "700",
  }

  theme.typography.h2 = {
    fontFamily: "Ubuntu",
    fontSize: "1.4rem",
    fontWeight: "700",
  }

  theme.typography.h3 = {
    fontFamily: "Ubuntu",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25px",
  }

  theme.typography.h4 = {
    fontFamily: "Roboto",
    fontSize: "42px",
    fontWeight: "700",
    lineHeight: "25px",
  }

  theme.typography.h5 = {
    fontFamily: "Roboto",
    fontSize: "0.8rem",
    fontWeight: "500",
  }

  theme.typography.h6 = {
    fontFamily: "Ubuntu",
    fontSize: "1.1rem",
    fontWeight: "700",
  }

  theme.typography.subtitle1 = {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: "700",
  }
  
  theme.typography.subtitle2 = {
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: "400",
  }



  theme.components = {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.blueTwo,
          color: "white",
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: "Ubuntu",
          padding: "14px 10px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: theme.palette.blueThree,
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides:{
        root: {
          label: {
            color: theme.palette.blueThree,
            padding: "0px",
          },
          input: {
            color: theme.palette.blueThree,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides:{
        root: {
          div: {
            border: "none",
            backgroundColor: "white",
          },
        }
      }
    },
    MuiFormControl: {
      styleOverrides:{
        root: {
          div: {
            border: "none",
            backgroundColor: "white",
          }
        }
      }
    },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       input:{
    //         color: "red"
    //       }
    //     }
    //   }
    // }
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>  
    </div>
  );
}

export default App;