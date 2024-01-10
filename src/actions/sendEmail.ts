import nodemailer from 'nodemailer'

export const sendEmailer = async () => {
    
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
                from: '"Contact Form" <contact@najeebdigital.xyz>',
                to: 'najeebputhiyallam@gmail.com',
                subject: 'Subject 👻 Hello TESTING Subject',
                html: '<h2>Hello Testing Message Body</h2>',
            }
    
            await transporter.sendMail(mailOption);
            return('Send');

    } catch(error){
            return('Error');
    } 


}