// tslint:disable-next-line:ban-types
/*
  A method decorator takes a 3 arguments:

  target - the method being decorated.
  key - the name of the method being decorated.
  value - a property descriptor of the given property if it exists on the object,
  undefined otherwise. The property descriptor is obtained by invoking the
  Object.getOwnPropertyDescriptor() function.

*/
function log(target: any, key: string, value: any) {
    return {
        value(...args: any[]) {
            const result = value.value.apply(this, args)
            console.log(`method: '${key}' called with arguments '${args}' and with result: '${result}'`)
            return result
        }
    }
}

class Demo {
  @log
  public say(...args: string[]) {
    console.log("Inside say with arguments: ", args)
    return 100
  }
}

let d = new Demo()
d.say("Booh", "Lala")
d.say("Bah")
