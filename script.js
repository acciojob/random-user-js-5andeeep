//your code here

const api = "https://randomuser.me/api/";

var userData;

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  userData = data.results[0];
//   console.log(userData);
  document.querySelector("#userPhoto").src = userData.picture.large;
  document.querySelector("#user-name").innerHTML = `${userData.name.first} ${userData.name.last}`;
  document.getElementById('additional-info').innerText = "";
}

// function to show information based on clicked button...
function showInfo(button){
    const attr = button.getAttribute('data-attr');

    // Display relevant info based on the clicked button
    switch(attr){
        case 'age':
            document.getElementById('additional-info').innerText = getUserAge(userData);
            break;
        case 'email':
            document.getElementById('additional-info').innerText = getUserEmail(userData);
            break;
        case 'phone':
            document.getElementById('additional-info').innerText = getUserPhone(userData);
            break;
    }
}


// function to get age based on user's name
function getUserAge(user){
    return user.dob.age;
}

// function to get email based on user's name
function getUserEmail(user){
    return user.email;
}

// function to get phone based on user's name
function getUserPhone(user){
    return user.phone;
}

function getUser(){
    getData();
}

getData();
