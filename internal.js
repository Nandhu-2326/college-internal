// con2 start
alert("username and password: cs")
const btnlog=document.querySelector(".btnlog")
const btncreate=document.querySelector(".btncreate")
const btnsign=document.querySelector(".btnsign")
const con2=document.querySelector(".con2")
const con3=document.querySelector(".con3")
const page3=document.querySelector(".page3")
const con5=document.querySelector(".con5")
var username=document.querySelector(".un");
var pass=document.querySelector(".up");
var aler=document.querySelector(".alert");
const btnclose=document.querySelector(".btnX")
const check1=document.querySelector(".check1")
const check2=document.querySelector(".check2")
const check3=document.querySelector(".check3")
const check4=document.querySelector(".check4")
const p3submit=document.querySelector(".p3submit")
const sel1=document.querySelector(".sel1");
const sel5=document.querySelector(".sel5");
let us="cs";
let pa="cs";

btnclose.addEventListener("click",()=>
{
   aler.style.display="none";
})

btnlog.addEventListener("click",()=>
{ 
   
   if(us==username.value && pa==pass.value)
   {  
      con2.style.display="none";
      page3.style.display="block";
      aler.style.display="none";
   }
   else
   {
   aler.style.display="block"
   }

  if(us!=username.value)
   {
     check1.style.display="block";
     aler.style.display="block"
   }
   else
   {
      check2.style.display="block";
   }

   if(pa!=pass.value)
   {
      check2.style.display="block";
      aler.style.display="block"
   }
   else
   {
   check1.style.display="block";
   }

})

btncreate.addEventListener("click",()=>
{
   con2.style.display="none";
   con5.style.display="block";
})

btnsign.addEventListener("click",()=>
{
   con5.style.display="none";
   con2.style.display="block";
})

p3submit.addEventListener("click",()=>
{
   
   if(sel1.value != "" && sel5.value != "")
   {  
      page3.style.display="none";
      con3.style.display="block";
      aler.style.display="none";
      check4.style.display="none";
      check3.style.display="none";
   }
   else
   {
   aler.style.display="block"
   }

  if(sel1.value != "")
   {
     check3.style.display="none";
     aler.style.display="none"
   }
   else
   {
      aler.style.display="block"
      check3.style.display="block";
   }

   if(sel5.value != "")
   {
      check4.style.display="none";
      aler.style.display="none"
   }
   else
   {
      aler.style.display="block"
     check4.style.display="block";
   }

})


const btnback=document.querySelector(".btnback")
btnback.addEventListener("click",()=>
{
   con4.style.display="none";
   con3.style.display="block";
})



// con2 and con3 close

// con4 active
const con4=document.querySelector(".con4")
const submit=document.querySelector(".submit")
// con4 close

// All values 
submit.addEventListener("click",()=>{
const sel2=document.querySelector(".sel2");
const sel3=document.querySelector(".sel3");
const sel4=document.querySelector(".sel4");
const sel6=document.querySelector(".sel6");
const sel7=document.querySelector(".sel7");
const inter1=document.querySelector(".inter1");
const inter2=document.querySelector(".inter2");
const roll=document.querySelector(".roll");

tbody=document.querySelector(".tbody")
tr=document.createElement("tr");



   sel1.value;
   sel2.value;
   sel3.value;
   sel4.value;
   sel5.value;
   sel6.value;
   sel7.value;
   inter1.value;
   inter2.value;
   roll.value;

   if(inter1.value<=30 && inter2.value<=30 && sel1.value && sel2.value && sel3.value && sel4.value && sel5.value && sel6.value && sel7.value && roll.value)
   {
   let tot;
   let mark;
   let mark1;
   let Avg;


   mark=Number(inter1.value)+Number(inter2.value);
   Avg=mark/4;
   mark1=Number(sel6.value)+Number(sel7.value);
   tot=Avg+mark1;
   con3.style.display="none"
   con4.style.display="block"


   trr=`<td>${tot}</td>`+ `<td>${Avg}</td>` +`<td>${roll.value.toUpperCase()}</td>`+`<td>${sel2.value}</td>`+`<td>${sel3.value}</td>`+
   `<td>${sel4.value}</td>`+ `<td>${inter1.value}</td>`+`<td>${inter2.value}</td>`+`<td>${sel5.value}</td>`+`<td>${sel6.value}</td>`+`<td>${sel7.value}</td>`+`<td>${sel1.value}</td>`;
   tr.innerHTML=trr;
   tbody.append(tr);
   }
else
   {
      alert("Check Details")
      con4.style.display="none"
   }

})