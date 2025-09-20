import {useRef, useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar.tsx';
import Comp from './components/competencies/comp.tsx';
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import './App.scss';
import * as React from "react";

type SectionId = 'about' | 'competencies' | 'projects' | 'contact';

const sections: { id: SectionId; label: string }[] = [
    {id: 'about', label: 'About'},
    {id: 'competencies', label: 'Competencies'},
    {id: 'projects', label: 'Projects'},
    {id: 'contact', label: 'Contact'},
];

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    const lastScrollY = useRef(window.scrollY);
    const refs: Record<SectionId, React.RefObject<HTMLElement | null>> = {
        about: useRef<HTMLElement>(null),
        competencies: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const aboutSection = refs.about.current;
            setScrollingDown(currentScrollY > lastScrollY.current);
            lastScrollY.current = currentScrollY;
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setDarkMode(rect.bottom <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [refs.about]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const scrollToSection = (section: SectionId) => {
        refs[section].current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <div className={darkMode ?'dark-mode' : ''}>
                <Navbar
                    sections={sections}
                    scrollToSection={scrollToSection}
                    hide={scrollingDown}
                />                <div>
                    <section ref={refs.about} id="about">
                        <About/>
                    </section>
                    <section ref={refs.competencies} id="competencies">
                        <Comp/>
                    </section>
                    <section ref={refs.projects} id="projects">
                        <Projects/>
                    </section>
                    <section ref={refs.contact} id="contact">
                        <Contact/>
                    </section>
                </div>
            </div>
        </>
    );
}

export default App;
