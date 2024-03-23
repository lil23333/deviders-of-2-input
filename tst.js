let button = document.querySelector('button');
let input1 = document.querySelector('#input1');
let p1 = document.querySelector('#p1');

let input2 = document.querySelector('#input2');

button.addEventListener('click', ()=> {
    let str1 = input1.value;
    let str2 = input2.value;
    str1 = str1.replace(/,/g, ' ');
    str2 = str2.replace(/,/g, ' ');
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    arr1 = arr1.map(e=>{ let a = +e; return a});
    arr2 = arr2.map(e=>{ let a = +e; return a});

    let newArr1 = arr1.map(el=> {
    let arr11 = [];
    for (let i = 0; i <= el; i++) {
    let n = el % i;
    if (n === 0 ) {
    arr11.push(i);
    }} 
    return arr11});
    let  newArr11 = newArr1.flat(Infinity);

    let newArr2 = arr2.map(el=> {
    let arr22 = [];
    for (let i = 0; i <= el; i++) {
    let n = el % i;
    if (n === 0 ) {
    arr22.push(i);
    }} 
    return arr22});
    let  newArr22 = newArr2.flat(Infinity);
    p1.textContent =  p1.textContent + ' ' + newArr11 + newArr22

});