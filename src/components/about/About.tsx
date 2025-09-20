import profileImg from "../../../public/1701081750073.webp";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import './about.scss';

export default function About() {
    return (
        <div className="aboutWrap">
            <div className="left">
                <h1 className="title">Fullstack<br />Developer</h1>
                <p className="desc">
                    Hi! My name is Zoltan Martin Nagy and I am a passionate fullstack-webdeveloper,
                    localized in Karlstad Sweden.📍
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/zoltan-martin-nagy-2828b123a/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin />
                    </a>
                    <a href="https://github.com/TWITCHGAMER34" target="_blank" rel="noopener noreferrer">
                        <SiGithub />
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="imgCard">
                    <img src={profileImg} alt="Zoltan Martin Nagy" className="img" fetchPriority="high" />
                </div>
            </div>
        </div>
    );
}
