var form=document.getElementById("my-form");

var item=document.getElementById("items");

for(let i=0;i<localStorage.length;i++)
{
    let key = localStorage.key(i);

    let value1=JSON.parse(localStorage.getItem(key));

    let temp=Object.values(value1);

    let Name=temp[0];
    let Email=temp[1];
    let Phone=temp[2];

    var li=document.createElement('li');
    var btn=document.createElement('button');
    var edit=document.createElement('button')

    li.className='added-item';
    btn.className='delete';
    edit.className='edit';

    var text=document.createTextNode(Name);
    var text1=document.createTextNode(Email);
    var text3=document.createTextNode(Phone);
    var text2=document.createTextNode('Delete Expenses');
    var text4=document.createTextNode('Edit Expenses');

    btn.appendChild(text2);
    edit.appendChild(text4);

    li.appendChild(text);
    li.appendChild(text1);
    li.appendChild(text3);
    li.appendChild(btn);
    li.appendChild(edit);

    item.appendChild(li);
}


form.addEventListener('submit',addItem);

item.addEventListener('click',removeItems);
item.addEventListener('click',editItems);



function addItem(e)
{
    e.preventDefault();

    var Name=document.getElementById('name').value;
    var Email=document.getElementById('email').value;
    var Phone=document.getElementById('category').value;

    let obj={
        name:Name,
        email:Email,
        phone:Phone
    };

    let obj_serialize=JSON.stringify(obj);
    localStorage.setItem(Name,obj_serialize);

    var li=document.createElement('li');
    var btn=document.createElement('button');
    var edit=document.createElement('button')

    li.className='added-item';
    btn.className='delete';
    edit.className='edit';

    var text=document.createTextNode(Name);
    var text1=document.createTextNode(Email);
    var text3=document.createTextNode(Phone);
    var text2=document.createTextNode('Delete Expenses');
    var text4=document.createTextNode('Edit Expenses');

    btn.appendChild(text2);
    edit.appendChild(text4);

    li.appendChild(text);
    li.appendChild(text1);
    li.appendChild(text3);
    li.appendChild(btn);
    li.appendChild(edit);

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
        localStorage.removeItem(name);
       }
}

function editItems(e)
{
    if(e.target.classList.contains('edit'))
   {
       
        var li=e.target.parentElement;
        var name=li.firstChild.textContent;
        var email=li.firstChild.nextSibling.textContent;
        var phone=li.firstChild.nextSibling.nextSibling.textContent;
        // console.log(name);
        item.removeChild(li);
        localStorage.removeItem(name);

    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    document.getElementById('category').value=phone;
        
   }

}