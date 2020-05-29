 async function getUsers (){
 const respond = await fetch('https://jsonplaceholder.typicode.com/users')

const userData = await respond.json();
return userData;

}
window.onload = getUsers()

 async function presentUsers(){
     const users = await getUsers()
     console.log(users)
     let userContainer1 = document.querySelector('.user')
        userContainer1.innerHTML +=`
         <table class= "table">
         <th>Name</th>
         <th>Username</th>
         <th>Email</th>
        </table>
         `
        users.forEach(user => {
         let userContainer = document.querySelector('.user')
          
         userContainer.innerHTML += `
        
         <tr>
        
         <td>${user.name}  </td>
         
         <td>${user.username}  </td>
         
         <td>${user.email}  </td>
         </tr>
         
    
         `
         
     });
 }
 window.onload = presentUsers()

 
 //dropdownContainer.innerHTML = '';
 
 
 

  function dropdown(){

    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(respond => respond.json())
    .then(data =>{
        //data.forEach(user => {
            
            let dropdownContainer = document.querySelector('.dropdown')
            let defaultOption = document.createElement('select')
            defaultOption.name.value = ' users'
            defaultOption.innerHTML +=  `
             
            <option value="name">name</option>
           <option value="username">username</option>
           <option value="email">email</option>
           `
    
            dropdownContainer.appendChild(defaultOption)
                
        
        //})
        
    

    })
 }
 window.onload = dropdown()
// filter 
window.onload = function filterSongs(){

 let searchInput = document.querySelector('#search')
//console.log(searchInput);
if (searchInput.value === ""){
    alert('you must type something')
}else{
     (searchInput.value)
}
}












// event listener
let button = document.querySelector('.btn')
button.addEventListener('click', filterSongs)