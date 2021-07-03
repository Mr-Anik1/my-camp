const fs=require('fs/promises');
const faker=require('faker');

function generateData(num){
    const data=[];
    for(let i=0;i<num;i++){
        const obj={
            name:faker.name.findName(),
            email:faker.internet.email(),
            phone:faker.phone.phoneNumber()
        }
        data.push(obj)
    }
    return data;
}
// console.log(generateData(10));



async function writeData(){
    const data=generateData(40);
    try{
        await fs.writeFile('./data/data.json',JSON.stringify(data));
        console.log('Data written successfully');
    }catch(e){
        console.log(e);
    }
}
writeData();