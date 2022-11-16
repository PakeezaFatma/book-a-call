function saveToLocalStorage(event)
{
    
    event.preventDefault();//its stoping the unnecessary reloading page

    const name = event.target.username.value;
    const email = event.target.emailId.value;
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
window.addEventListener("DOMContentLoaded",() => {
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj);

    for (let i =0; i<localStorageKeys.length; i++){
        const key = localStorageKeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
   });




function showNewUserOnScreen(user){

   
    if(localStorage.getItem(user.email) !== null)
    {
        removeUserFromScreen(user.email)
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> '${user.name}-${user.email}'
    <button onclick=deleteUser('${user.email}')> Delete User </button>
    <button onclick=editUserDetails('${user.email}','${user.name}','${user.phone}')>Edit User </button>
    
    </li>` 

    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

    

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}


function removeUserFromScreen(emailId)
{
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    
    }
    
}
            //Edit User

function editUserDetails(emailId,name,phoneNumber){

    document.getElementById('emailId').value = emailId;

    document.getElementById('username').value = name;
    document.getElementById('phoneNumber').value = phoneNumber;
    console.log(document.getElementById('username').value = name);

    deleteUser(emailId)
    //deleteUser(userId)

}