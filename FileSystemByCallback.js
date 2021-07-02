//Data Read by callback way
const fs=require('fs');

fs.readFile('./data/data.json',(err,data)=>{
    if(err){
        console.log(err);
    }
    
    /*
      Jdi console.log(data) dei tahole baffer akera data gula
      asbe.
    */
     
     const people=JSON.parse(data)
     //JSON theke data gula parse hoia Object akera asbe
     console.log(people);



     people.forEach((p) => {
         console.log(p.name);
     });
     /*
        foreach() Method babohar kore oi array theke shudhu name
        gula nia aslam.Result:-
                               Josh Kuphal
                               Marta Hilll
                               Hannah Lueilwitz Jr.
                               Kristie Feeney
                               Adrian Shields
                               Margarita Williamson
                               Mary Auer
                               Micheal Batz
                               Mrs. Laura Ondricka
                               Patrick Heller
    
    */
     
     people.forEach((p)=>{
         console.log(`${p.name} =>  (${p.email})`);
     });
     //Name ar E-mail ber kore nia aslam
});