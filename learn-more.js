var rethink_p = document.getElementById("rethink_pricing");
var automate_f = document.getElementById("automate_finops");
var g_global = document.getElementById("go_global");
var rethink_bttn = document.getElementById("rethink_btn");
var automate_bttn = document.getElementById("automate_btn");
var global_bttn = document.getElementById("global_btn");

function rethink() {
    if (rethink_pricing.style.display == "none"){
        rethink_pricing.style.display = "block"
        g_global.style.display == "none"
        automate_f.style.display == "none"
    }
    else {
        rethink_p.style.display == "none";
    }
}
function automate() {
    if (automate_f.style.display == "none"){
        rethink_p.style.display == "none";
        g_global.style.display == "none";
        automate_f.style.display = "block";
    }
}
function global() {
    if (go_global.style.display == "none"){
        rethink_p.style.display == "none";
        automate_f.style.display == "none";
        g_global.style.display == "block";
    }
    else {
        go_global.style.display == "none";
    }
}
rethink_bttn.addEventListener("click", rethink);
automate_bttn.addEventListener("click", automate);
global_bttn.addEventListener("click", global);