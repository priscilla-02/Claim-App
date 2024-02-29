import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { WrappedApp } from './App'
import './index.css'
import 'virtual:windi.css'
import '@fontsource/nunito-sans'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <WrappedApp />
        </Provider>
    </React.StrictMode>
)
