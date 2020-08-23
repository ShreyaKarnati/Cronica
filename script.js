
// Navigation
var dropbtn = $(`.dropbtn`);
dropbtn.on('click', dropDown);

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var dropbtnTwo = $(`.dropbtnTwo`);
dropbtnTwo.on('click', dropDownTwo);

function dropDownTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtnTwo')) {
  var myDropdownTwo = document.getElementById("myDropdownTwo");
    if (myDropdownTwo.classList.contains('show')) {
      myDropdownTwo.classList.remove('show');
    }
  }
}


var Hindenburg = document.getElementById("Hindenburg")
var Hindenburg_label = document.getElementById("Hindenburg-label")
var tov = document.getElementById("tov")
var tov_label = document.getElementById("tov-label")
var Enabling = document.getElementById("Enabling")
var Enabling_label = document.getElementById("Enabling-label")
var resp = document.getElementById("resp")
var resp_label = document.getElementById("resp-label")
var all_label = document.getElementById("all-label")

var score = document.getElementById("score")

function checkHitlerAnswers() {
  var correct = 0;
  if (Hindenburg.checked) {
    correct ++
    Hindenburg_label.classList.add('right')
  }
  else {
    Hindenburg_label.classList.remove('right')
  }
  if (tov.checked) {
    correct ++
    tov_label.classList.add('right')
  }
  else {
    tov_label.classList.remove('right')
  }
  if (Enabling.checked) {
    correct ++
    Enabling_label.classList.add('right')
  }
  else {
    Enabling_label.classList.remove('right')
  }
  if (resp.checked) {
    correct ++
    resp_label.classList.add('right')
  }
  else {
    resp_label.classList.remove('right')
  }
  if (all.checked) {
    correct ++
    all_label.classList.add('right')
  }
  else {
    all_label.classList.remove('right')
  }

  score.innerHTML = "Your score is " + correct + "/5"
  score.style.display = "block"
  
}

////Castro

var Batista = document.getElementById("Batista")
var Batista_label = document.getElementById("Batista-label")
var all2 = document.getElementById("all2")
var all2_label = document.getElementById("all2-label")
var Marxism_Leninism = document.getElementById("Marxism-Leninism")
var Marxism_Leninism_label = document.getElementById("Marxism-Leninism-label")
var ab = document.getElementById("ab")
var ab_label = document.getElementById("ab-label")
var Angola = document.getElementById("Angola")
var Angola_label = document.getElementById("Angola-label")


var castro_score = document.getElementById("castro_score")

function checkCastroAnswers() {
  var castro_correct = 0;
  if (Batista.checked) {
    castro_correct ++
    Batista_label.classList.add('right')
  }
  else {
    Batista_label.classList.remove('right')
  }
  if (all2.checked) {
    castro_correct ++
    all2_label.classList.add('right')
  }
  else {
    all2_label.classList.remove('right')
  }
  if (Marxism_Leninism.checked) {
    castro_correct ++
    Marxism_Leninism_label.classList.add('right')
  }
  else {
    Marxism_Leninism_label.classList.remove('right')
  }
  if (ab.checked) {
    castro_correct ++
    ab_label.classList.add('right')
  }
  else {
    ab_label.classList.remove('right')
  }
  if (Angola.checked) {
    castro_correct ++
    Angola_label.classList.add('right')
  }
  else {
    Angola_label.classList.remove('right')
  }

  castro_score.innerHTML = "Your score is " + castro_correct + "/5"
  castro_score.style.display = "block"
  
}
//////Mao

var may4 = document.getElementById("may4")
var may4_label = document.getElementById("may4-label")
var ccp = document.getElementById("ccp")
var ccp_label = document.getElementById("ccp-label")
var ab3 = document.getElementById("ab3")
var ab3_label = document.getElementById("ab3-label")
var leap = document.getElementById("leap")
var leap_label = document.getElementById("leap-label")
var women = document.getElementById("women")
var women_label = document.getElementById("women-label")


var mao_score = document.getElementById("mao_score")

function checkMaoAnswers() {
  var mao_correct = 0;
  if (may4.checked) {
    mao_correct ++
    may4_label.classList.add('right')
  }
  else {
    may4_label.classList.remove('right')
  }
  if (ccp.checked) {
    mao_correct ++
    ccp_label.classList.add('right')
  }
  else {
    ccp_label.classList.remove('right')
  }
  if (ab3.checked) {
    mao_correct ++
    ab3_label.classList.add('right')
  }
  else {
    ab3_label.classList.remove('right')
  }
  if (leap.checked) {
    mao_correct ++
    leap_label.classList.add('right')
  }
  else {
    leap_label.classList.remove('right')
  }
  if (women.checked) {
    mao_correct ++
    women_label.classList.add('right')
  }
  else {
    women_label.classList.remove('right')
  }

  mao_score.innerHTML = "Your score is " + mao_correct + "/5"
  mao_score.style.display = "block"
  
}

///Mussolini
var all3 = document.getElementById("all3")
var all3_label = document.getElementById("all3-label")
var steel = document.getElementById("steel")
var steel_label = document.getElementById("steel-label")
var all4 = document.getElementById("all4")
var all4_label = document.getElementById("all4-label")
var ac = document.getElementById("ac")
var ac_label = document.getElementById("ac-label")
var grain = document.getElementById("grain")
var grain_label = document.getElementById("grain-label")


var mus_score = document.getElementById("mus_score")

function checkMusAnswers() {
  var mus_correct = 0;
  if (all3.checked) {
    mus_correct ++
    all3_label.classList.add('right')
  }
  else {
    all3_label.classList.remove('right')
  }
  if (steel.checked) {
    mus_correct ++
    steel_label.classList.add('right')
  }
  else {
    steel_label.classList.remove('right')
  }
  if (all4.checked) {
    mus_correct ++
    all4_label.classList.add('right')
  }
  else {
    all4_label.classList.remove('right')
  }
  if (ac.checked) {
    mus_correct ++
    ac_label.classList.add('right')
  }
  else {
    ac_label.classList.remove('right')
  }
  if (grain.checked) {
    mus_correct ++
    grain_label.classList.add('right')
  }
  else {
    grain_label.classList.remove('right')
  }

  mus_score.innerHTML = "Your score is " + mus_correct + "/5"
  mus_score.style.display = "block"
  
}

///Stalin
var Lenin = document.getElementById("Lenin")
var Lenin_label = document.getElementById("Lenin-label")
var minrights = document.getElementById("minrights")
var minrights_label = document.getElementById("minrights-label")
var womendec = document.getElementById("womendec")
var womendec_label = document.getElementById("womendec-label")
var china2 = document.getElementById("china2")
var china2_label = document.getElementById("china2-label")
var fiveyr = document.getElementById("5yr")
var fiveyr_label = document.getElementById("5yr-label")


var stalin_score = document.getElementById("stalin_score")

function checkStalinAnswers() {
  var stalin_correct = 0;
  if (Lenin.checked) {
    stalin_correct ++
    Lenin_label.classList.add('right')
  }
  else {
    Lenin_label.classList.remove('right')
  }
  if (minrights.checked) {
    stalin_correct ++
    minrights_label.classList.add('right')
  }
  else {
    minrights_label.classList.remove('right')
  }
  if (womendec.checked) {
    stalin_correct ++
    womendec_label.classList.add('right')
  }
  else {
    womendec_label.classList.remove('right')
  }
  if (china2.checked) {
    stalin_correct ++
    china2_label.classList.add('right')
  }
  else {
    china2_label.classList.remove('right')
  }
  if (fiveyr.checked) {
    stalin_correct ++
    fiveyr_label.classList.add('right')
  }
  else {
    fiveyr_label.classList.remove('right')
  }

  stalin_score.innerHTML = "Your score is " + stalin_correct + "/5"
  stalin_score.style.display = "block"
  
}

///Haq
var indopaki= document.getElementById("indopaki")
var indopaki_label = document.getElementById("indopaki-label")
var minrights = document.getElementById("minrights")
var minrights_label = document.getElementById("minrights-label")
var womendec = document.getElementById("womendec")
var womendec_label = document.getElementById("womendec-label")
var china2 = document.getElementById("china2")
var china2_label = document.getElementById("china2-label")
var fiveyr = document.getElementById("5yr")
var fiveyr_label = document.getElementById("5yr-label")


var haq_score = document.getElementById("stalin_score")

function checkStalinAnswers() {
  var haq_correct = 0;
  if (Lenin.checked) {
    haq_correct ++
    Lenin_label.classList.add('right')
  }
  else {
    Lenin_label.classList.remove('right')
  }
  if (minrights.checked) {
    haq_correct ++
    minrights_label.classList.add('right')
  }
  else {
    minrights_label.classList.remove('right')
  }
  if (womendec.checked) {
    haq_correct ++
    womendec_label.classList.add('right')
  }
  else {
    womendec_label.classList.remove('right')
  }
  if (china2.checked) {
    haq_correct ++
    china2_label.classList.add('right')
  }
  else {
    china2_label.classList.remove('right')
  }
  if (fiveyr.checked) {
    haq_correct ++
    fiveyr_label.classList.add('right')
  }
  else {
    fiveyr_label.classList.remove('right')
  }

  haq_score.innerHTML = "Your score is " + haq_correct + "/5"
  haq_score.style.display = "block"
  
}

