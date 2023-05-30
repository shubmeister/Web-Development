
const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{

    e.preventDefault();
    console.log("Submit Clicked");
});

btn.addEventListener('mouseover',(e)=>{

    e.preventDefault();
    console.log("Mouse In");
});

btn.addEventListener('mouseout',(e)=>{

    e.preventDefault();
    console.log("Mouse Out");
});

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}