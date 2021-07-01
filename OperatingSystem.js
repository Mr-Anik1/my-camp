const os=require('os');
console.log(os.platform());//linux/windows/mac
console.log(os.arch());//architecture koto bit er? 32 naki 64
console.log(os.hostname());//Computer er nam ki
console.log(os.cpus().length);//koita core acha
console.log(os.cpus());//core gulor ditales Object akera dibe
console.log(os.type());//OS ta kon dhoroner Linux/Mac/Windows
console.log(os.totalmem()/1024/1024/1024);//Total Memory/Ram dekhai
console.log(os.freemem());
/*
   Koto tuku memory faka ache seta Byte a dekhai.Ekhon jdi amra 
   chai Byte k GB te anbo tahole-
   console.log(os.freemem()/1024/1024/1024); korlei hobe.
   Karon amra jani 1024 Byte e 1 KiloByte
             1024 kiloByte e 1 MegaByte
             1024 MegaByte e 1 GigaByte
*/

console.log(os.networkInterfaces());
//Network somporkito sob tottho dekhai.IP Address esob arki...

console.log(os.tmpdir());
/*
   Amader sokol application er temporary data eikhane thake.Amra
   onek somoy aplication unistall korleo ei temporary Data er
   karone Application er sokol configuration ta eikhane theke jai
   Fole aber notun kore application install korleo purber 
   configuration onujai kaj kore.

   N.B. Ei tmpdir er maddhome temporary data er path khuje powa 
   jabe.
*/

console.log(os.uptime());
/*
  Kothokhon dhore PC cholce seta Second e prokas kore.Seta 
  ghontai nite chile uptime()/60/60 dite hobe.
*/
console.log(os.uptime()/60/60);//Ghontai Convert kore nilam

console.log(os.userInfo());//User somporke Object akera info dibe

console.log(os.version());
/*
  OS tar version ta bolbe Orthat  identifying the kernel version
  Kintu amer Linux e eta dile Release Date dekhai.
*/ 
console.log(os.release());//Returns the operating system 
console.log(os.homedir());//Returns home directory
//Erokom:  /home/Anik



