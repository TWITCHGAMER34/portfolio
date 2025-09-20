import { MdEmail, MdPhone } from 'react-icons/md'
import './contact.scss'

export default function Contact() {
    return (
        <section className="contact-container">
            <h2 className="Contact-Title">Contact</h2>
            <blockquote className="contact-quote">
                Connecting ideas, building solutions.
            </blockquote>
            <div className="contact-details">
                <p>
                    <MdEmail className="contact-icon" />
                    <strong>Email:</strong>
                    <a href="mailto:zoltanmartin.nagy@gmail.com">
                        zoltanmartin.nagy@gmail.com
                    </a>
                </p>
                <p>
                    <MdPhone className="contact-icon" />
                    <strong>Phone:</strong>
                    <a href="tel:+46708617564">
                        +46708617564
                    </a>
                </p>
            </div>
        </section>
    )
}
