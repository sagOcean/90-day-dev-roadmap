// shopping cart total calculator


const prompt = require("prompt-sync")();

// let n1 = Number(prompt("enter the number of shirt:"))
// let n2 = Number(prompt("enter the number of pants:"))
// let n3 = Number(prompt("enter the number of caps:"))



const per_shirt = 500, per_pant = 1000, per_cap = 300

//arrow function to calculate the total
let total = (n1,n2,n3)=>{

    return (n1*per_shirt+ n2*per_pant + n3*per_cap)

    // it can also be written as: n1*per_shirt+ n2*per_pant + n3*per_cap   no "return"

}
//using ${} here, the shortcut

// console.log(`total price of shirt:${n1*per_shirt}, pant:${n2*per_pant}, cap:${n3*per_cap}:${total(n1,n2,n3)}`)

//testing with 4 diffferent cases


if(total(1,2,4)===3700){

    console.log(total(1,2,4)===3700) //prints true or false

    console.log("total:"+total(1,2,4));
}

else{
    
    console.log(total(1,2,4)===3700)
}



if(total(3,7,2)===9100){

    console.log(total(3,7,2)===9100)

    console.log("total:"+total(3,7,2));
}

else{
    
    console.log(total(3,7,2)===9100)
}



if(total(2,2,6)===4800){

    console.log(total(2,2,6)===4800)

    console.log("total:"+total(2,2,6));
}

else{
    
    console.log(total(2,2,6)===4800)
}



if(total(5,3,4)===6700){

    console.log(total(5,3,4)===6700)

    console.log("total:"+total(5,3,4));
}

else{
    
    console.log(total(5,3,4)===6700)
}


