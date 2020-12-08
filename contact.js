window.onload = () => {
  issue();
  comments();
  inquiry();
};

//Create following objects

let issue = () => {
  document.getElementById('problem').addEventListener('click', () => {
    let div = document.getElementById('ordercode');
    let label = document.createElement('label');
    label.setAttribute('for', 'ordercode');
    let txt = document.createTextNode('Enter Order info:');
    label.appendChild(txt);
    let userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'problem');
    userInput.setAttribute('placeholder', 'Order Info:');
    userInput.required = true;
    div.appendChild(label);
    div.appendChild(userInput);
  });
};

let comments = () => {
  document.getElementById('inquiry').addEventListener('click', () => {
    document.getElementById('ordercode').innerText = ' ';
  });
};

let inquiry = () => {
  document.getElementById('comment').addEventListener('click', () => {
    document.getElementById('ordercode').innerText = ' ';
  });
};
