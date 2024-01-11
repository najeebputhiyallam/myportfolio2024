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

            const messageToMe = `<!DOCTYPE html><html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><meta content="width=device-width,initial-scale=1" name="viewport"><!--[if mso]><xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch><o:allowpng></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css2?family=Inter&family=Work+Sans:wght@700&display=swap" rel="stylesheet" type="text/css"><!-- <![endif]--><style>*{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none}@media (max-width:720px){.desktop_hide table.icons-inner{display:inline-block!important}.icons-inner{text-align:center}.icons-inner td{margin:0 auto}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}.row-2 .column-1 .block-1.paragraph_block td.pad>div,.row-6 .column-1 .block-1.paragraph_block td.pad>div{text-align:center!important}.row-2 .column-1{padding:5px 25px 20px!important}.row-5 .column-1{padding:20px 10px!important}.row-6 .column-1{padding:5px 30px 20px 25px!important}}</style></head><body style="background-color:#f7f7f7;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f7f7f7" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-image:url(https://next.najeebdigital.xyz/Header-bg.png);background-repeat:no-repeat;border-radius:0;color:#000;background-color:#4f5aba;background-size:cover;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:25px;padding-right:30px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#fff;direction:ltr;font-family:Inter,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:19.2px"><p style="margin:0">www.najeebdigital.xyz</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#efeef4;border-bottom:0 solid #efeef4;border-left:0 solid #efeef4;border-right:0 solid #efeef4;border-top:0 solid #efeef4;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-left:25px;padding-right:25px;padding-top:35px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="vertical-align:middle;color:#4f5aba;font-family:'Noto Serif',Georgia,serif;font-size:24px;letter-spacing:0;padding-bottom:10px;padding-top:10px;text-align:center"><table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px"><a href="https://www.example.com" style="text-decoration:none" target="_self"><img align="center" alt="" class="icon" height="64" src="https://next.najeebdigital.xyz/ICON-06.png" style="display:block;height:auto;margin:0 auto;border:0" width="58"></a></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:10px;padding-top:10px;text-align:center;width:100%"><h1 style="margin:0;color:#4f5aba;direction:ltr;font-family:'Noto Serif',Georgia,serif;font-size:30px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:36px"><span class="tinyMce-placeholder">You got a new message</span></h1></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#efeef4;border-bottom:20px solid #efeef4;border-left:20px solid #efeef4;border-right:20px solid #efeef4;border-top:20px solid #efeef4;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;background-color:#fff;padding-bottom:30px;padding-left:25px;padding-right:25px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-top:10px;text-align:center;width:100%"><h2 style="margin:0;color:#201f42;direction:ltr;font-family:'Noto Serif',Georgia,serif;font-size:24px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:28.799999999999997px"><span class="tinyMce-placeholder">${name} send a message</span></h2></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#201f42;direction:ltr;font-family:Inter,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:180%;text-align:center;mso-line-height-alt:28.8px"><p style="margin:0">${message}</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-image:url(https://next.najeebdigital.xyz/Header-bg.png);background-repeat:no-repeat;border-radius:0;color:#000;background-color:#fff;background-size:cover;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-left:30px;padding-right:10px;padding-top:20px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px"></div></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#201f42;background-size:auto;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:25px;padding-right:30px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#fff;direction:ltr;font-family:Inter,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:16.8px"><p style="margin:0">Copyright © 2024 najeebdigital.xyz</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>`;
            const mailOption = {
                from: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
                to: 'najeebputhiyallam@gmail.com',
                replyTo: email,
                subject: `${name} submitted a message`,
                html: messageToMe,
            }

            const messageToThem = `<!DOCTYPE html><html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><meta content="width=device-width,initial-scale=1" name="viewport"><!--[if mso]><xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch><o:allowpng></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css2?family=Inter&family=Work+Sans:wght@700&display=swap" rel="stylesheet" type="text/css"><!-- <![endif]--><style>*{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none}@media (max-width:720px){.desktop_hide table.icons-inner{display:inline-block!important}.icons-inner{text-align:center}.icons-inner td{margin:0 auto}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}.row-2 .column-1 .block-1.paragraph_block td.pad>div,.row-6 .column-1 .block-1.paragraph_block td.pad>div{text-align:center!important}.row-2 .column-1{padding:5px 25px 20px!important}.row-5 .column-1{padding:20px 10px!important}.row-6 .column-1{padding:5px 30px 20px 25px!important}}</style></head><body style="background-color:#f7f7f7;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f7f7f7" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-image:url(https://next.najeebdigital.xyz/Header-bg.png);background-repeat:no-repeat;border-radius:0;color:#000;background-color:#4f5aba;background-size:cover;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:25px;padding-right:30px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#fff;direction:ltr;font-family:Inter,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:19.2px"><p style="margin:0">www.najeebdigital.xyz</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#efeef4;border-bottom:0 solid #efeef4;border-left:0 solid #efeef4;border-right:0 solid #efeef4;border-top:0 solid #efeef4;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-left:25px;padding-right:25px;padding-top:35px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="vertical-align:middle;color:#4f5aba;font-family:'Noto Serif',Georgia,serif;font-size:24px;letter-spacing:0;padding-bottom:10px;padding-top:10px;text-align:center"><table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td style="vertical-align:middle;text-align:center;padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px"><a href="https://www.example.com" style="text-decoration:none" target="_self"><img align="center" alt="" class="icon" height="64" src="https://next.najeebdigital.xyz/ICON-06.png" style="display:block;height:auto;margin:0 auto;border:0" width="58"></a></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:10px;padding-top:10px;text-align:center;width:100%"><h1 style="margin:0;color:#4f5aba;direction:ltr;font-family:'Noto Serif',Georgia,serif;font-size:30px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:36px"><span class="tinyMce-placeholder">Hi ${name},<br>thank you for your message</span></h1></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#efeef4;border-bottom:20px solid #efeef4;border-left:20px solid #efeef4;border-right:20px solid #efeef4;border-top:20px solid #efeef4;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;background-color:#fff;padding-bottom:30px;padding-left:25px;padding-right:25px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-top:10px;text-align:center;width:100%"><h2 style="margin:0;color:#201f42;direction:ltr;font-family:'Noto Serif',Georgia,serif;font-size:24px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:28.799999999999997px"><span class="tinyMce-placeholder">Here is the message you sent to me</span></h2></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#201f42;direction:ltr;font-family:Inter,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:180%;text-align:center;mso-line-height-alt:28.8px"><p style="margin:0">${message}<br><br><br> <b>Thank you once again, will get back to you soon, <br> Najeeb</b></p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-image:url(https://next.najeebdigital.xyz/Header-bg.png);background-repeat:no-repeat;border-radius:0;color:#000;background-color:#fff;background-size:cover;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-left:30px;padding-right:10px;padding-top:20px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px"></div></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#201f42;background-size:auto;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:25px;padding-right:30px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad"><div style="color:#fff;direction:ltr;font-family:Inter,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:16.8px"><p style="margin:0">Copyright © 2024 najeebdigital.xyz</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>`;
            const mailOption2 = {
              from: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
              to: email,
              replyTo: '"Najeeb Digital - Contact Form" <contact@najeebdigital.xyz>',
              subject: `Thank you for your message, ${name}`,
              html: messageToThem,
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