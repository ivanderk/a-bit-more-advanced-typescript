

let node = {
  type: "Identifier",
  id: "foo"
};

let { type, id } = node
console.log(type) // "Identifier"
console.log(id) // "foo”

let showName = function( { id } : {id:string} ){
  console.log(id)
} 
showName(node); // "foo”
showName({id:"baz"}) // "baz"

/* compile error
showName({id:10})  
*/
let showName2 = function( { id, extra}: {id:string, extra:string}){
    console.log(id)
    console.log(extra)
}

/* compile error - this would work in EcmaScript!
showName2(node)
*/
