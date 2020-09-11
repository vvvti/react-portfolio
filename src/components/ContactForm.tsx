import React from 'react'
import './ContactForm.css'

export const ContactForm: React.FC = () => {
    return (
        <section className='contact-page'>
            <div>
                <span className="text-secondary">Email:</span>
                patryk.kontewicz@poczta.fm
            </div>
            <div>
                <span className="text-secondary">Phone:</span>
                666 666 666
            </div>
            <div>
                <span className="text-secondary">Address:</span>
                Nowy Sacz, Poland
            </div>
        </section>
    )
}

export default ContactForm
