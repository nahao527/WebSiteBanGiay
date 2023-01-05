function validatepass(pass) {
    let checkp = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= "A" && pass[i] <= "Z") {
            checkp = true;
            break;
        }
    }
    return pass.length >= 6 && checkp == true;
}

function validate() {
    let p = document.getElementById("signup-password");
    let pass = p.value;
    if (validatepass(pass) == false) {
        let error2 = document.getElementsByClassName("error")[1];
        error2.style.display = "block";
    }
}
let index = Math.floor(Math.random() * 7);;
Hiencheck(index);

function Hiencheck(k) {
    let a = document.getElementsByClassName("check");
    a[k].style.display = "block";
}

function Ancheck(k) {
    let a = document.getElementsByClassName("check");
    a[k].style.display = "none";
}

function HienThiCheckTiepTheo() {
    Ancheck(index);
    index = Math.floor(Math.random() * 7);
    Hiencheck(index);
}
let Captcha = ["4E2", "522", "54F", "F63", "D63", "CAE", "25E"];

function Checkpoint(ma) {
    for (let i = 0; i < Captcha.length; i++)
        if (ma == Captcha[i]) {
            return true;
        }
    return false;
}

function Testcheckma() {
    let c = document.getElementById("security");
    let ma = c.value;
    if (Checkpoint(ma) == false) {
        let error3 = document.getElementsByClassName("error")[2];
        error3.style.display = "block";
    }
}

function Checkemail(email) {
    if (email.length < 10) {
        return false;
    }
    for (let i = 0; i < email.length; i++)
        if (email[i] == "@") {
            return true;
        }
    return false;
}

function testemail() {
    let e = document.getElementById("signup-email");
    let email = e.value;
    if (Checkemail(email) == false) {
        let error3 = document.getElementsByClassName("error")[0];
        error3.style.display = "block";
    }
}

function Thanhcong() {
    let p = document.getElementById("signup-password");
    let pass = p.value;
    let c = document.getElementById("security");
    let ma = c.value;
    let e = document.getElementById("signup-email");
    let email = e.value;
    if (validatepass(pass) == true && Checkemail(email) == true && Checkpoint(ma) == true) {
        document.getElementById("Thanhcong").style.display = "block";
    }

}
document.getElementById("submitlogin").addEventListener("click", testemail)
document.getElementById("submitlogin").addEventListener("click", Testcheckma)
document.getElementById("submitlogin").addEventListener("click", validate)
document.getElementById("submitlogin").addEventListener("click", Thanhcong)