const path = require('path');
const fs=require("fs");
var file='../task1';



module.exports.taskmodule=(async(req,res,next) =>{
    let date_ob = new Date();
let string=date_ob.toString();
let datetime = date_ob.getDate() + "-"
                + (date_ob.getMonth()+1)  + "-"
                + date_ob.getFullYear() + " @ "  
                + date_ob.getHours() +
                + date_ob.getMinutes()+date_ob.getSeconds() ;
 
    await fs.open((""+datetime+".txt"), 'w',function (err, file) {
         if (err) throw err;
         console.log('File is opened in write mode.');
      });
await fs.appendFile((""+datetime+".txt"), string, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
      });
      await  fs.readdir(file, (err, files) => {
        if (err)
          console.log(err);
        else {
          console.log("\Filenames with the .txt extension:");
          files.map(file => {
            if (path.extname(file) === ".txt")
              console.log(file);
          })
        }
      }) ;  
     
        res.send("done");
     
    });