let speeches= new SpeechSynthesisUtterance();
let voices=[];
let select= document.querySelector("select");
let button=document.querySelector("button");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speeches.voice=voices[0];
    voices.forEach((voice,i)=>{
        select.options[i]= new Option(voice.name,i);
    })};
    select.addEventListener("change",()=>{
        speeches.voice=voices[select.value];
    })

button.addEventListener("click", ()=>
{speeches.text=document.querySelector("textarea").value;
 window.speechSynthesis.speak(speeches);
});
