const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, "test"), (err)=> {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder created")
// });

const filePath = path.join(__dirname, "test", "test.txt");
const filePathMore = path.join(__dirname, "test", "hwMsg.txt");
fs.writeFile(filePath, "Hello from NodeJS", (err) => {
  if(err) {
    throw err;
  } else {
    console.log("Ok! File created");
  }
})

fs.writeFile(filePathMore, "\nHello World", (err) => {
  if(err) {
    throw err;
  } else {
    console.log("Ok! File created");
  }
})
fs.appendFile(filePathMore, "\nHello China", (err) => {
  if(err) {
    throw err;
  } else {
    console.log("Ok! File created");
  }
})

//read file
fs.readFile(filePath,'utf-8', (err, content)=> {
  if (err) {
    throw err;
  } else {
    // const data = Buffer.from(content);
    // console.log("content", data.toString());
    console.log(content);
  }
})