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

// add padding to nsv_var on hover

var over = document.querySelector("#over");
over.addEventListener('mouseenter', function(){
    over.style.padding = "0 0 0 5px"
});
over.addEventListener('mouseleave', function(){
    over.style.padding = "0"
});

var creat = document.querySelector("#creat");
creat.addEventListener('mouseenter', function(){
    creat.style.padding = "0 0 0 5px"
});
creat.addEventListener('mouseleave', function(){
    creat.style.padding = "0"
});

var prici = document.querySelector("#prici");
prici.addEventListener('mouseenter', function(){
    prici.style.padding = "0 0 0 5px"
});
prici.addEventListener('mouseleave', function(){
    prici.style.padding = "0"
});

var hand = document.querySelector("#hand");
hand.addEventListener('mouseenter', function(){
    hand.style.padding = "0 0 0 5px"
});
hand.addEventListener('mouseleave', function(){
    hand.style.padding = "0"
});

var cssp = document.querySelector("#cssp");
cssp.addEventListener('mouseenter', function(){
    cssp.style.padding = "0 0 0 5px"
});
cssp.addEventListener('mouseleave', function(){
    cssp.style.padding = "0"
});

var ms = document.querySelector("#ms");
ms.addEventListener('mouseenter', function(){
    ms.style.padding = "0 0 0 5px"
});
ms.addEventListener('mouseleave', function(){
    ms.style.padding = "0"
});

var ovr = document.querySelector("#ovr");
ovr.addEventListener('mouseenter', function(){
    ovr.style.padding = "0 0 0 5px"
});
ovr.addEventListener('mouseleave', function(){
    ovr.style.padding = "0"
});

var ubb = document.querySelector("#ubb");
ubb.addEventListener('mouseenter', function(){
    ubb.style.padding = "0 0 0 5px"
});
ubb.addEventListener('mouseleave', function(){
    ubb.style.padding = "0"
});

var ia = document.querySelector("#ia");
ia.addEventListener('mouseenter', function(){
    ia.style.padding = "0 0 0 5px"
});
ia.addEventListener('mouseleave', function(){
    ia.style.padding = "0"
});

var quot = document.querySelector("#quot");
quot.addEventListener('mouseenter', function(){
    quot.style.padding = "0 0 0 5px"
});
quot.addEventListener('mouseleave', function(){
    quot.style.padding = "0"
});

var pror = document.querySelector("#pror");
pror.addEventListener('mouseenter', function(){
    pror.style.padding = "0 0 0 5px"
});
pror.addEventListener('mouseleave', function(){
    pror.style.padding = "0"
});

var ovrview = document.querySelector("#ovrview");
ovrview.addEventListener('mouseenter', function(){
    ovrview.style.padding = "0 0 0 5px"
});
ovrview.addEventListener('mouseleave', function(){
    ovrview.style.padding = "0"
});

var mpt = document.querySelector("#mpt");
mpt.addEventListener('mouseenter', function(){
    mpt.style.padding = "0 0 0 5px"
});
mpt.addEventListener('mouseleave', function(){
    mpt.style.padding = "0"
});

var mpg = document.querySelector("#mpg");
mpg.addEventListener('mouseenter', function(){
    mpg.style.padding = "0 0 0 5px"
});
mpg.addEventListener('mouseleave', function(){
    mpg.style.padding = "0"
});

var sd = document.querySelector("#sd");
sd.addEventListener('mouseenter', function(){
    sd.style.padding = "0 0 0 5px"
});
sd.addEventListener('mouseleave', function(){
    sd.style.padding = "0"
});

var cm = document.querySelector("#cm");
cm.addEventListener('mouseenter', function(){
    cm.style.padding = "0 0 0 5px"
});
cm.addEventListener('mouseleave', function(){
    cm.style.padding = "0"
});

var ovrv = document.querySelector("#ovrv");
ovrv.addEventListener('mouseenter', function(){
    ovrv.style.padding = "0 0 0 5px"
});
ovrv.addEventListener('mouseleave', function(){
    ovrv.style.padding = "0"
});

var rr = document.querySelector("#rr");
rr.addEventListener('mouseenter', function(){
    rr.style.padding = "0 0 0 5px"
});
rr.addEventListener('mouseleave', function(){
    rr.style.padding = "0"
});

var mst = document.querySelector("#mst");
mst.addEventListener('mouseenter', function(){
    mst.style.padding = "0 0 0 5px"
});
mst.addEventListener('mouseleave', function(){
    mst.style.padding = "0"
});

var ocr = document.querySelector("#ocr");
ocr.addEventListener('mouseenter', function(){
    ocr.style.padding = "0 0 0 5px"
});
ocr.addEventListener('mouseleave', function(){
    ocr.style.padding = "0"
});

var ovrvw = document.querySelector("#ovrvw");
ovrvw.addEventListener('mouseenter', function(){
    ovrvw.style.padding = "0 0 0 5px"
});
ovrvw.addEventListener('mouseleave', function(){
    ovrvw.style.padding = "0"
});

var drr = document.querySelector("#drr");
drr.addEventListener('mouseenter', function(){
    drr.style.padding = "0 0 0 5px"
});
drr.addEventListener('mouseleave', function(){
    drr.style.padding = "0"
});

var h_fin = document.querySelector("#h_fin");
h_fin.addEventListener('mouseenter', function(){
    h_fin.style.padding = "0 0 0 5px"
});
h_fin.addEventListener('mouseleave', function(){
    h_fin.style.padding = "0"
});

var h_sale = document.querySelector("#h_sale");
h_sale.addEventListener('mouseenter', function(){
    h_sale.style.padding = "0 0 0 5px"
});
h_sale.addEventListener('mouseleave', function(){
    h_sale.style.padding = "0"
});

var h_rev = document.querySelector("#h_rev");
h_rev.addEventListener('mouseenter', function(){
    h_rev.style.padding = "0 0 0 5px"
});
h_rev.addEventListener('mouseleave', function(){
    h_rev.style.padding = "0"
});

var h_b3b = document.querySelector("#h_b3b");
h_b3b.addEventListener('mouseenter', function(){
    h_b3b.style.padding = "0 0 0 5px"
});
h_b3b.addEventListener('mouseleave', function(){
    h_b3b.style.padding = "0"
});

var h_ecom = document.querySelector("#h_ecom");
h_ecom.addEventListener('mouseenter', function(){
    h_ecom.style.padding = "0 0 0 5px"
});
h_ecom.addEventListener('mouseleave', function(){
    h_ecom.style.padding = "0"
});

var h_elrn = document.querySelector("#h_elrn");
h_elrn.addEventListener('mouseenter', function(){
    h_elrn.style.padding = "0 0 0 5px"
});
h_elrn.addEventListener('mouseleave', function(){
    h_elrn.style.padding = "0"
});

var h_pub = document.querySelector("#h_pub");
h_pub.addEventListener('mouseenter', function(){
    h_pub.style.padding = "0 0 0 5px"
});
h_pub.addEventListener('mouseleave', function(){
    h_pub.style.padding = "0"
});

var h_ronp = document.querySelector("#h_ronp");
h_ronp.addEventListener('mouseenter', function(){
    h_ronp.style.padding = "0 0 0 5px"
});
h_ronp.addEventListener('mouseleave', function(){
    h_ronp.style.padding = "0"
});

var h_eg = document.querySelector("#h_eg");
h_eg.addEventListener('mouseenter', function(){
    h_eg.style.padding = "0 0 0 5px"
});
h_eg.addEventListener('mouseleave', function(){
    h_eg.style.padding = "0"
});

var h_mu = document.querySelector("#h_mu");
h_mu.addEventListener('mouseenter', function(){
    h_mu.style.padding = "0 0 0 5px"
});
h_mu.addEventListener('mouseleave', function(){
    h_mu.style.padding = "0"
});

var h_sts = document.querySelector("#h_sts");
h_sts.addEventListener('mouseenter', function(){
    h_sts.style.padding = "0 0 0 5px"
});
h_sts.addEventListener('mouseleave', function(){
    h_sts.style.padding = "0"
});

var h_sup = document.querySelector("#h_sup");
h_sup.addEventListener('mouseenter', function(){
    h_sup.style.padding = "0 0 0 5px"
});
h_sup.addEventListener('mouseleave', function(){
    h_sup.style.padding = "0"
});

var h_sclup = document.querySelector("#h_sclup");
h_sclup.addEventListener('mouseenter', function(){
    h_sclup.style.padding = "0 0 0 5px"
});
h_sclup.addEventListener('mouseleave', function(){
    h_sclup.style.padding = "0"
});

var h_entrp = document.querySelector("#h_entrp");
h_entrp.addEventListener('mouseenter', function(){
    h_entrp.style.padding = "0 0 0 5px"
});
h_entrp.addEventListener('mouseleave', function(){
    h_entrp.style.padding = "0"
});

var h_ss = document.querySelector("#h_ss");
h_ss.addEventListener('mouseenter', function(){
    h_ss.style.padding = "0 0 0 5px"
});
h_ss.addEventListener('mouseleave', function(){
    h_ss.style.padding = "0"
});

var h_sd = document.querySelector("#h_sd");
h_sd.addEventListener('mouseenter', function(){
    h_sd.style.padding = "0 0 0 5px"
});
h_sd.addEventListener('mouseleave', function(){
    h_sd.style.padding = "0"
});

var h_eur = document.querySelector("#h_eur");
h_eur.addEventListener('mouseenter', function(){
    h_eur.style.padding = "0 0 0 5px"
});
h_eur.addEventListener('mouseleave', function(){
    h_eur.style.padding = "0"
});

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
    rethink.style.display = "flex";
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
    automate.style.display = "flex"
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
    global.style.display = "flex"
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