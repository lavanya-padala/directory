const process=require("process");
const mongoose=require("mongoose")
const dataSchema=require("./dataSchema")
const folderpath=process.argv[2];
mongoose.connect("mongodb://127.0.0.1:27017/files",{
    useNewUrlParser:true
})
const fs=require("fs");
//const folderpath="C:/Users/Lavanya Padala/Desktop/Web Technologies";
const arr=fs.readdirSync(folderpath);
for(let i=0;i<arr.length-1;i++){
var direc=folderpath+"/"+arr[i]
var data=fs.statSync(direc)
//console.log(data["dev"]);
// console.log(typeof(data["dev"]));
var datasave=new dataSchema({
    filename:arr[i],
    dev:data["dev"],
    mode:data["mode"],
    nlink:data["nlink"],
    uid:data["uid"],
    gid:data["gid"],
    rdev:data["rdev"],
    blksize:data["blksize"],
    ino:data["ino"],
    size:data["size"],
    blocks:data["blocks"],
    atimeMs:data["atimeMs"],
    mtimeMs:data["mtimeMs"],
    ctimeMs:data["ctimeMs"],
    birthtimeMs:data["birthtimeMs"],
    atime:data["atime"],
    mtime:data["mtime"],
    ctime:data["ctime"],
    birthtime:data["birthtime"]
})
mongo()
}
async function mongo(){
await datasave.save()
}
async function getdata(){
    const data=await dataSchema.find({})
    console.log(data)
}
getdata()
