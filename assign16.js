
var form=document.getElementById("my-form");

// var item=document.getElementById("items")

form.addEventListener('submit',addItem);


function addItem(e)
{
    e.preventDefault();

    var Name=document.getElementById('name').value;
    var Email=document.getElementById('email').value;
    var Phone=document.getElementById('phone').value;

    axios.post('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData',{
        name: Name,
        email: Email,
        phone: Phone
      })
       .then(res=>console.log(res))
       .catch(err=>console.log(err));

}

