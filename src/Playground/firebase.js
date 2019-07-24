/*
//https://firebase.google.com/docs/reference/js/firebase.database.Reference#on
// event listener to inform removed child
database.ref( "projects" ).on( "child_removed", (snapshot) => {

    console.log( "ravi removed", snapshot.key, snapshot.val() );

});

// event listener to inform edited child
database.ref( "projects" ).on( "child_changed", (snapshot) => {

    console.log( "ravi edited", snapshot.key, snapshot.val() );

});

// event listener to inform added child
database.ref( "projects" ).on( "child_added", (snapshot) => {

    console.log( "ravi added", snapshot.key, snapshot.val() );

});
*/
/*
// Nested arrays https://stackoverflow.com/questions/41634851/nested-arrays-in-firebase-database
// work around for having date from firebase in an array for our purpose
database.ref("projects").on( "value", ( snapshot ) => {

    const projects = [];
    snapshot.forEach( ( childSnapshot ) => {

        projects.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });

    });

    console.log( "Latest projects", projects );

});

setTimeout(() => {
    
    database.ref("projects").push(     {
        title : "Xchange",
        location : "Secaucus"
    });

}, 3000);
*/

/*
// arrays to firebase object format
const projects = [
    {
        title : "Venkatadri",
        location : "Gopal Nagar"
    },
    {
        title : "Narayanadri",
        location : "Nizampet"
    },
    {
        title : "Vishnu Nivas",
        location : "Huda Layout"
    }
];

projects.forEach(( project ) => {
    database.ref("projects").push( project );
});
*/

/*
database.ref().set({
    name: "raviteja",
    age : 26,
    location : {
        city : "hyderabad",
        area : "kukatpally"
    }
}).then( () => {
    console.log( "Data is saved" );
}).catch( (err) => {
    console.log( "This failed", err );
})

//to get a reference of just particular key
database.ref("age").set(27);

//to get a reference of just particular key from child object
database.ref("location/city").set("nyc");

//to add a reference which doesn't exist
database.ref("attributes").set({
    height : 73,
    weight : 152
});

database.ref("location/city").remove().then(function() {
    console.log("Remove succeeded.")
})
.catch(function(error) {
    console.log("Remove failed: " + error.message)
});

//to update a reference we need to pass in object
// Existing or new values
database.ref().update({
    name : "kiran"
});

//for children objects
database.ref().update({
    name : "teja",
    "location/city" : "amaravati"
});

//FETCHING DATA: 
//One time use
database.ref().once( "value" )
    .then( (snapshot) => {
        console.log("Data from firebase", snapshot.val());
    })
    .catch( (e) => {
        console.log("Failed with", e);
    });

//subscription
const onValueChange = database.ref().on( "value" , (snapshot) => {
    console.log("Data from firebase", snapshot.val());
});

//UN-SUBSCRIBE
database.ref().off( onValueChange );

*/
