//Client side js (for browser interaction)

const weatherForm = document.querySelector('form');
const search =  document.querySelector('input');

const messagOne = document.querySelector('#message-1');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messagOne.textContent = 'Loading...';
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{     //fetch method for requesting can only be used in client side js and not server side js
    response.json().then((data)=>{                                               // hence we cannot run this fn. in node 
       if(data.error){
        messagOne.textContent = data.error
       }
       else{
        messagOne.textContent = data.forecast;
       }
    })
})
})



