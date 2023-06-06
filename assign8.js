
var btn=document.getElementById('my-form');

btn.addEventListener('submit', addDetail);

function addDetail(e)
{
    e.preventDefault();

    let name=document.getElementById('name').value;

    let email=document.getElementById('email').value;

    localStorage.setItem('name',''+name+'');
    localStorage.setItem('email',''+email+'');

    btn.reset();
}