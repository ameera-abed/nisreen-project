 const tbody=document.getElementById("tbody");
 const tbodyh=document.getElementById("tbodyh");
 let id=50;
fetchDataPatiant();


 function fetchDataPatiant(){
 fetch('./patiant.json')
    .then((response) => response.json())
    .then((data) => createTable(data,tbody));
 }

 function createTable(data,tbody){
    console.log("here")
    dataObject=data;
  const len= data.length;
  const arr=["id","first_name","last_name","phone","gender","address","birthdate","Blood-type","previous_opreation","note","id_card","allergies"];

    for(let i=0;i< len;i++){
        console.log("1")
        var row = tbody.insertRow(i);
        
        for (let j=0;j<12;j++)
        {
            console.log('2')
            var cell = row.insertCell(j);
        cell.innerHTML = data[i][arr[j]];
       
    }
    }
    
 }   

 function search(){
    let inputId =document.getElementById("input-search").value;

 }

 fetch('./hospital.json')
 .then((response) => response.json())
 .then((data) => createTabeHspital(data,tbodyh));
 
 function createTabeHspital(data,tbodyh){
    console.log("here")
  const len= data.length;
  const arr=["id","hospital_name","address","phone1","phone2","admin_name","passward","email"
];

    for(let i=0;i< len;i++){
        console.log("1")
        var row = tbodyh.insertRow(i);
        
        for (let j=0;j<8;j++)
        {
            console.log('2')
            var cell = row.insertCell(j);
        cell.innerHTML = data[i][arr[j]];
       
    }
    }
 } 


 function postData(){
     id=id+1;
const input1=document.getElementById("input1").value;
const input2=document.getElementById("input2").value;
const input3=document.getElementById("input3").value;
const input4=document.getElementById("input4").value;
const input5=document.getElementById("input5").value;
const input6=document.getElementById("input6").value;
const input7=document.getElementById("input7").value;
const input8=document.getElementById("input8").value;
const input9=document.getElementById("input9").value;
const input10=document.getElementById("input10").value;
const input11=document.getElementById("input11").value;

 const dataToSend = JSON.stringify({id,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11});
let dataReceived = ""; 
fetch("./patiant.json", {
    credentials: "same-origin",
    mode: "same-origin",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: dataToSend
})
    .then(resp => {
        if (resp.status === 200) {
            return resp.json()
        } else {
            console.log("Status: " + resp.status)
            return Promise.reject("server")
        }
    })
    .then(dataJson => {
        dataReceived = JSON.parse(dataJson)
    })
    .catch(err => {
        if (err === "server") return
        console.log(err)
    })

console.log(`Received: ${dataReceived}`) 
 }

 function addPatiant(){
   

 }

 function checkemail(data){
    const inputEmail=document.getElementById("exampleInputEmail1").value;
    const inputPassward=document.getElementById("exampleInputPassword1").value;
    
    for(let i=0;i<data.length;i++){
        if(data[i].email === inputEmail && data[i].password === inputPassward)
        {
            window.location.href = "./profile.html";      }
 
    }
    const para = document.createElement("p");
    para.innerText = "try again your email or password not correct";
    formLogin.appendChild(para);
    para.style.color = "#ff0000";

 }
  function checkHospital(data){
    console.log("hospital check")
    const inputEmail=document.getElementById("exampleInputEmail1").value;
    const inputPassward=document.getElementById("exampleInputPassword1").value;
    
    for(let i=0;i<data.length;i++){
        if(data[i].email === inputEmail && data[i].passward === inputPassward)
        {
            console.log("inside the loop")
            window.location.href = "./profileHospital.html";      }
 
    }
    const para = document.createElement("p");
    para.innerText = "try again your email or password not correct";
    formLogin.appendChild(para);
    para.style.color = "#ff0000";

  }


 const formLogin=document.getElementById("formLogin");
formLogin.addEventListener('submit', (event) => {
  event.preventDefault()
  var admin = document.getElementById("flexRadioDefault1"); 
  var hospital = document.getElementById("flexRadioDefault2"); 
  if(admin.checked === true){
  fetch('./admin.json')
  .then((response) => response.json())
  .then((data) => checkemail(data));}
  else if(hospital.checked === true){
    fetch('./hospital.json')
    .then((response) => response.json())
    .then((data) => checkHospital(data))
  }
})
