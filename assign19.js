var form=document.getElementById("my-form");

var item=document.getElementById("items");

 window.addEventListener("DOMContentLoaded",()=>{

    axios.get('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData')
       .then(res=>{

        for(let i=0;i<res.data.length;i++)
        {
            let temp=Object.values(res.data[i]);
            
            let id=temp[0];
            let Name=temp[1];
            let Email=temp[2];
            let Phone=temp[3];

    var li=document.createElement('li');
    var btn=document.createElement('button');
    var edit=document.createElement('button')

    li.className='added-item';
    btn.className='delete';
    edit.className='edit';

    var text5=document.createTextNode(id);
    var text=document.createTextNode(Name);
    var text1=document.createTextNode(Email);
    var text3=document.createTextNode(Phone);
    var text2=document.createTextNode('Delete');
    var text4=document.createTextNode('Edit');

    btn.appendChild(text2);
    edit.appendChild(text4);

    li.appendChild(text5);
    li.appendChild(text);
    li.appendChild(text1);
    li.appendChild(text3);
    li.appendChild(btn);
    li.appendChild(edit);

    item.appendChild(li);
            
        }
       })
       .catch(err=>console.log(err));

 })

 form.addEventListener('submit',addItem);

item.addEventListener('click',removeItems);
item.addEventListener('click',editItems);



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
       .then(res=>{
          
          console.log(res);
          getDetails();
       })
       .catch(err=>console.log(err));
    
}

function removeItems(e)
{
    if(e.target.classList.contains('delete'))
   {
       
        var li=e.target.parentElement;
        var name=li.firstChild.textContent;
        console.log(name);
        item.removeChild(li);
        axios.delete('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData/'+name)
        .then(res=>console.log(res.data+'Deleted'))
        .catch(err=>console.log(err));
       }
}

function editItems(e)
{
    if(e.target.classList.contains('edit'))
   {
       
        var li=e.target.parentElement;
        var id=li.firstChild.textContent;
        var name=li.firstChild.nextSibling.textContent;
        var email=li.firstChild.nextSibling.nextSibling.textContent;
        var phone=li.firstChild.nextSibling.nextSibling.nextSibling.textContent;
        // console.log(name);
        item.removeChild(li);

        axios.delete('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData/'+id)
        .then(res=>console.log(res.data+'Deleted'))
        .catch(err=>console.log(err));


    document.getElementById('name').value=name;
    document.getElementById('email').value=email;
    document.getElementById('phone').value=phone;
        
   }

}

function getDetails()
{
    document.getElementById('items').innerHTML = '';
    axios.get('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData')
    .then(res=>{

     for(let i=0;i<res.data.length;i++)
     {
         let temp=Object.values(res.data[i]);
         
         let id=temp[0];
         let Name=temp[1];
         let Email=temp[2];
         let Phone=temp[3];

 var li=document.createElement('li');
 var btn=document.createElement('button');
 var edit=document.createElement('button')

 li.className='added-item';
 btn.className='delete';
 edit.className='edit';

 var text5=document.createTextNode(id);
 var text=document.createTextNode(Name);
 var text1=document.createTextNode(Email);
 var text3=document.createTextNode(Phone);
 var text2=document.createTextNode('Delete');
 var text4=document.createTextNode('Edit');

 btn.appendChild(text2);
 edit.appendChild(text4);

 li.appendChild(text5);
 li.appendChild(text);
 li.appendChild(text1);
 li.appendChild(text3);
 li.appendChild(btn);
 li.appendChild(edit);

 item.appendChild(li);
         
     }
    })
    .catch(err=>console.log(err));
}