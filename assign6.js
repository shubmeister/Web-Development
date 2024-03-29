
var form=document.getElementById('addForm');

var itemList=document.getElementById('items');

itemList.addEventListener('click', removeItem)

form.addEventListener('submit',addItem);

function addItem(e){

    e.preventDefault();
    
    //taking value from input

    var input=document.getElementById('item').value;

    //create li element

    var li=document.createElement('li');

    li.className='list-group-item';

    //adding text

    var text=document.createTextNode(input);

    //adding text to li
    li.appendChild(text);
    //Creating edit button
    var butn=document.createElement('button');
    //adding className to button
    butn.className='btn btn-dark float-right';
    //adding text to button
    butn.appendChild(document.createTextNode('Edit'));
    //adding button to li
    li.appendChild(butn);
    //creating x button
     var btn=document.createElement('button');
     //adding className to btn
     btn.className='btn btn-danger btn-sm float-right mr-2 delete';
     //adding text to btn
     var newtxt=document.createTextNode('X');
     //adding text to btn
     btn.appendChild(newtxt);
     //adding btn to li
     li.appendChild(btn);
     //adding li to list
     itemList.appendChild(li);

}

function removeItem(e)
{
   if(e.target.classList.contains('delete'))
   {
       if(confirm('Are to Sure?'))
       {
        var li=e.target.parentElement;
        itemList.removeChild(li);
       }
   }
}