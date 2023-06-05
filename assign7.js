
var form=document.getElementById('addForm');

var itemList=document.getElementById('items');

var filter = document.getElementById('filter');
//delete event to list 
itemList.addEventListener('click', removeItem)
//adding event to form
form.addEventListener('submit',addItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){

    e.preventDefault();
    
    //taking value from input

    var input=document.getElementById('item').value;

    var desc=document.getElementById('description').value;

    //create li element

    var li=document.createElement('li');

    li.className='list-group-item';

    //adding text

    var text=document.createTextNode(input);

    var text1=document.createTextNode(desc);

    //adding text to li
    li.appendChild(text);
    li.appendChild(text1);
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

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }