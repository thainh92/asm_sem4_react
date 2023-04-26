import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StyledEngineProvider, ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
});
root.render(
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <App/>
        </ThemeProvider>
    </StyledEngineProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
