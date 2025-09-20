import {
    SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiSqlite, SiMongodb, SiGithub, SiSass, SiGit,
    SiNextdotjs, SiDocker, SiUbuntu, SiVite, SiTailwindcss,
} from 'react-icons/si';
import './comp.scss';

const groups = [
    {
        title: 'Frameworks',
        desc: 'These are the software frameworks I use to build and structure web applications',
        items: [
            {name: 'React', icon: <SiReact size={40}/>, className: 'React'},
            {name: 'Next', icon: <SiNextdotjs size={40}/>, className: 'Next'},
        ],
    },
    {
        title: 'Databases',
        desc: 'Included here are the databases I have experience working with',
        items: [
            {name: 'MongoDB', icon: <SiMongodb size={40}/>, className: 'Postgres'},
            {name: 'SQLite', icon: <SiSqlite size={40}/>, className: 'SQLite'},
        ],
    },
    {
        title: 'Languages',
        desc: 'These are the programming languages I use to create web applications',
        items: [
            {name: 'JavaScript', icon: <SiJavascript size={40}/>, className: 'JS'},
            {name: 'Typescript', icon: <SiTypescript size={40}/>, className: 'TS'},
            {name: 'HTML5', icon: <SiHtml5 size={40}/>, className: 'HTML'},
            {name: 'CSS3', icon: <SiCss3 size={40}/>, className: 'CSS'},
            {name: 'Sass', icon: <SiSass size={40}/>, className: 'Sass'},
            {name: 'TailWind', icon: <SiTailwindcss size={40}/>, className: 'TailWind'},
        ],
    },
    {
        title: 'Technologies',
        desc: 'These are the core technologies that form the backbone my development workflow',
        items: [
            {name: 'NodeJS', icon: <SiNodedotjs size={40}/>, className: 'Node'},
            {name: 'Vite', icon: <SiVite size={40}/>, className: 'Vite'},
            {name: 'Docker', icon: <SiDocker size={40}/>, className: 'Docker'},
            {name: 'Git', icon: <SiGit size={40}/>, className: 'Git'},
            {name: 'GitHub', icon: <SiGithub size={40}/>, className: 'GitHub'},
            {name: 'Ubuntu', icon: <SiUbuntu size={40}/>, className: 'Ubuntu'},
        ],
    },
];

export default function Comp() {
    return (
        <>
            <h1 className="sectionTitle">Competencies</h1>
            <section className="competenciesGrid">
                {groups.map((group) => (
                    <div className="groupCard" key={group.title}>
                        <h2 className="groupTitle">{group.title}</h2>
                        <p className="groupDesc">{group.desc}</p>
                        <div
                            className={`iconRow${['Frameworks', 'Databases'].includes(group.title) ? ' wideRow' : ''}`}>
                            {group.items.map((item) => (
                                <div className={`iconCard ${item.className}`} key={item.name}>
                                    <span className={item.className}>{item.icon}</span>
                                    <div className="iconLabel">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
