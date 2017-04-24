let fullName = `Perico Palotes`
const age = 37
let sentence = `Hola, me llamo ${ fullName }`
console.log(sentence)

// error TS7006: Parameter 'name' implicitly has an 'any' type.
// let englishName = function(name){

let englishName = (name: any) => {
  const sentence = `Hello, my name is ${ name }`
  console.log(sentence)
}
englishName(fullName)
englishName(1000)   // Hello, my name is 1000

let englishName2 = (name: string) => {
  const sentence2 = `Hello, my name is ${ name }`
  console.log(sentence2)
}
// Compile error
// englishName2(1000)

let arr1 = [0, 1, 2]
// Not inferred to be a Tuple, but rather an array of elements of two possible types: number OR String
let arr2 = [500, "Internal Server Error"]
console.log(arr2)
// compile error
// let tuple : [number, string] = arr2

type HTTPError = [number, string]
let error1: HTTPError = [500, "Internal Server Error"]
let error2 = [500, "Internal Server Error"] as HTTPError // Type Asseryion (not "cast")
console.log(error1, error2)
