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
import Popup from './components/Popup/Popup'

export function App() {
    return (
        <Router>
            <Popup />
            <Navbar />

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
                    element={<Navigate to="/page/1" replace={true} />}
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export function WrappedApp() {
    return <App />
}
