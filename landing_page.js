// display on & off of header dropdown
function display_block (input) {
    input.style.display = "block"
}
function display_none (input) {
    input.style.display ="none"
}
var pdt = document.getElementById("prdt");
var sol = document.getElementById("solutions");
var cust = document.getElementById("customer");
var price = document.getElementById("pricing");

var dropdown_pdt = document.querySelector(".header_dropdown_product");
var dropdown_sol = document.querySelector(".header_dropdown_solutions");

pdt.addEventListener('mouseenter', function(){
    display_block(dropdown_pdt);
    display_none(dropdown_sol);
})
dropdown_pdt.addEventListener('mouseleave', function(){
    display_none(dropdown_pdt);
})

sol.addEventListener('mouseenter', function(){
    display_block(dropdown_sol);
    display_none(dropdown_pdt);
})
dropdown_sol.addEventListener('mouseleave', function(){
    display_none(dropdown_sol);
})
price.addEventListener('mouseenter', function(){
    display_none(dropdown_pdt);
    display_none(dropdown_sol);
})
cust.addEventListener('mouseenter', function(){
    display_none(dropdown_pdt);
    display_none(dropdown_sol);
})
// stretch arrow
var arrow_stretch = document.querySelectorAll(".arrow");
function add_arrow(event){
        event.target.getAttribute('class')
        event.target.removeAttribute('class');
        event.target.setAttribute('class', "fi-rr-angle-small-right arrow")
}
arrow_stretch.addEventListener('mouseenter',add_arrow);
// add padding to comp_servies on hover

var elem = document.getElementsByClassName("hover_pad");
// for (var i = 0; i < elem.length; i++){
//     console.log(elem[i])
// }
elem.addEventListener('mouseenter', function(){
    elem.target.style.padding = "10px"
})