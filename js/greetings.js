const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {      // event에 대한 첫 element는 이벤트에 대한 정보가 포함됨 
    event.preventDefault();          // preventDefualt 브라우저의 기본 동작을 막아줌  
    
    const username = loginInput.value;   
    localStorage.setItem(USERNAME_KEY, username);
    ongreeting(username);
}

function ongreeting(props) {
    let username = props;
    greeting.innerText = `Hello ${username}  /`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    // show greeting h1
    ongreeting(savedUsername);
}

//localStorage, 웹은 사양한 스토리지 정보를 가지고있는데 그중 가장 쉽게 사용가능한 스토리지