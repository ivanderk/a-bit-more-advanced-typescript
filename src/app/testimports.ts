import { hello } from "../app/services"
import { hola as spanishhello } from "../app/services"
import * as greetings from "../app/services"

import Msg from "../app/defaultservices"

console.log(hello())
console.log(spanishhello())
console.log(greetings.hello())
const msg  = new Msg()
console.log(msg.hola())
