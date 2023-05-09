import {Routes, Route, useLocation} from 'react-router-dom'
import Home from '../pages/home-page/Home'
import About from '../pages/about-page/About'
import Services from '../pages/services-page/Services'
import Project from '../pages/services-page/Projetc'
import Contact from '../pages/contact-page/Contact'
import { AnimatePresence } from 'framer-motion'


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}><Redirect to="/home" /></Route>
                <Route path='about' element={<About />} />
                <Route path='services' element={<Services />} />
                <Route path='services/project' element={<Project />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}