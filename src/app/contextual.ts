import { readFile } from "fs"

readFile("d:/tmp/data.txt", (err, buf) => {

    console.log(buf.toString())
})
