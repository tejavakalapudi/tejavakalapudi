//http://expressjs.com/
const express = require( "express" );
const nodemailer = require("nodemailer");
const app  = express();
const path = require( "path" );
const publicPath = path.join( __dirname, "..", "public" );
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tejavakalapudi@gmail.com',
      pass: '09401a04b3'
    }
});

var mailOptions = {
    from: 'tejavakalapudi@gmail.com',
    to: 'ravitejavakalapudi@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

app.use( express.static( publicPath ) );

app.get( "/sendemail", ( req, res ) => {

    console.log("Making post request to send email");
    
    transporter.sendMail(mailOptions, (error, info) => {

        if ( error)  {
          console.log("Nodemailer failed with ", error );
        } else {
          console.log('Email sent: ' + info.response);
        }
        
    });
    // node mailer code
});

app.get( "*", ( req, res ) => {
    res.sendFile( path.join( publicPath, "index.html" ) );
});


app.listen( port, () => {
    console.log( "Server is up!" );
});