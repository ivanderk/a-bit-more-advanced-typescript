//compiles fine
function functionscope(){

    for(i=0;i < 10; i++){
        console.log(i)
    }
    
    if (true){    
        var i = 10000
    }
    console.log(i)
}

//gives error TS2304: Cannot find name 'i'.
function blockscope(){

    let i;    
    for(i=0;i < 10; i++){
        console.log(i)
    }
    
    if (true){    
        let i = 100000
    }
    console.log(i)
}

functionscope()
blockscope()

for(var j= 0; j < 10; j++){
    setTimeout(()=> console.log(`setTimeout with var: ${j}`),100)
}

for(let k= 0; k < 10; k++){
    setTimeout(()=> console.log(`setTimeout with let: ${k}`),100)
}

const co = 100
//gives error TS2540: Cannot assign to 'co' because it is a constant or a read-only property.
//co = 1000

const co2 = {a: 100}
co2.a = 10000000000000000

console.log(co2)

Object.freeze(co2)
//RUN-TIME ERROR: TypeError: Cannot assign to read only property 'a' of object '#<Object>'
co2.a = 0
