
const input = document.getElementById('text-input');

console.log(input)

if(localStorage.getItem('text')){
    document.getElementById('text-input').value = JSON.parse(localStorage.getItem('text'));
}

input.addEventListener('keyup' , (e) => {
    console.log(e.target.value)
    localStorage.setItem('text' ,  JSON.stringify(e.target.value));
})


function genrateImogi(){
  const imoji = document.createElement('span');
  imoji.textContent  = "🥳";
//   document.body.innerHTML = imoji;
imoji.style.left = Math.random() * 95 + "vw"
// imoji.style.right = Math.random() * 100 + "vh"
document.body.append(imoji);
setTimeout(() => {
    // genrateImogi();
    imoji.remove();
  },4000)
}

setInterval(() => {
  genrateImogi();
},100)