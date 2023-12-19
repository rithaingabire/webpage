const header=document.querySelector("header");

window.addEventListener("scroll",function(){
	header.classList.toggle("sticky",this.window.scrollY>0);
})
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
 menu.onclick = () =>{
	menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
	
}
const section=document.querySelector("section");

window.addEventListener("scroll",function(){
	section.classList.toggle("sticky",this.window.scrollY>0);
})
let main = document.querySelector('#main-home');
let main-text = document.querySelector('.main-text');
 menu.onclick = () =>{
	main.classList.toggle('bx-x');
    main-text.classList.toggle('open');
	
}
const product=document.querySelector("product");

window.addEventListener("scroll",function(){
	product.classList.toggle("sticky",this.window.scrollY>0);
})
let trending= document.querySelector('#trending-product');
let trending-product = document.querySelector('.product');
 product.onclick = () =>{
	main.classList.toggle('bx-x');
    product.classList.toggle('open');
	
}

