const EventEmitter=require('events');
const myEmitter=new EventEmitter();

myEmitter.on('join', (data)=>{
    console.log(`${data.name} is joined`);
});

myEmitter.on('left', (data)=>{
    console.log(`${data.name} is left`)
});

module.exports=myEmitter;