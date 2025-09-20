import './Navbar.scss';

type SectionId = 'about' | 'competencies' | 'projects' | 'contact';

interface Section {
    id: SectionId;
    label: string;
}

interface NavbarProps {
    sections: Section[];
    scrollToSection: (id: SectionId) => void;
    hide?: boolean;
}

export default function Navbar({sections, scrollToSection, hide}: NavbarProps) {
    return (
        <nav className={`navbar${hide ? ' navbar-hide' : ''}`}>
            <div className={"navbar__brand"}>Zoltan Martin Nagy</div>
            <ul className={"navbar__brand-links"}>
                {sections.map(s => (
                    <li key={s.id}>
                        <button onClick={() => scrollToSection(s.id)} className={"navbar__brand-links-linkBtn"}>
                            {s.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
