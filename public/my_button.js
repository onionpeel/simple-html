const btn = document.querySelector('button');

const random = number => {
  return Math.floor(Math.random()*(number + 1));
};

const changeColor = () => {
  const rgbCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rgbCol;
};

const addImage = () => {
  let img = document.createElement('img');
  img.src = "https://religionnews.com/wp-content/uploads/2019/01/webRNS-Alexandria-Ocasio-Cortez2-013119.jpg";
  img.height = 610;
  img.width = 488;
  img.alt = 'aoc';
  img.classList.add('center');
  document.body.appendChild(img);
};

const addMessage = () => {
  const message = document.createElement('h1');
  message.innerText = 'News flash just for you!';
  message.classList.add('center-text');
  document.body.appendChild(message);
};

const addLink = () => {
  const link = document.createElement('div');
  const text = document.createElement('a');
  text.innerText = 'Click here to have your eyes opened';
  text.href = 'https://www.cdc.gov/cancer/dcpc/research/articles/concord-2.htm';
  link.appendChild(text);

  const numberOne = document.createElement('h3');
  numberOne.innerText = 'Good news!  Alternative math makes it possible to be number one with lower numbers';
  link.appendChild(numberOne);

  link.className = 'center-text';
  numberOne.className = 'center-text';
  document.body.appendChild(numberOne);
  document.body.appendChild(link);
};

btn.onclick = function() {
  setInterval(() => {
    changeColor();
  }, 1000);
  btn.remove();
  intro.remove();
  addMessage();
  addImage();
  addLink();
};
