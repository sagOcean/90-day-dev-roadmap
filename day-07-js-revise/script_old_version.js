//shopping cart total calculator



const prompt = require("prompt-sync")();

// var n1 = Number(prompt("enter the number of shirts you want:"))
// var n2 = Number(prompt("enter the number of pants you want:"))
// var n3 = Number(prompt("enter the number of caps you want:"))



function calculateTotal(n1,n2,n3){
    const per_shirt = 500
    const per_pant = 1000
    const per_Cap = 300

    const total = n1*per_shirt + n2*per_pant + n3*per_Cap

    //return total // this is function with return value


    

    console.log("the total price of shirt:"+(n1*per_shirt)+" pant: "+(n2*per_pant)+" cap: "+(n3*per_Cap)+" is:",total);  // this is function with parameters with no return value
}



// console.log("total:"+calculateTotal(1,2,4));
// console.log("total:"+calculateTotal(5,3,4));
// console.log("total:"+calculateTotal(3,7,2));
// console.log("total:"+calculateTotal(2,2,6));
// console.log("total:"+calculateTotal(5,7,9));



