
var form=document.getElementById("my-form");

var item=document.getElementById("items")

form.addEventListener('submit',addItem);

function addItem(e)
{
    e.preventDefault();

    var Name=document.getElementById('name').value;
    var Email=document.getElementById('email').value;

    let obj={
        name:Name,
        email:Email
    };

    let obj_serialize=JSON.stringify(obj);
    localStorage.setItem(""+Name+"obj",obj_serialize);

    var li=document.createElement('li');

    li.className='added-item';

    var text=document.createTextNode(Name);
    var text1=document.createTextNode(Email);

    li.appendChild(text);
    li.appendChild(text1);

    item.appendChild(li);

}