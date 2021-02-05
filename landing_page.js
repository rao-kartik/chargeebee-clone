function display_block (input) {
    input.style.display = "block"
}
function display_none (input) {
    input.style.display ="none"
}
var pdt = document.getElementById("prdt");
var dropdown_pdt = document.getElementById("header_dropdown_product");
pdt.addEventListener('mouseover', function(){
    display_block(dropdown_pdt);
})