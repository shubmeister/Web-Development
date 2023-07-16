
var form=document.getElementById("my-form");

var item=document.getElementById("items");

window.addEventListener("DOMContentLoaded",()=>{

    axios.get('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData')
    .then(res=>{

     for(let i=0;i<res.data.length;i++)
     {
         let temp=Object.values(res.data[i]);
         
         let id=temp[0];
         let candy=temp[1];
         let desc=temp[2];
         let price=temp[3];
         let quan=temp[4];

 var li=document.createElement('li');
 var btn=document.createElement('button');
 var btn2=document.createElement('button');
 var btn3=document.createElement('button');

 li.className='added-item';
 btn.className='buyone';
 btn2.className='buytwo';
 btn3.className='buythree';

 var text=document.createTextNode(id);
 var text1=document.createTextNode(candy);
 var text2=document.createTextNode(desc);
 var text3=document.createTextNode(price);
 var text4=document.createTextNode(quan);
 var text5=document.createTextNode('Buy One');
 var text6=document.createTextNode('Buy Two');
 var text7=document.createTextNode('Buy Three');

 btn.appendChild(text5);
 btn2.appendChild(text6);
 btn3.appendChild(text7);

 li.appendChild(text);
 li.appendChild(text1);
 li.appendChild(text2);
 li.appendChild(text3);
 li.appendChild(text4);
 li.appendChild(btn);
 li.appendChild(btn2);
 li.appendChild(btn3);

 item.appendChild(li);
         
     }
    })
    .catch(err=>console.log(err));

 })

form.addEventListener('submit',addItem);

item.addEventListener('click',buyOne);
item.addEventListener('click',buyTwo);
item.addEventListener('click',buyThree);

function addItem(e)
{
    e.preventDefault();

    let candy=document.getElementById('candy').value;
    let desc=document.getElementById('descp').value;
    let price=document.getElementById('price').value;
    let quan=document.getElementById('quan').value;

    axios.post('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData',{
           
        Candy: candy,
        Description:desc,
        Price: price,
        Quantity: quan
    }).then((res)=>{
        console.log(res);
        getDetails();
    })
}

function buyOne(e)
{
   if(e.target.classList.contains('buyone'))
   {
    let li=e.target.parentElement;
    let id=li.firstChild.textContent;
    let candy=li.firstChild.nextSibling.textContent;
    let desc=li.firstChild.nextSibling.nextSibling.textContent;
    let price=li.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    let quan=li.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;

    if(quan<1)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-1;
    axios.put('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    }).then((res)=>{
        console.log(res);
        getDetails();
    }).catch(err=>console.log(err));
   }
}

function buyTwo(e)
{
   if(e.target.classList.contains('buytwo'))
   {
    let li=e.target.parentElement;
    let id=li.firstChild.textContent;
    let candy=li.firstChild.nextSibling.textContent;
    let desc=li.firstChild.nextSibling.nextSibling.textContent;
    let price=li.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    let quan=li.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;

    if(quan<2)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-2;
    axios.put('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    }).then((res)=>{
        console.log(res);
        getDetails();
    }).catch(err=>console.log(err));
   }
}

function buyThree(e)
{
   if(e.target.classList.contains('buythree'))
   {
    let li=e.target.parentElement;
    let id=li.firstChild.textContent;
    let candy=li.firstChild.nextSibling.textContent;
    let desc=li.firstChild.nextSibling.nextSibling.textContent;
    let price=li.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    let quan=li.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;

    if(quan<3)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-3;
    axios.put('https://crudcrud.com/api/89a7d96d42f84edd8c74343c0d16470b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    }).then((res)=>{
        console.log(res);
        getDetails();
    }).catch(err=>console.log(err));
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
         let candy=temp[1];
         let desc=temp[2];
         let price=temp[3];
         let quan=temp[4];

 var li=document.createElement('li');
 var btn=document.createElement('button');
 var btn2=document.createElement('button');
 var btn3=document.createElement('button');

 li.className='added-item';
 btn.className='buyone';
 btn2.className='buytwo';
 btn3.className='buythree';

 var text=document.createTextNode(id);
 var text1=document.createTextNode(candy);
 var text2=document.createTextNode(desc);
 var text3=document.createTextNode(price);
 var text4=document.createTextNode(quan);
 var text5=document.createTextNode('Buy One');
 var text6=document.createTextNode('Buy Two');
 var text7=document.createTextNode('Buy Three');
 

 btn.appendChild(text5);
 btn2.appendChild(text6);
 btn3.appendChild(text7);

 li.appendChild(text);
 li.appendChild(text1);
 li.appendChild(text2);
 li.appendChild(text3);
 li.appendChild(text4);
 li.appendChild(btn);
 li.appendChild(btn2);
 li.appendChild(btn3);

 item.appendChild(li);
         
     }
    })
    .catch(err=>console.log(err));
}