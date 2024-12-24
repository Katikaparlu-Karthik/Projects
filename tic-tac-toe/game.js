let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let resultmsg=document.querySelector(".msg");
let newgamebtn=document.querySelector(".newgame");
let turnO=true;
const WinningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO)
        {
            box.innerText="O";
            box.style.color="red";
            turnO=false;
       }
       else
       {
            box.innerText="X";
            box.style.color="green";
            turnO=true;
       }
       box.disabled=true;
       checkwinner();
    });

})
let checkwinner=()=>{
    for(pattren of WinningPattern){
        let pos1=boxes[pattren[0]].innerText;   // it is use to get the value,which is in the box  based on the pattren//
        let pos2=boxes[pattren[1]].innerText;
        let pos3=boxes[pattren[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                // console.log("winner");
                result(pos1);

            }
        }
   }
}
let result=(winner)=>
    {

        
        resultmsg.classList.remove("hide");
        newgamebtn.classList.remove("hide");
        resultmsg.innerText=`Congratulations to Winner ${winner}`;
        empty();
        
}

let empty=()=>
{
    for(box of boxes)
        {
        box.disabled=true;

    }
}

let newgame=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        resultmsg.classList.add("hide");
        newgamebtn.classList.add("hide");
        
    }

}


reset.addEventListener("click",newgame);
newgamebtn.addEventListener("click",newgame);
