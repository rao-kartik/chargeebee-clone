// display on & off of header dropdown
function display_block (input) {
    input.style.display = "block"
}
function display_none (input) {
    input.style.display ="none"
}
function white (input) {
    input.style.color = "white"
}
function color_default (input) {
    input.style.color = "#716890"
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

// services DOM

var rthink_btn = document.getElementById("rethink_btn");
var auto_btn = document.getElementById("automate_btn");
var gbl_btn = document.getElementById("global_btn")

var rethink = document.getElementById("rethink_pricing");
var automate = document.getElementById("automate_finops");
var global = document.getElementById("go_global");

var lin_rt = document.querySelector(".line_left");
var lin_auto = document.querySelector(".line_middle");
var lin_gbl = document.querySelector(".line_right");

rthink_btn.addEventListener('click', function(){
    display_block(rethink);
    display_none(automate);
    display_none(global);
    white(rthink_btn);
    color_default(auto_btn);
    color_default(gbl_btn);
    display_block(lin_rt);
    display_none(lin_auto);
    display_none(lin_gbl);
})
auto_btn.addEventListener('click', function(){
    display_none(rethink);
    display_block(automate);
    display_none(global);
    color_default(rthink_btn);
    white(auto_btn);
    color_default(gbl_btn);
    display_none(lin_rt);
    display_block(lin_auto);
    display_none(lin_gbl);
})
global_btn.addEventListener('click', function(){
    display_none(rethink);
    display_none(automate);
    display_block(global);
    color_default(rthink_btn);
    color_default(auto_btn);
    white(gbl_btn);
    display_none(lin_rt);
    display_none(lin_auto);
    display_block(lin_gbl);
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

