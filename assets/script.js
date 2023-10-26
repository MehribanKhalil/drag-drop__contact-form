// function drag(e) {
//     e.dataTransfer.setData('text',e.target.id)
// }

// function allow(e) {
//     e.preventDefault()
// }

// function drop(e) {
//     e.preventDefault()
//     let data = e.dataTransfer.getData('text')
//     e.target.appendChild(document.getElementById(data))
// }

// document.getElementById('drag1').addEventListener('dragstart',drag)

// let dropArea=document.querySelectorAll('div')
// console.log(dropArea);

// dropArea.forEach((id)=>{
//     let Id=id.getAttribute('id')
//     let element=document.getElementById(Id)
//     element.addEventListener('drop',drop)
//     element.addEventListener('dragover',allow)
// })

// Sert elave ele

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");
const table = document.getElementById("table");
const tableBody = document.getElementById("tbody");
const form = document.getElementById("form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confrimValue = confirmPassword.value;

  if (passwordValue === confrimValue) {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const passwordTd = document.createElement("td");

    tr.append(nameTd, emailTd, passwordTd);
    tableBody.append(tr);
    table.append(tableBody);

    nameTd.textContent = nameValue;
    emailTd.textContent = emailValue;
    passwordTd.textContent = passwordValue;
  } else {
    alert("parolu duzgun daxil edin");
  }

  form.reset();
});
