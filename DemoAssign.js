
var form=document.getElementById("my-form");

var item=document.getElementById("items");

window.addEventListener("DOMContentLoaded",async ()=>{

    try {
      const res= await axios.get('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData')

     for(let i=0;i<res.data.length;i++)
     {
         let temp=Object.values(res.data[i]);
         
         let id=temp[0];
         let candy=temp[1];
         let desc=temp[2];
         let price=temp[3];
         let quan=temp[4];

         let obj={
            Id:id,
            Name:candy,
            Description:desc,
            Price: price,
            Quantity: quan
         };

         let obj_serialize=JSON.stringify(obj);
         sessionStorage.setItem(candy,obj_serialize);

 var li=document.createElement('li');
 var btn=document.createElement('button');
 var btn2=document.createElement('button');
 var btn3=document.createElement('button');
//  var lbl=document.createElement('label');
 var lbl1=document.createElement('label');
 var lbl2=document.createElement('label');
 var lbl3=document.createElement('label');


 li.className='added-item';
 btn.className='buyone';
 btn2.className='buytwo';
 btn3.className='buythree';

//  var text=document.createTextNode(id);
 var text1=document.createTextNode(candy);
 var text2=document.createTextNode(desc);
 var text3=document.createTextNode(price);
 var text4=document.createTextNode(quan);
 var text5=document.createTextNode('Buy One');
 var text6=document.createTextNode('Buy Two');
 var text7=document.createTextNode('Buy Three');
//  var text8=document.createTextNode('--');
 var text9=document.createTextNode('--');
 var text10=document.createTextNode('--');
 var text11=document.createTextNode('--');

 btn.appendChild(text5);
 btn2.appendChild(text6);
 btn3.appendChild(text7);
//  lbl.appendChild(text8);
 lbl1.appendChild(text9);
 lbl2.appendChild(text10);
 lbl3.appendChild(text11);


//  li.appendChild(text);
//  li.appendChild(lbl);
 li.appendChild(text1);
 li.appendChild(lbl1);
 li.appendChild(text2);
 li.appendChild(lbl2);
 li.appendChild(text3);
 li.appendChild(lbl3);
 li.appendChild(text4);
 li.appendChild(btn);
 li.appendChild(btn2);
 li.appendChild(btn3);

 item.appendChild(li);
         
     }
    } catch (error) {
        console.log("unable to get details");
    }

    

 })

form.addEventListener('submit',addItem);

item.addEventListener('click',buyOne);
item.addEventListener('click',buyTwo);
item.addEventListener('click',buyThree);

async function addItem(e)
{
    try {
        e.preventDefault();

    let candy=document.getElementById('candy').value;
    let desc=document.getElementById('descp').value;
    let price=document.getElementById('price').value;
    let quan=document.getElementById('quan').value;

   const res=await axios.post('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData',{
           
        Candy: candy,
        Description:desc,
        Price: price,
        Quantity: quan
    })

       console.log(res);
        getDetails();
        form.reset();
        
    } catch (error) {
        console.log("unable to add items")
    }
}

async function buyOne(e)
{
   try {
    if(e.target.classList.contains('buyone'))
   {
    let li=e.target.parentElement;
    let candy=li.firstChild.textContent;

    let value1=JSON.parse(sessionStorage.getItem(candy));

    let temp=Object.values(value1);
    let id=temp[0];
    let desc=temp[2];
    let price=temp[3];
    let quan=temp[4];
    
    

    if(quan<1)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-1;
    const res=await axios.put('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    })
    sessionStorage.removeItem(candy);
        console.log(res);
        getDetails();
   }
   } catch (error) {
    console.log("unable to update buy one")
   }
}

async function buyTwo(e)
{
   try {
    if(e.target.classList.contains('buytwo'))
   {
    let li=e.target.parentElement;
    let candy=li.firstChild.textContent;

    let value1=JSON.parse(sessionStorage.getItem(candy));

    let temp=Object.values(value1);
    let id=temp[0];
    let desc=temp[2];
    let price=temp[3];
    let quan=temp[4];
    
    

    if(quan<2)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-2;
    const res=axios.put('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    })

    sessionStorage.removeItem(candy);
        console.log(res);
        getDetails();
   }
   } catch (error) {
    console.log("unable to update buy two")
   }
}

async function buyThree(e)
{
   try {
    if(e.target.classList.contains('buythree'))
   {
    let li=e.target.parentElement;
    let candy=li.firstChild.textContent;

    let value1=JSON.parse(sessionStorage.getItem(candy));

    let temp=Object.values(value1);
    let id=temp[0];
    let desc=temp[2];
    let price=temp[3];
    let quan=temp[4];
    
    

    if(quan<3)
    {
        alert(`Insufficient ${candy} Quantity available`);
        return;
    }
    quan=quan-3;
   const res=await axios.put('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData/'+id,{
          
           Candy: candy,
           Description:desc,
           Price: price,
           Quantity: quan

    })
    sessionStorage.removeItem(candy);
        console.log(res);
        getDetails();
   }
   } catch (error) {
    console.log("unable to update buy three")
   }
}

async function getDetails()
{
    try {
        document.getElementById('items').innerHTML = '';
   const res= await axios.get('https://crudcrud.com/api/5394d312950f415ababb59a51f484c3b/appointmentData')

   for(let i=0;i<res.data.length;i++)
     {
         let temp=Object.values(res.data[i]);
         
         let id=temp[0];
         let candy=temp[1];
         let desc=temp[2];
         let price=temp[3];
         let quan=temp[4];

         let obj={
            Id:id,
            Name:candy,
            Description:desc,
            Price: price,
            Quantity: quan
         };

         let obj_serialize=JSON.stringify(obj);
         sessionStorage.setItem(candy,obj_serialize);


 
         var li=document.createElement('li');
         var btn=document.createElement('button');
         var btn2=document.createElement('button');
         var btn3=document.createElement('button');
        //  var lbl=document.createElement('label');
         var lbl1=document.createElement('label');
         var lbl2=document.createElement('label');
         var lbl3=document.createElement('label');
        
        
         li.className='added-item';
         btn.className='buyone';
         btn2.className='buytwo';
         btn3.className='buythree';
        
        //  var text=document.createTextNode(id);
         var text1=document.createTextNode(candy);
         var text2=document.createTextNode(desc);
         var text3=document.createTextNode(price);
         var text4=document.createTextNode(quan);
         var text5=document.createTextNode('Buy One');
         var text6=document.createTextNode('Buy Two');
         var text7=document.createTextNode('Buy Three');
        //  var text8=document.createTextNode('--');
         var text9=document.createTextNode('--');
         var text10=document.createTextNode('--');
         var text11=document.createTextNode('--');
        
         btn.appendChild(text5);
         btn2.appendChild(text6);
         btn3.appendChild(text7);
        //  lbl.appendChild(text8);
         lbl1.appendChild(text9);
         lbl2.appendChild(text10);
         lbl3.appendChild(text11);
        
        
        //  li.appendChild(text);
        //  li.appendChild(lbl);
         li.appendChild(text1);
         li.appendChild(lbl1);
         li.appendChild(text2);
         li.appendChild(lbl2);
         li.appendChild(text3);
         li.appendChild(lbl3);
         li.appendChild(text4);
         li.appendChild(btn);
         li.appendChild(btn2);
         li.appendChild(btn3);

 item.appendChild(li);
         
     }
    
    } catch (error) {
        console.log("unable to get details");
    }
}

