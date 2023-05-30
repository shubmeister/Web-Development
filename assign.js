//Examine the DOM

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title="Edge Client";

console.log(document.doctype);

var headerTitle=document.getElementById('header-title');
var headerMain=document.getElementById('main-header');

headerTitle.textContent='Hello';

// var title=document.title;

headerTitle.style.borderBottom='solid 3px #000';
headerMain.style.borderBottom='solid 3px #000';
// title.style.borderBottom='solid 3px #000';

var item=document.getElementsByClassName('title1');
console.log(item);

item[0].style.fontWeight = 'bold';
item[0].style.color='green';