
var form=document.getElementById("my-form");

var item=document.getElementById("items")

form.addEventListener('submit',addItem);

item.addEventListener('click',removeItems);

function addItem(e)
{
    e.preventDefault();

    var Name=document.getElementById('name').value;
    var Email=document.getElementById('email').value;
    var Phone=document.getElementById('phone').value;

    let obj={
        name:Name,
        email:Email,
        phone:Phone
    };

    let obj_serialize=JSON.stringify(obj);
    localStorage.setItem(""+Name+"obj",obj_serialize);

    var li=document.createElement('li');
    var btn=document.createElement('button');

    li.className='added-item';
    btn.className='delete';

    var text=document.createTextNode(Name);
    var text1=document.createTextNode(Email);
    var text3=document.createTextNode(Phone);
    var text2=document.createTextNode('Delete');

    btn.appendChild(text2);

    li.appendChild(text);
    li.appendChild(text1);
    li.appendChild(text3);
    li.appendChild(btn);

    item.appendChild(li);

}

function removeItems(e)
{
    if(e.target.classList.contains('delete'))
   {
       
        var li=e.target.parentElement;
        var name=li.firstChild.textContent;
        console.log(name);
        item.removeChild(li);
        localStorage.removeItem(name+'obj');
       }
}