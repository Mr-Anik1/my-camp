//File read by promise way
//Eta Follow korte hobe

const fs=require('fs/promises');

(async ()=>{
    try{
       const data= await fs.readFile('./data/data.json');
       const people=JSON.parse(data);
       console.log(people);
       
    }catch(e){
      console.log(e);
    }
})()
//async await er babohar