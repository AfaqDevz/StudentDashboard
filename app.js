let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let username = document.getElementById('username');
let maintable = document.getElementById('maintable');
let savedData = JSON.parse(localStorage.getItem("studentData")) ?? [];
let serial = 23800;

let stconvert = localStorage.getItem('studentData');
let stdata = JSON.parse(stconvert);

function addbutton() {
  let rollNumber = Math.round(Math.random() * 9999);
  if (firstName.value !== "" && lastName.value !== "" && username.value !== "") {
      if (!maintable.innerHTML.includes(username.value)) {
        maintable.innerHTML += `<tr>
                    <th scope="row">${++serial}</th>
                    <td>${firstName.value}</td>
                    <td>${lastName.value}</td>
                    <td class="usercheck">${username.value}</td>
                    <td>${rollNumber}</td>
                  </tr>`;
        let student = {
          serial: serial,
          firstName: firstName.value,
          lastName: lastName.value,
          username: username.value,
          rollNumber: rollNumber
        }

        savedData.push(student);

        localStorage.setItem('studentData', JSON.stringify(savedData));

        added();
      }
      else {
        sameUsername()
      }
    }
  else {
    fillFields()
  }
}

for (let i = 0; i < stdata.length; i++) {
  serial = stdata[i].serial;
  maintable.innerHTML += `<tr>
  <th scope="row">${stdata[i].serial}</th>
  <td>${stdata[i].firstName}</td>
  <td>${stdata[i].lastName}</td>
  <td class="usercheck">${stdata[i].username}</td>
  <td>${stdata[i].rollNumber}</td>
  </tr>`;
}



function fillFields() {
  Swal.fire({
    icon: "error",
    title: "Please fill all the fields!",
  });
}

function sameUsername() {
  Swal.fire({
    icon: "warning",
    title: "Username already exists!",
  });
}

function added() {
  Swal.fire({
    icon: "success",
    title: "Added details!",
  });
}