const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: 'youremail@address.com',
          pass: 'yourpassword'
      }
  });




  exports.sendMail= async(req,res) => {
   try{
       
      var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
                user: 'testmailcbbv@gmail.com',
                pass: 'testmailvillebon'
            }
        });


        const mailOptions = {
         from: 'testmailcbbv@gmail.com', // sender address
         to: 'a.mandel@hotmail.fr', // list of receivers
         subject: 'Subject of your email', // Subject line
         html: `Message de ${req.body.email}. /<br> 
         Nom : ${req.body.name}. /<br> 
         Le message est : ${req.body.message}
         `// plain text body
       };
       console.log(req.body, 'req.body')
       

       transporter.sendMail(mailOptions, function (err, info) {
         if(err)
           console.log(err)
         else
           console.log(info);
           next()
      });
   }catch(e){
       next(e)
   }
}