"use server"

import { sql } from '@vercel/postgres';
import { sendEmailer } from './sendEmail';
import { redirect } from 'next/navigation'

export const submitForm = async (formData: FormData) => {
    "use server";
    //console.log(formData.get('name'));
    //const nameValue = formData.get('name');
    //const emailValue = formData.get('email');
    //const messageValue = formData.get('message');

    const { name, email, message } = Object.fromEntries(formData);
    //await sql`INSERT INTO contact (Name, Email, Message) VALUES (${nameValue}, ${emailValue}, ${messageValue});`;
    await sql`INSERT INTO contact (Name, Email, Message) VALUES (${name?.toString()}, ${email?.toString()}, ${message?.toString()});`;

    await sendEmailer( name.toString(), email.toString(), message.toString() );

    redirect('/contact/thankyou');
}