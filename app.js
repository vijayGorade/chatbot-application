// AIzaSyB_i9bWYZqIa1gOUdODr2C2_92eCMnybi0

console.log("hello chatboot")
const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB_i9bWYZqIa1gOUdODr2C2_92eCMnybi0";




async function fetchData()
{
    
}

fetchData();


let input=document.querySelector(".searchContainer input");
const sendBtn=document.querySelector(".logoSearch i");
const aiMessage=document.querySelector(".userMessage");
const userMessage=document.querySelector(".aiMessage");
 const parentMessageDiv = document.querySelector(".maessageContainer");
sendBtn.addEventListener("click",(e)=>{
createDiv();
})


window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    {
createDiv();
    }
    
})




function createDiv(){
    const newCreateDiv=document.createElement("div");
newCreateDiv.className="userMessage";

newCreateDiv.innerHTML=`<p class="msgAI">${input.value}</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJH-qXKmopcQ4HA6Cj6SxKS5_EL4xDROinOg&s" alt="">`;
parentMessageDiv.appendChild(newCreateDiv);

chatbootCreateDiv(input.value);
input.value=" ";
document.querySelector("#heading").style.display="none";
}




async function chatbootCreateDiv(inputvalue){
    let requstOption={
    method:"POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": inputvalue
          }
        ]
      }
    ]
  })
}
const newCreateDiv=document.createElement("div");
newCreateDiv.className="aiMessage";

    const data= await fetch(url,requstOption);
 const actualData=await data.json();
 console.log(actualData)
 console.log(actualData.candidates[0].content.parts[0].text);
newCreateDiv.innerHTML=``
const img=document.createElement("img");
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvx3n7lEtejoTGFENpfHpMPIZ29ZFfkX9bw&s";
const para=document.createElement("p");

para.innerText=`${actualData.candidates[0].content.parts[0].text}`;
newCreateDiv.appendChild(img);
newCreateDiv.appendChild(para);

// newCreateDiv.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvx3n7lEtejoTGFENpfHpMPIZ29ZFfkX9bw&s" alt=""><p class="msgAI">${}</p>
// `;
parentMessageDiv.appendChild(newCreateDiv);
input.value=" ";
document.querySelector("#heading").style.display="none";
}


