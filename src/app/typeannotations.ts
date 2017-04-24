let x: number
x = 10

let y: number = 10
interface Named {
     name: string
 }
class M implements Named {
    public name: string
    constructor(name: string) {
        this.name  = name
    }
}

let m: Named = new M("Jorge")
console.log(m.name)

let double = (a: number): number => {
    return a + a
}

type Doubler = (a: number) => number

let doStuff = (callback: Doubler) => {
    // do LOTS of stuff
    console.log(callback(100))
    console.log(callback(100))
    console.log(callback(100))
}
doStuff(double)
