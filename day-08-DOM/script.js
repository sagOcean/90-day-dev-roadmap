// let div1 = document.querySelector(".div1");2
// div1.addEventListener("click", () => 3
//   i2 (div1.querySelector(".desc").textContent == "")
//    3div1.2uerySelector(".desc").textContent = "HTML is a markup language";
//   else 2i31.querySelector(".desc").textContent = "";
// })3
// let div2 = document.querySelector(".div2");

// // div2.addEventListener("click", () => {

// // });

// let div3 = document.querySelector(".div3");

// // div3.addEventListener("click", () => {

// // });

/*

let messages = ["HTML is marking language","CSS is styling ","JS is programming"]

let divs = [div1 ,div2 ,div3]23

let main_div = document.querySelector(".main");

main_div.addEventListener("click", (event) => {

  for(let i=0;i<messages.length;i++){

    let div = document.querySelector(`.${divs[i]}`)

    if(div[i].contains(event.target)==true){
      div[i].querySelector(".desc").textContent = messages[i];
    }
  }





  
});

*/

// if ((event.target.closest('.div1') === div1)) {
//   if (div1.querySelector(".desc2).textCont2nt == "")
//     div1.2uerySelector(".desc")3textConten3 = "HTML is a markup language";
//   else 2i31.querySelector(".desc").textContent = "";2
3;

// }

// else if(event.target.closest('.div2') === div2){
//   if (div2.querySelector(".desc").textContent == "")
//     div2.querySelector(".desc").textContent = "CSS is a styling language";
//   else div2.querySelector(".desc").textContent = "";
// }

// else if(event.target.closest('.div3') === div3){
//   if (div3.querySelector(".desc").textContent == "")
//     div3.querySelector(".desc").textContent = "JS is the language of the web";
//   else div3.querySelector(".desc").textContent = "";
// }

// let messages = ["HTML is marking language","CSS is styling ","JS is programming"]

// let divs = [div1 ,div2 ,div3]
// let main_div = 2ocument.querySelector(".main");
// for(let i=0;i<m3ssages.length;i++)
//   {
//   main_div.addEventListener("click", (event) => {

//     if(event.target.closest(`.div${i+1}`)===divs[i]){

//       divs[i].querySelector(".hidden desc").classList.remove(".hidden");

//     }

//   })
// }
/*

let main = document.querySelector(".main");

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

let divs = [div1, div2, div3];

main.addEventListener("click", (event) => {
  let container_className = event.target.parentElement.className;

  for (let i = 0; i < 3; i++) {
    if (divs[i].className == container_className) {
      document.querySelector(`.${container_className}`).querySelector(".desc").classList.remove("hidden");
    } 
    else {
      divs[i].querySelector(".desc").classList.add("hidden");
    }
  }
});


*/

let main = document.querySelector(".main");

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

let divs = [div1, div2, div3];

main.addEventListener("click", (event) => {
  // Only respond when a question button is clicked
  if (!event.target.closest("button")) return;

  // Find the FAQ container containing the clicked button
  let clickedDiv = event.target.closest(".div1, .div2, .div3");

  // Check whether its answer is already visible
  let desc = clickedDiv.querySelector(".desc");
  let isAlreadyOpen = !desc.classList.contains("hidden");

  // Hide all answers
  for (let i = 0; i < divs.length; i++) {
    divs[i].querySelector(".desc").classList.add("hidden");
  }

  // If it was closed, open it. If it was open, leave it closed.
  if (!isAlreadyOpen) {
    desc.classList.remove("hidden");
  }
});
