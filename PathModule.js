const path=require('path');
const os=require('os');

// console.log(path);

console.log(__dirname);//Kon Directory te achi seta dekhay
console.log(__filename);//kon File e achi seta dekhay

const myPath=`/home/Anik/Pictures/vsCode-A.png`;
console.log(path.basename(myPath));
/*
   myPath namok variable er moddhe ekta path neyechi.Ekhon oi 
   path tar basename dekthe chacchi.Basename holo kono path er 
   akebare shes ongsho.
   result:-vsCode.png
*/

console.log(path.extname(myPath));//.png/.jpg/.mp4/.js/.html




//Jesob JinisPati dia path toiri korbo segula ekta object akera nilam
const myObjectPath={
   dir:__dirname,
   base:'app.test',
   ext:'.js'
}

const testPath=path.format(myObjectPath);
console.log(testPath);
/*
  path.format() ekta Object thekhe path return korbe.Jamon
  Eikahane myObjectPath namok Objeck toiri korechi abong seta k
  path.format() er moddhe push kore diachi.Ekhon eta oi Object
  er item gula nia ekta purno path toiri korbe!
  Eirokom:-
  /home/Anik/Desktop/Development/BootCamp/core_modules/app.test

*/



console.log(path.isAbsolute(testPath));//true
/*
  Jesob path e amra change directory kore jete parbo segula k
  Absolute path bole.Jamon uporer testPath k path.isAbsolute()
  er moddhe push korechi ar eta "true" return koreche.tai ota 
  absolute path.
*/

const notAbsolute=`hi.js`
console.log(path.isAbsolute('notAbsolute'));//false
/*
  `hi.js` eta ekta file akera ache, eikhane amra cd kore jete 
  parbo na.Tai eta "false" return koreche.
*/




console.log(path.join('Development','Bootcamp','core_modules'));
/*
   path.join() er moddhe koma dia jesob directory er nam gula 
   dibo segula k join kore ekta path toiri korbe.
   Result:-
           Development/Bootcamp/core_modules

*/




console.log(path.resolve('hi','app.js'));
/*
  resolve() prothome amader dirname ta automatic jukto kore,
  pore resolve() er vitore ja pass korechi segula join kore ekta
  Absolute path toiri kore.
  result:-
  /home/Anik/Desktop/Development/BootCamp/core_modules/hi/app.js

  eikhane /home/Anik/Desktop/Development/BootCamp/core_modules
  holo amar dirname ja resolve automatic jukto korecha.Abong er 
  por /hi/app.js jukto korecha ja amra resolve er moddhe pass 
  korechilam.
*/





//path.join() & path.resolve() relative naki Absolute?

const relaPath=path.join('Development','Bootcamp','core_modules')
console.log(path.isAbsolute(relaPath));//false
//Dekha gelo path.join() ekta relative path

const absPath=path.resolve('hi','app.js')
console.log(path.isAbsolute(absPath));//true
//Dekha gelo path.resolve() ekta absolute path





//Generate Path
const genPath=path.join(os.homedir(),'Desktop','Development','BootCamp','core_modules');
console.log(genPath);
/*
   Prothom e "os.homedir()" amader home directory ta khuje nia
   asbe, abong join() er moddhe "os.homedir()" er pore j item
   gula dieachi segula homedir er pore add kore ekta sundor path
   generate korbe.
   Result:-
          /home/Anik/Desktop/Development/BootCamp/core_modules
   
   eikhane "/home/Anik" holo amader home directory
*/







const myParse=`/home/Anik/Desktop/Development/BootCamp/core_modules/PathModule.js`
console.log(path.parse(myParse));
/*
   path.parse() ekta path k Object akera return kore.Jamon
   eikhane "myParse" namok ekta path toiri korechi abong seta
   path.parse() er moddhe pass kore diyachi.
   
   
Result:-
{
  root: '/',
  dir: '/home/Anik/Desktop/Development/BootCamp/core_modules',
  base: 'PathModule.js',
  ext: '.js',
  name: 'PathModule'
}

Osadharon vabe uporer path ta k venghe root,dir,base,ext,name
eigula toiri koreche.

N.B. path.parse() thik path.format() er ulto!
*/






const sepPath=`${path.sep}home${path.sep}Anik${path.sep}Desktop${path.sep}Development${path.sep}BootCamp${path.sep}core_modules${path.sep}PathModule.js`;

console.log(sepPath);
/*
  Jekhane amader Foward slash(/) Back Slash(\) dita hoi seikhane
  amra ${path.sep} dia dila Jokhon code ta Linux e run korbe 
  tokhon Linux er system e run korbe.Ar Jokhon Windows e run 
  korbe tokhon Windows er system e run korbe.Fole slash(/,\) nia
  tension korte hobe na.

  Result:-
        Linux: /home/Anik/Desktop/Development/BootCamp/core_modules/PathModule.js

        windows: \home\Anik\Desktop\Development\BootCamp\core_modules\Path\Module.js
       

*/






