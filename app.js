let gameseq=[];
let userseq=[];
let btns=["yellow","red", "purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is Started")
        started=true;
        levelUP();
    }
    
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}

function levelUP()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}
function checkAns(idx)
{
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout( levelUP,1000);
        }
    }
    else
    {
         
        
        h2.innerHTML=`game over! Your Score was <b>${level}</b></br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },520);
        reset();

    }
}
function btnPress()
{
    //  console.log(this);
     let btn =this;
     userFlash(btn);
     userColor= btn.getAttribute("id");
     userseq.push(userColor);
     checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");

for( btn of allBtns)
{
    btn.addEventListener("click", btnPress);
    
}
function reset()
    {
        started=false;
        gameseq=[];
        userseq=[];
        level=0;
    }