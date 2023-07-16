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
    var text2=document.createTextNode('Delete Expenses');
    var text4=document.createTextNode('Edit Expenses');

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