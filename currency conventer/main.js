const url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MV6j2WewUWBuMiikUDjFjnpWT1C8zJWlN96aJbmE";
const drops=document.querySelectorAll(".to select");
const button=document.querySelector("#btn");
const amount=document.querySelector("#amt");
let selectedflag="INR";
let ApiCall=false;
const updateFlag=(ele)=>{
    let value=ele.value;
    let con=countryList[value];
    let newsrc=`https://flagsapi.com/${con}/flat/64.png`;
    let img=ele.parentElement.querySelector("img");
    img.src=newsrc;


}


for(let sel of drops)
{
    for(let code in countryList)
    {
        
        let newop=document.createElement("option");
        newop.value=code;
        newop.innerText=countryList[code];
        sel.append(newop);
        
        if(sel.id==="tocurrn" && code==="IN")
        {
            sel.selected=true;
        }
        sel.addEventListener("change",(evt)=>{
            selectedflag=evt.target.value
            updateFlag(evt.target);
            
        });
  
    }  
}
      
button.addEventListener("click",async(evt)=>
    {
        Amtval=amount.value;
        if(Amtval< 1)
            {
                Amtval=1;
                amount.value="1";
            } 
        ApiCall=true;
        let response=await fetch(url);
        let countryMV=await response.json();
        let currency=countryMV.data[selectedflag];
        let finalValue=Amtval*currency;
        let par=document.querySelector("p");
        par.innerText=`1 USD = ${finalValue} ${selectedflag}`;
    
    });


