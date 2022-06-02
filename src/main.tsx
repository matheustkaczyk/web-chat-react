import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import Chat from './pages/Chat'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
    </BrowserRouter>
)
