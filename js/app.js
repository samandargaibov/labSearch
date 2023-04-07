


// function Search(){
//     setInterval(() => {
//         let a = Math.random()*255;
//         let b = Math.random()*255;
//         let c = Math.random()*255;
//     document.body.style.background = `rgb(${a},${b},${c})`
//     }, 2000);

// }


// function CatchMe(){
//     let a = Math.random()*80;
//     let b = Math.random()*80;
//     let btn = document.querySelector('#id');
//     btn.style.top = `${a}%`
//     btn.style.right = `${b}%`

// }

// let img = document.querySelectorAll('.box img');
// let main_img = document.getElementById("main");

// for(let images of img){
//     images.onclick=function(){
//         let active_img = document.querySelector('.active');
//         this.classList.add('active');
//         active_img.classList.remove('active');
//         let url = this.src;
//         main_img.src=url;

//     }
// }


// let btn = document.querySelector('#btn');
// let h1 = document.querySelector('#text');

// btn.onclick = function(){
//     let inp = document.querySelector('#inp').value;
//     let inp1 = [...inp].reverse().join("")
//     h1.innerHTML = inp1;
// }

// let btn2 = document.querySelector('#btn2');
// let h2 = document.querySelector('#h1');

// btn2.onclick = function(){
//     document.body.style.fontSize = window.getComputedStyle(document.getElementById("h1")).fontSize;

// }

let btn = document.querySelector('#btn');

let arr1 = [{
    id: 1,
    productName: 'Fotoaparat',
    price: 30,
    url: 'https://strgimgr.umico.az/sized/840/1219-805969ef777a52aa749ec141edbdb864.jpg'
},
{
    id: 2,
    productName: 'Daraq',
    price: 20,
    url: 'https://strgimgr.umico.az/sized/840/1219-805969ef777a52aa749ec141edbdb864.jpg'
}
]

let a = document.querySelector('.boxes');

function array() {
    a.innerHTML = '';
    for (let item of arr1) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let span = document.createElement('span');

        div.className = 'box';

        img.setAttribute('src', item.url);
        p.innerHTML = item.productName;
        span.innerHTML = `Price: ${item.price}$`

        div.append(img, p, span);

        a.appendChild(div);
    }
}
let count = 2;
btn.onclick = function () {
    let inp1 = document.querySelector('#inp1').value;
    let inp2 = document.querySelector('#inp2').value;
    let inp3 = document.querySelector('#inp3').value;
    
    count++;

    arr1.push({id: count,productName: inp1,price: inp2,url: inp3});
    array();
    
}


array();

let search = document.querySelector('#inpsearch').value;

const filteredArr=arr1.filter((item)=>Object.entries(item).some())
console.log(a1);