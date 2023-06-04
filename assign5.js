
//Traversing DOM
var itemList=document.querySelector('#items');
//parentNode
// itemList.parentNode.style.backgroundColor='#f4f4f4';
//parentElement
// itemList.parentElement.style.backgroundColor='#f4f4f4';

//childNodes
// console.log(itemList.childNodes);
//children
// console.log(itemList.children);
//firstChild
// console.log(itemList.firstChild);
//firstElemntChild
// console.log(itemList.firstElementChild);
//lastChild
// console.log(itemList.lastChild);
//lastElemntChild
// console.log(itemList.lastElementChild);

//createElement

var newDiv=document.createElement('div');

//Add class name

newDiv.className='Hello';

//create text node

var newText=document.createTextNode('Hello World');

//add text to div

newDiv.appendChild(newText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);

//create Element

var newList=document.createElement('li');

//add class name

newList.className='list-group-item';

//add text to li

var newLiText=document.createTextNode('Hello World');

//add text to li

newList.appendChild(newLiText);

var newUl=document.getElementById('items');

newUl.prepend(newList);
// document.querySelector('ul').appendChild(newList);

// var newContainer=document.querySelector('div .list-group');
// var li=document.querySelector('ul li');

// newContainer.insertBefore(newList,li);