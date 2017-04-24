
interface Named {
  name: string
}
class Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  // constructor(public name: string){}
}
let p: Named
// OK, because of structural typing
p = new Person("Hagard")
console.log(p)

// ---------------------------------------------------------

// also with anonymous objects
let o = { name: "Olaf" , surname: "Leifson"}
p = o

// compile error
// let n : Named =  { name: "Olaf" , surname: "Leifson"}

console.log(p)
