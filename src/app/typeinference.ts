let fullName = `Perico Palotes`
let age = 37
let sentence = `Hola, me llamo ${ fullName }`
console.log(sentence)

// error TS7006: Parameter 'name' implicitly has an 'any' type.
//let englishName = function(name){
    
let englishName = function(name:any){
  let sentence = `Hello, my name is ${ name }`
  console.log(sentence) 
}
englishName(fullName)
englishName(1000)   // Hello, my name is 1000

let englishName2 = function(name: string){
  let sentence = `Hello, my name is ${ name }`
  console.log(sentence) 
}

//englishName2(1000) //Compile error
