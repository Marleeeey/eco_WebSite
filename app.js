const NavBar = document.querySelector('#navbar');
const navMobile = document.getElementById('bar');
const closeBtn = document.querySelector('#close');




navMobile.addEventListener('click', shownavBar);
closeBtn.addEventListener('click', closeFunc)

function shownavBar() {
    NavBar.style.right = '0';
    NavBar.style.transition = 'All .4s ease-in-out';
    closeBtn.style.display = 'block';
}


function closeFunc() {
    NavBar.style.right = '-300px';
    NavBar.style.transition = 'All .4s ease-in-out';
}