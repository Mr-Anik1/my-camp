const myEmitter=require('./Events');

myEmitter.emit('join',{name: 'Anik'});
myEmitter.emit('join',{name: 'Antor'});
myEmitter.emit('left',{name: 'Tonik'});
