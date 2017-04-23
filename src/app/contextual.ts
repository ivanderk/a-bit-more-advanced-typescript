import { readFile } from "fs"

readFile("d:/tmp/data.txt", function(err,buf){

    console.log(buf.toString())
})

