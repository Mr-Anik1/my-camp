const fs=require('fs/promises');

async function deletFile(fileName){
    await fs.unlink(fileName);
}
deletFile('./Delet/Tonik.js');
/*
   deletFile() er vitore j file er path ta dibo seta delet
   hoia jabe.Eikhane terminal e node Delet/DeletFile.js 
   dila Tonik.js file ta delet hoia jabe.
*/