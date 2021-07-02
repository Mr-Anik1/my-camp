//BoilerPalte for Fake Data generate

const faker=require('faker');
/*
  Jehutu Onek data nia kaj korte hobe tai oshonko Fake data toiri
  korar jonno faker install kore nilam:-
         1.npm init
         2.npm i faker
  Terminal e Ei 2 ta step follow korle faker install hoia jabe.

  Ei file e jehutu faker nia kaj korbo tai eikhane faker ta 
  "require" kore nilam!
*/


const data=[];
for(let i=0;i<10;i++){
    const obj={
        name:faker.name.findName(),
        email:faker.internet.email(),
        phone:faker.phone.phoneNumber()
    }
    data.push(obj);
}
console.log(JSON.stringify(data));
/*
  JSON.Stringify() er karone String Akera data gula asbe.
  Erpor console powa data gulo "data.json" file e push kore
  diachi.
*/