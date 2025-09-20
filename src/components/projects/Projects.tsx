import './Projects.scss'

export default function Projects() {
    return (
        <>
            <h1 className="PsectionTitle">My projects</h1>
            <h3 className="pInfo">You can find more projects and examinations <a href="https://github.com/TWITCHGAMER34"
                                                                                 target="_blank">here on github</a></h3>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-row1">
                        <img src="/Lunch.webp" alt="SÄG Lunch" className="project-img"/>
                        <div className="project-content">
                            <h2 className="project-title1">Lunch Tider SÄG</h2>
                            <p>This website shows the lunch schedule for Sundsta Älvkullen-gymnasiet. It displays when
                                each class has lunch, and as their time arrives, the schedule moves from left to right
                                and highlights the current class in green.</p>
                            <div className="project-links">
                                <a className="project-link" href="https://lunch.matslanten.online/" target="_blank" rel="noopener noreferrer">View Project</a>
                                <a className="project-link" href="https://github.com/TWITCHGAMER34/SAG-Board" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-row2">
                        <div className="project-content">
                            <h2 className="project-title2">Miljonen SÄG</h2>
                            <p>This website allows students and staff at Sundsta Älvkullen-gymnasiet to suggest, view,
                                and vote on ideas for how to use leftover funds from the annual 1 million kronor budget.
                                Each user can submit suggestions, browse others’ proposals, and cast one vote.</p>
                            <div className="project-links">
                                <a className="project-link" href="https://forslag.matslanten.online/" target="_blank" rel="noopener noreferrer">View Project</a>
                                <a className="project-link" href="https://github.com/FataneKorkadbona/SAG-Frontend" target="_blank">View Code</a>
                            </div>
                        </div>
                        <img src="/Miljonen.webp" alt="Weather Dashboard" className="project-img"/>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-row1">
                        <img src="/sas.webp" alt="Flight Planner" className="project-img"/>
                        <div className="project-content">
                            <h2 className="project-title1">SAS Virtual</h2>
                            <p>This website is a virtual airline platform for SAS Virtual, where flight simulation
                                enthusiasts can join, log flights, track their progress, and participate in events as
                                part of a realistic airline experience. (out of order)</p>
                            <div className="project-links">
                                <a className="project-link" href="https://sasvirtual.se/" target="_blank" rel="noopener noreferrer">View Project</a>
                                <a className="project-link" href="https://github.com/TWITCHGAMER34/sasvirtual.se" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-row2">
                        <div className="project-content">
                            <h2 className="project-title2">Aviation Portal</h2>
                            <p>This website offers an interactive portal for aviation enthusiasts and pilots, featuring
                                real-time weather updates, flight logging tools, and essential resources to support
                                safe and efficient flying.</p>
                            <div className="project-links">
                                <a className="project-link" href="https://aviationportal.sasvirtual.se/" target="_blank" rel="noopener noreferrer">View Project</a>
                                <a className="project-link" href="https://github.com/TWITCHGAMER34/flightlogbook_v2" target="_blank">View Code</a>
                            </div>
                        </div>
                        <img src="/av.webp" alt="Weather Dashboard" className="project-img"/>
                    </div>
                </div>
            </div>
        </>
    )
}
