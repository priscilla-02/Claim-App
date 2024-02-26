import { Box, Paper, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { routes as appRoutes } from './routes'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './pages/Not Found/NotFound'
import Popup from './components/Popup'

export function App() {
    // define theme
    const theme = createTheme({
        palette: {
            primary: {
                light: '#63b8ff',
                main: '#0989e3',
                dark: '#005db0',
                contrastText: '#000',
            },
            secondary: {
                main: '#4db6ac',
                light: '#fff',
                dark: '#00867d',
                contrastText: '#000',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <GlobalStyles /> */}
            <Box height="100vh" display="flex" flexDirection="column">
                <Router>
                    <Popup />
                    <Navbar />
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '1rem',
                            backgroundColor: 'secondary.light',
                        }}
                    >
                        <Routes>
                            {appRoutes.map((route) => (
                                <Route
                                    key={route.key}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}
                            <Route
                                path="/"
                                element={
                                    <Navigate to="/page/1" replace={true} />
                                }
                            ></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </Paper>
                    <Footer />
                </Router>
            </Box>
        </ThemeProvider>
    )
}

export function WrappedApp() {
    return <App />
}
