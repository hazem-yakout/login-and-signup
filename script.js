const login = document.querySelector("form.login");
const sign = document.querySelector("form.signup");
const logbtn = document.querySelector("label.login");
const signbtn = document.querySelector("label.signup");
const signlink = document.querySelector(".signup-link a");
const logintext = document.querySelector(".title-text .login");
const signtext = document.querySelector(".title-text .signup");
signbtn.onclick = () => {
    login.style.marginLeft = "-50%";
    logintext.style.marginLeft = "-50%";
};
logbtn.onclick = () => {
    login.style.marginLeft = "0%";
    logintext.style.marginLeft = "0%";
};
signlink.onclick = () => {
    signbtn.onclick();
    return false;
};