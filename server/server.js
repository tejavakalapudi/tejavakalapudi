//http://expressjs.com/
const express = require( "express" );
const nodemailer = require( "nodemailer" );
const app  = express();
const path = require( "path" );
const publicPath = path.join( __dirname, "..", "public" );
const port = process.env.PORT || 3000;

//http://masashi-k.blogspot.com.br/2013/06/sending-mail-with-gmail-using-xoauth2.html
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type : "OAuth2",
        user: 'tejavakalapudi@gmail.com',
        pass: '09401a04b3',
        clientId : "867658258327-kr821rif2jd0leqi6fsu0f4pdjp41d3h.apps.googleusercontent.com",
        clientSecret : "Gk8VO3IetNgkw0HfqjO0z2nN",
        refreshToken : "1/0mp3pne6r3MHzQUJ7A06k6DDeEY54zAcoTa0_cJ3ZOA"
    }
});

app.use( express.static( publicPath ) );

app.get( "/sendemail", ( req, res ) => {

    console.log("Making post request to send email", req.query );

    const messageString = `<h3>${req.query.name} wrote: </h3>
    <p><i>"${req.query.message}"</i></p>
    <div><b>Customer Details:</b></div>
    <div><b>Phone:</b> ${req.query.phone}</div>
    <div><b>Email:</b> ${req.query.email}</div>
    <div><b>Interested Project:</b> ${req.query.interestedProject}</div>`;

    const mailOptions = {
        from: 'tejavakalapudi@gmail.com',
        to: 'ravitejavakalapudi@gmail.com',
        subject: `Message from ${req.query.name}`,
        html: messageString
    };
    
    transporter.sendMail( mailOptions, ( error, info ) => {

        if ( error)  {

          console.log( "Nodemailer failed with ", error );

          res.status( 500 ).send( { error: 'Something failed!' } );

        } else {

        console.log( "Nodemailer successfully sent an email" );

          res
            .status( 200 )
            .send("Email has been sent successfully");
        }
        
    });

});

app.get( "*", ( req, res ) => {
    res.sendFile( path.join( publicPath, "index.html" ) );
});


app.listen( port, () => {
    console.log( "Server is up!" );
});