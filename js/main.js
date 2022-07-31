// /////////active-border-botton-start*
const items = document.querySelectorAll(".collapse ul li")
const item2 = document.querySelectorAll(".nav-item ul li a")
const item3 = document.querySelectorAll("ul li button")

items.forEach((items) => {
  items.addEventListener("click", () => {
    document.querySelector(".active1").classList.remove("active1")
    items.classList.add("active1")

  })
})
// /////////active-border-botton-end*
// /////////active-color-change-start*
item2.forEach((item2) => {
  item2.addEventListener("click", () => {
    document.querySelector(".pp").classList.remove("pp")
    item2.classList.add("pp")
  })
})
// /////////active-color-change-end*
item3.forEach((item3) => {
  item3.addEventListener("click", () => {
    document.querySelector(".qq").classList.remove("qq")
    item3.classList.add("qq")
  })
})
// bar (x) start*
function myFunction(x) {
  x.classList.toggle("change");
}
// bar(x)end*

// /////////////////////////////////////
$(window).scroll(function () {
  var currentOffSet1 = $(window).scrollTop()
  if (currentOffSet1 > 100) {
    $("#nav").css({ "background-color": "rgba(78, 77, 75, 0.9)", "transition": "all .5s" })
    $(".btnUp").fadeIn(2000)

  }
  else {
    $("#nav").css({ "background-color": "transparent" })
    $(".btnUp").fadeOut(2000)

  }
})
// scroll-start*
$(".nav-link").click(function(){
 let currentLink=$(this).attr("href");
  let currentoffset2=currentLink.offset().top;
  $("html,body").animate({scrollTop:currentoffset2},5000)
})

// ///////////////////////////////////////////////////////////////////



var bgColors=["red","blue","violet","yellow","steelblue","silver","orange","maroon","#12b181"]
for(var i=0; i<bgColors.length;i++){
  $(".color-option ul li").eq(i).css("background-color",bgColors [i])
}


$(".color-option ul li").click(function(){
  let currentBg=$(this).css("background-color")
  $(".changeBg").css("color",currentBg)
})

$(".color-box i").click(function(){
  let options=$(".color-option").outerWidth()
  if($(".color-box").css("right")=="0px")
  {
    $(".color-box").animate({"right":-options},2000)
      // btnUp//
      $(".btnUp").fadeIn(2000)
  }
  else{
    $(".color-box").animate({"right":0},2000)
     // btnUp//
     $(".btnUp").fadeout(2000)
  }

})

// btnUp//
$(".btnUp").click(function(){
  $("body,html").animate({scrollTop:0},1000)
})

// /loading////

$(document).ready(function(){

    $(".Loadding").fadeOut(3000, function(){
        $("body").css({"overflow":"auto"})
    })
   
})


const item4 = document.querySelectorAll(".color-option ul li")

item4.forEach((item4) => {
  item4.addEventListener("click", () => {
    document.querySelector(".kk").classList.remove("kk")
    item4.classList.add("kk")
  })
})
























var typed = new Typed('.element', {
  strings: ["Simone Olivia", "a Photographer.", "a Designer."],
  typeSpeed: 100,
  backDelay: 100,
  loop: true,
  loopCount: Infinity,
  backSpeed: 100,
  smartBackspace: false // Default value
});








$('.counter').counterUp({
  delay: 10,
  time: 7000
});






$('.testimonel-carousel').owlCarousel({
  margin: 20,
  loop: true,
  items: 1,
  autoplay: true,
  dots: true,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 }
  }
});








function sayHell(){
  $(".hovOur").css("cssText","display:none !important")
}

// my wok slider

imgs=Array.from(document.querySelectorAll(".img-fluid"))
lightContainer=document.querySelector(".light-container")
lightContainerBox=document.querySelector(".light-containerBox")
next=document.getElementById("next")
pev=document.getElementById("pev")

var curentIndex=0;

close=document.getElementById("close")
for(i=0;i<imgs.length;i++){
  imgs[i].addEventListener("click",slider)
  function slider(e){
    lightContainer.style.display="flex"
    var imgSrc=e.target.src;
    lightContainerBox.style.backgroundImage=`url(${imgSrc})`;
    curentIndex=imgs.indexOf(e.target)
    

  }
}


close.addEventListener("click",getClose)
function getClose(){
  lightContainer.style.display="none"
}


next.addEventListener("click",getNext)
function getNext(){
  curentIndex++;
  if(curentIndex==imgs.length){
    curentIndex=0;
  }
  var imgSrc=imgs[curentIndex].src;
  lightContainerBox.style.backgroundImage=`url(${imgSrc})`
}

prev.addEventListener("click",getPrev)
function getPrev(){
  curentIndex--;
  if(curentIndex<0){
    curentIndex=imgs.length-1;
  }
  var imgSrc=imgs[curentIndex].src;
  lightContainerBox.style.backgroundImage=`url(${imgSrc})`
}


document.addEventListener("keydown",function(e){

  if(e.key=="Escape"){
    getClose()
  }else if(e.key=="ArrowRight"){
    getNext()
  }else if(e.key=="ArrowLeft"){
    getPrev()
  }

})

lightContainer.addEventListener("click",function(e){
  if(e.target!==close &&e.target!==next&&e.target!==prev){
    getClose()
  }
})
































var inputName=document.getElementById("inputName");
var inputEmail=document.getElementById("inputEmail");
var inputComment=document.getElementById("inputComment");
var addBtn=document.getElementById("addBtn")
var inputs=document.getElementsByClassName("mp1")

// export function saeed(){

// } 

// export let contents=JSON.parse(localStorage.getItem("contentList"))


var nameRajex

var contents=[]

function addContent(){
  var content={
    inputName:inputName.value,
    inputEmail:inputEmail.value,
    inputComment:inputComment.value,
  }
  contents.push(content)
  localStorage.setItem("contentList",JSON.stringify(contents))
}

addBtn.onclick=function(){
  addContent()
  displayData()
  clearForm()
}


function displayData(){
  cartona="";
  for(var i=0; i<contents.length;i++){
    cartona+=
    `
    <tr>
    <td>${i + 1}</td>
        <td>${contents[i].inputName}</td>
        <td>${contents[i].inputEmail}</td>
        <td>${contents[i].inputComment}</td>
        <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
        </tr>

    `

  }
  document.getElementById("tableBody").innerHTML=cartona;
}




function clearForm(){
  for(i=0; i<inputs.length;i++){
    inputs[i].value="";
  }
}


function delet(index){
  contents.splice(index,1)
  displayData()
  localStorage.setItem("contentList",JSON.stringify(contents))

}


function search(val){
  cartona="";
  for(var i=0; i<contents.length;i++){
    if(contents[i].inputName .toLowerCase().includes(val.toLowerCase())){
      cartona+=
    `
    <tr class="soka">
    <td>${i + 1}</td>
        <td>${contents[i].inputName}</td>
        <td>${contents[i].inputEmail}</td>
        <td>${contents[i].inputComment}</td>
        <td><button onclick=delet(${i}) class="btn btn-danger">Delete</button></td>      
        </tr>

    `

    }
    
  }
  document.getElementById("tableBody").innerHTML=cartona;

}


