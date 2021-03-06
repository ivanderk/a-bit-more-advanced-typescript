let node = {
  id: "foo",
  type: "Identifier"
 }

let { type, id } = node
console.log(type) // "Identifier"
console.log(id) // "foo”

// compile error when --noImplicitAny is set
// let showName = function( { id } ){
// tslint:disable-next-line:no-shadowed-variable
let showName = ( { id }: {id: string} ) => {
  console.log(id)
}
showName(node) // "foo”
showName({id: "baz"}) // "baz"

/* compile error
showName({id:10})
*/
let showName2 = ( { id, extra}: {id: string, extra: string}) => {
    console.log(id)
    console.log(extra)
}

/* compile error - this would work in EcmaScript!
showName2(node)
*/

let input = [1, 2, 3]
// create NEW variables first and second
let [fst, snd] = input
console.log(fst)
console.log(snd)

// remaining items in a list using the syntax ...name :
let [firstelement, ...remainder] = [1, 2, 3, 4]
console.log(firstelement) // outputs 1
console.log(remainder) // outputs [ 2, 3, 4 ]

// Nested destructuring of Tuples/arrays. Only have a binding for the named item
let justanarray: [string, boolean, number[]] = ["data", true, [3, 4]]
let [, , [, elem2]] = justanarray
console.log(`Nested element in array ${elem2}`)

// Nested destructuring of objects
let nestedobject = {anumber: 100, nested: {deep: "ok"}}
let {nested: {deep}} = nestedobject
// compile error: only names "on the right"  of the expression are declared
// console.log(nested)
console.log(deep)
// variable renaming; confusing syntax!
let {nested: {deep: deepest}} = nestedobject
console.log(deepest)
