

class Member {
  constructor(name, email, major, role, biography, time) {
    this.name = name;
    this.email = email;
    this.major = major;
    this.role = role;
    this.biography = biography;
    this.time = time;
  }
}

function save() {
  console.log("sakldjaskld");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let major = document.getElementById("major").value;
  let role = document.getElementById("role").value;
  let biography = document.getElementById("bio").value;
  let time = Date.now;
  let _member = new Member(name, email, major, role, biography, time);

  members.push(_member);
  localStorage.setItem("members_list", JSON.stringify(members));
  members = JSON.parse(localStorage.getItem("members_list"))
  let length = members.length;
  document.getElementById("num_of_mem").innerHTML = length;
  show(members);
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let h3 = document.getElementById("head");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
h3.onclick = function () {
  modal.style.display = "flex";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let members = [];
function show(membersview) {
  document.getElementById("members").innerHTML = '';
  membersview.forEach((members) => {
    let z = 'fName' + members.name + '\n';
    // let memberDiv = HTMLMember(members.firstName, members.email, members.major, members.role, members.bio);
    
    document.getElementById("members").innerHTML += z;
  });
}



