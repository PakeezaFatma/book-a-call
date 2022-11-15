function saveToLocalStorage(event)
{
    //  const name = document.getElementById('name').value;
    // console.log(name);
    // const email = document.getElementById('email').value;
    // console.log(email);
    // const phone = document.getElementById('phone').value;
    // console.log(phone);
    // const date = document.getElementById('date').value;
    // console.log(date);


    //Now try storing the user details as an object in the local storage. 
    event.preventDefault();//its stoping the unnecessary reloading page

    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const phone = event.target.phoneNumber.value;
    const  date = event.target.date.value;
    

    const obj ={
         name ,
        email ,
        phone ,
        date
    }
    
    localStorage.setItem(obj.email,JSON.stringify(obj))
    
    showNewUserOnScreen( obj )
    

    

}
function showNewUserOnScreen(user)
{
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user.name}-${user.email} </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

