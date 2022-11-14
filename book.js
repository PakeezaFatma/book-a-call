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


    //Now try storing the user details as an object in the local storage. 
    event.preventDefault();//its stoping the unnecessary reloading page


    let myobj ={
         name : event.target.username.value,
        email : event.target.emailid.value,
        phone : event.target.phoneNumber.value
    }
    
    let myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem("myobj" , myobj_serialized);
    let myobj_deserialized = JSON.parse(localStorage.getItem("myobj"));
    console.log(myobj_deserialized);
    
    
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('phone',phone);

}