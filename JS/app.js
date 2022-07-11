// create li
let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");


// append li to nav
let ul = document.getElementById("nav").getElementsByTagName("ul")[0];
ul.append(li , li2 , li3, li4, li5);
ul.setAttribute("class","flex-tab");


// clreate text 
let text1= li.innerHTML="Education";
let text2= li2.innerHTML="Soft skils";
let text3= li3.innerHTML="Technecal Skills";
let text4= li4.innerHTML="Languges";
let text5= li5.innerHTML="Courses";

// class tab (style li)
li.className="tab";
li2.className="tab";
li3.className="tab";
li4.className="tab";
li5.className="tab";

//add id to li
li.id="Education_li";
li2.id="Soft_skils_li";
li3.id="Technecal_Skills_li";
li4.id="Languges_li";
li5.id="Webs_Develops_li";

// remove backdround 

function remove_back()
{
  const serch = document.querySelectorAll(".back");
  serch.forEach(remove=>{
    remove.classList.remove("back");
  })
}

////////////////////add listinar to Education Div////////////////////////////////////////

let div_Education = document.getElementById("Education_contetn");
li.addEventListener('click', function x(){
  remove_back();
  let elementt = document.getElementById(this.id);
  elementt.classList.add("back");
      document.querySelector('#Education').scrollIntoView({
      behavior:'smooth'
      });
   
      div_Education.classList.add("back");   
});

/////////////////////// scrool to Education Div ///////////////////////////////////////////

window.addEventListener("scroll", function(){
  if(div_Education.getBoundingClientRect().top< this.window.innerHeight &&
  div_Education.getBoundingClientRect().top>1
  ){
   div_Education.classList.add("back");
   li.classList.add("back");
  }else {
    div_Education.classList.remove("back");
    li.classList.remove("back");
 
  }
 })

 
////////////////////add listinar to Soft skills Div////////////////////////////////////////

let divSoft_skils = document.getElementById("Soft_skils_contetn");
li2.addEventListener('click', function x(){
  remove_back();
  let element2 = document.getElementById(this.id);
  console.log(element2);
  element2.classList.add("back");
      document.querySelector('#Soft_skils_div').scrollIntoView({
      behavior:'smooth'
      });
   
      divSoft_skils.classList.add("back");   
});

/////////////////////// scrool to Soft skills Div ///////////////////////////////////////////

window.addEventListener("scroll", function(){
  if(divSoft_skils.getBoundingClientRect().top< this.window.innerHeight &&
  divSoft_skils.getBoundingClientRect().top>1
  ){
    divSoft_skils.classList.add("back");
   li2.classList.add("back");
   console.log("div"+divSoft_skils.getBoundingClientRect().top);
   console.log("scrool"+this.window.innerHeight );
  }else 
  {
    divSoft_skils.classList.remove("back");
    li2.classList.remove("back");
 
  }
 })

 
////////////////////add listinar to Technecal skills Div////////////////////////////////////////

let div_Technecal = document.getElementById("Technecal_Skills_content");
li3.addEventListener('click', function x(){
  remove_back();
  let element3 = document.getElementById(this.id);
  element3.classList.add("back");
      document.querySelector('#Technecal_Skills').scrollIntoView({
      behavior:'smooth'
      });
   
      div_Technecal.classList.add("back");   
});

/////////////////////// scrool to Technecal skills Div ///////////////////////////////////////////

window.addEventListener("scroll", function(){
  if(div_Technecal.getBoundingClientRect().top< this.window.innerHeight &&
  div_Technecal.getBoundingClientRect().top>1
  ){
    div_Technecal.classList.add("back");
   li3.classList.add("back");
  }else {
    div_Technecal.classList.remove("back");
    li3.classList.remove("back");
 
  }
 })


 
////////////////////add listinar to languges Div////////////////////////////////////////

let div_Languge = document.getElementById("Languge_content");
li4.addEventListener('click', function x(){
  remove_back();
  let element4 = document.getElementById(this.id);
  element4.classList.add("back");
      document.querySelector('#Languge').scrollIntoView({
      behavior:'smooth'
      });
      div_Languge.classList.add("back");   
});

/////////////////////// scrool to languges Div ///////////////////////////////////////////

window.addEventListener("scroll", function(){
  if(div_Languge.getBoundingClientRect().top< this.window.innerHeight &&
  div_Languge.getBoundingClientRect().top>1
  ){
    div_Languge.classList.add("back");
   li4.classList.add("back");
  }else {
    div_Languge.classList.remove("back");
    li4.classList.remove("back");
 
  }
 })
 
////////////////////add listinar to Web develop Div////////////////////////////////////////

let div_web = document.getElementById("Webs_Develops_content");
li5.addEventListener('click', function x(){
  remove_back();
  let element5 = document.getElementById(this.id);
  element5.classList.add("back");
      document.querySelector('#Webs_Develops_div').scrollIntoView({
      behavior:'smooth'
      });
      div_web.classList.add("back");   
});

/////////////////////// scrool to Webs Div ///////////////////////////////////////////

window.addEventListener("scroll", function(){
  if(div_web.getBoundingClientRect().top< this.window.innerHeight &&
  div_web.getBoundingClientRect().top>1
  ){
    div_web.classList.add("back");
   li5.classList.add("back");
  }else 
  {
    div_web.classList.remove("back");
    li5.classList.remove("back");
 
  }
 })

 

