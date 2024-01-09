import { Metadata } from "next";
import ContactForm from '@/components/contact-form/ContactForm';


export const metadata: Metadata = {
    title: "Contact",
}

export default function ContactPage(){
    return(
        <div className="containerGlobal" > 
            <div className="containerWrapperGlobal" >

                <ContactForm />
            
            </div>
        </div>
    );
}