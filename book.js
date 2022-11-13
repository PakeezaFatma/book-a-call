function saveToLocalStorage(event)
{
    // const name = document.getElementById('name').value;
    // console.log(name);
    // const email = document.getElementById('email').value;
    // console.log(email);
    // const phone = document.getElementById('phone').value;
    // console.log(phone);
    // const date = document.getElementById('date').value;
    // console.log(date);

    event.preventDefault();//its stoping the unnecessary reloading page

    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const phone = event.target.phoneNumber.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);

}