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
  document.getElementById('comment').addEventListener('click', () => {
    let div = document.getElementById('userComment');
    let label = document.createElement('label');
    label.setAttribute('for', 'userComment');
    let txt = document.createTextNode('What is your comment:');
    label.appendChild(txt);
    let userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'comment');
    userInput.setAttribute('placeholder', 'Enter your comment:');
    userInput.required = true;
    div.appendChild(label);
    div.appendChild(userInput);
  });
};

let inquiry = () => {
  document.getElementById('question').addEventListener('click', () => {
    let div = document.getElementById('userQuestion');
    let label = document.createElement('label');
    label.setAttribute('for', 'userQuestion');
    let txt = document.createTextNode('What is your Question:');
    label.appendChild(txt);
    let userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'question');
    userInput.setAttribute('placeholder', 'Enter your Question:');
    userInput.required = true;
    div.appendChild(label);
    div.appendChild(userInput);
  });
};
