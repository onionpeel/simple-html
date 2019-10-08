const my_element = document.createElement('button');
const page = document.createElement('div');
const intro = document.createElement('h2');

my_element.classList.add('custom_class');

intro.innerText = "Education never rests";
my_element.innerText = "Click for enlightenment";

document.body.style.backgroundColor = 'rgb(255, 255, 153)';
page.className = 'center-text';
page.appendChild(intro);
page.appendChild(my_element);
document.body.appendChild(page);
