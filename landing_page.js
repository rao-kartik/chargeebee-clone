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



// add padding to comp_servies on hover

var subs = document.querySelector("#subs");
subs.addEventListener('mouseenter', function(){
    subs.style.padding = "0 0 0 5px"
});
subs.addEventListener('mouseleave', function(){
    subs.style.padding = "0"
});

var rec_bill = document.querySelector("#rec_bill");
rec_bill.addEventListener('mouseenter', function(){
    rec_bill.style.padding = "0 0 0 5px"
});
rec_bill.addEventListener('mouseleave', function(){
    rec_bill.style.padding = "0"
});


var rec_pay = document.querySelector("#rec_pay");
rec_pay.addEventListener('mouseenter', function(){
    rec_pay.style.padding = "0 0 0 5px"
});
rec_pay.addEventListener('mouseleave', function(){
    rec_pay.style.padding = "0"
});


var acc = document.querySelector("#acc");
acc.addEventListener('mouseenter', function(){
    acc.style.padding = "0 0 0 5px"
});
acc.addEventListener('mouseleave', function(){
    acc.style.padding = "0"
});


var saas = document.querySelector("#saas");
saas.addEventListener('mouseenter', function(){
    saas.style.padding = "0 0 0 5px"
});
saas.addEventListener('mouseleave', function(){
    saas.style.padding = "0"
});


var enter = document.querySelector("#enter");
enter.addEventListener('mouseenter', function(){
    enter.style.padding = "0 0 0 5px"
});
enter.addEventListener('mouseleave', function(){
    enter.style.padding = "0"
});


var int = document.querySelector("#int");
int.addEventListener('mouseenter', function(){
    int.style.padding = "0 0 0 5px"
});
int.addEventListener('mouseleave', function(){
    int.style.padding = "0"
});

var sec = document.querySelector("#sec");
sec.addEventListener('mouseenter', function(){
    sec.style.padding = "0 0 0 5px"
});
sec.addEventListener('mouseleave', function(){
    sec.style.padding = "0"
});

var faq = document.querySelector("#faq");
faq.addEventListener('mouseenter', function(){
    faq.style.padding = "0 0 0 5px"
});
faq.addEventListener('mouseleave', function(){
    faq.style.padding = "0"
});

var stat = document.querySelector("#stat");
stat.addEventListener('mouseenter', function(){
    stat.style.padding = "0 0 0 5px"
});
stat.addEventListener('mouseleave', function(){
    stat.style.padding = "0"
});

var product_d = document.querySelector("#product_d");
product_d.addEventListener('mouseenter', function(){
    product_d.style.padding = "0 0 0 5px"
});
product_d.addEventListener('mouseleave', function(){
    product_d.style.padding = "0"
});

var api = document.querySelector("#api");
api.addEventListener('mouseenter', function(){
    api.style.padding = "0 0 0 5px"
});
api.addEventListener('mouseleave', function(){
    api.style.padding = "0"
});

var support = document.querySelector("#support");
support.addEventListener('mouseenter', function(){
    support.style.padding = "0 0 0 5px"
});
support.addEventListener('mouseleave', function(){
    support.style.padding = "0"
});

var site = document.querySelector("#site");
site.addEventListener('mouseenter', function(){
    site.style.padding = "0 0 0 5px"
});
site.addEventListener('mouseleave', function(){
    site.style.padding = "0"
});

var blog = document.querySelector("#blog");
blog.addEventListener('mouseenter', function(){
    blog.style.padding = "0 0 0 5px"
});
blog.addEventListener('mouseleave', function(){
    blog.style.padding = "0"
});

var compare = document.querySelector("#compare");
compare.addEventListener('mouseenter', function(){
    compare.style.padding = "0 0 0 5px"
});
compare.addEventListener('mouseleave', function(){
    compare.style.padding = "0"
});

var tackle = document.querySelector("#tackle");
tackle.addEventListener('mouseenter', function(){
    tackle.style.padding = "0 0 0 5px"
});
tackle.addEventListener('mouseleave', function(){
    tackle.style.padding = "0"
});

var enter_bill = document.querySelector("#enter_bill");
enter_bill.addEventListener('mouseenter', function(){
    enter_bill.style.padding = "0 0 0 5px"
});
enter_bill.addEventListener('mouseleave', function(){
    enter_bill.style.padding = "0"
});

var web = document.querySelector("#web");
web.addEventListener('mouseenter', function(){
    web.style.padding = "0 0 0 5px"
});
web.addEventListener('mouseleave', function(){
    web.style.padding = "0"
});

var gloss = document.querySelector("#gloss");
gloss.addEventListener('mouseenter', function(){
    gloss.style.padding = "0 0 0 5px"
});
gloss.addEventListener('mouseleave', function(){
    gloss.style.padding = "0"
});

var customers = document.querySelector("#customers");
customers.addEventListener('mouseenter', function(){
    customers.style.padding = "0 0 0 5px"
});
customers.addEventListener('mouseleave', function(){
    customers.style.padding = "0"
});

var partner = document.querySelector("#partner");
partner.addEventListener('mouseenter', function(){
    partner.style.padding = "0 0 0 5px"
});
partner.addEventListener('mouseleave', function(){
    partner.style.padding = "0"
});

var career = document.querySelector("#career");
career.addEventListener('mouseenter', function(){
    career.style.padding = "0 0 0 5px"
});
career.addEventListener('mouseleave', function(){
    career.style.padding = "0"
});

var press = document.querySelector("#press");
press.addEventListener('mouseenter', function(){
    press.style.padding = "0 0 0 5px"
});
press.addEventListener('mouseleave', function(){
    press.style.padding = "0"
});

var terms = document.querySelector("#terms");
terms.addEventListener('mouseenter', function(){
    terms.style.padding = "0 0 0 5px"
});
terms.addEventListener('mouseleave', function(){
    terms.style.padding = "0"
});

var privacy = document.querySelector("#privacy");
privacy.addEventListener('mouseenter', function(){
    privacy.style.padding = "0 0 0 5px"
});
privacy.addEventListener('mouseleave', function(){
    privacy.style.padding = "0"
});