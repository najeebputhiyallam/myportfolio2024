import nodemailer from 'nodemailer'

export const sendEmailer = async (name: string, email: string, message: string) => {
    
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure:  true, // upgrade later with STARTTLS
            auth: {
              user: "contact@najeebdigital.xyz",
              pass: "Myemailpass123@",
            },
          });
    
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                console.log(error);
                } else {
                //console.log("Server is ready to take our messages");
                }
            });      
    
            const mailOption = {
                from: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
                to: 'najeebputhiyallam@gmail.com',
                replyTo: email,
                subject: `${name} submitted a message`,
                html: message,
            }

            const mailOption2 = {
              from: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
              to: email,
              replyTo: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
              subject: `Thank you for your message, ${name}`,
              html: `<p> Your message is <br> ${message}`,
          }            

            //console.log( mailOption );
            //https://beefree.io/ for email templates
    
            await transporter.sendMail(mailOption);
            await transporter.sendMail(mailOption2);
            return('Send');

    } catch(error){
            return('Error');
    } 


}