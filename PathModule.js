const path=require('path');

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

