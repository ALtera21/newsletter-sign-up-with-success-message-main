function errorEmail(){
    const email = document.getElementById('emailAdress');
    const emailValue = email.value;
    const errorEmail = document.querySelector('.error');
    const success = document.querySelector('.success');
    const bold = document.querySelector('.bold');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailValue)){
        email.style.border = '1px solid gray';
        email.style.backgroundColor = "white";
        email.style.color = 'gray';
        success.style.display = "block";
        bold.innerHTML = emailValue;
        errorEmail.innerHTML = '';
    }

    else if(emailValue == ""){
        email.style.border= '1px solid red';
        email.style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        email.style.color = 'red';
        success.style.display = "none";
        errorEmail.innerHTML = 'Please enter your email';
    }

    else{
        email.style.border= '1px solid red';
        email.style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        email.style.color = 'red';
        success.style.display = "none";
        errorEmail.innerHTML = 'Valid email required';
    }
}

function refresh(){
    window.location.reload();
}

document.querySelector('.submit').addEventListener('click', () => errorEmail());
document.querySelector('.dismiss').addEventListener('click', () => refresh());


function errorEmailMobile(){
    const emailMobile = document.getElementById('emailAdressMobile');
    const emailValueMobile = emailMobile.value;
    const errorEmailMobile = document.querySelector('.errorMobile');
    const successMobile = document.querySelector('.successMobile');
    const boldMobile = document.querySelector('.boldMobile');

    const emailRegexMobile = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegexMobile.test(emailValueMobile)){
        emailMobile.style.border = '1px solid gray';
        emailMobile.style.backgroundColor = "white";
        emailMobile.style.color = 'gray';
        successMobile.style.display = "block";
        boldMobile.innerHTML = emailValueMobile;
        errorEmailMobile.innerHTML = '';
    }

    else if (emailValueMobile == ""){
        emailMobile.style.border= '1px solid red';
        emailMobile.style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        emailMobile.style.color = 'red';
        successMobile.style.display = "none";
        errorEmailMobile.innerHTML = 'Please enter your email';
    }

    else{
        emailMobile.style.border= '1px solid red';
        emailMobile.style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        emailMobile.style.color = 'red';
        successMobile.style.display = "none";
        errorEmailMobile.innerHTML = 'Valid email required';
    }
}

document.querySelector('.submitMobile').addEventListener('click', () => errorEmailMobile());
document.querySelector('.dismissMobile').addEventListener('click', () => refresh());




