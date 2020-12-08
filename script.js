/* Add any JavaScript you need to this file. */
/* List of products*/

//Create objects per every item

//Photo references:
//Photo retrieved from: https://pixabay.com/illustrations/graphic-card-2080-graphics-card-4794586/
//2nd product image from: https://pixabay.com/photos/nvidia-gtx-foundersedition-fl-2202280/
//3rd product image from: https://unsplash.com/photos/4Iv0Z1e2nNY
//4th product image from: https://upload.wikimedia.org/wikipedia/commons/a/ab/Razer_Naga_2014_MMO_Gaming_Mouse_%2814714867599%29.jpg
//5th Product image from: https://unsplash.com/photos/5Mw0JlOjtTc
//6th product image from: https://upload.wikimedia.org/wikipedia/commons/d/df/Mechanical_keyboard_example.jpg
//7th product image from: https://p0.pikrepo.com/preview/625/781/black-and-gray-corded-gaming-mouse.jpg
//8th product image from: https://upload.wikimedia.org/wikipedia/commons/d/d6/ASUS_ROG_STRIX-GTX1080-O8G-GAMING_20160614.jpg
//9th product image from: https://upload.wikimedia.org/wikipedia/commons/d/d7/ASUS_GeForce_RTX_2070_ROG_STRIX_Advanced_-_8GB_GDDR6_1632.jpg
//10th product image from: https://pixabay.com/vectors/face-mask-mask-coronavirus-5588047/
let products = [
  {
    name: 'RTX 2080',
    description: 'A fast Graphics card that features ray-tracing and 4k gaming',
    price: 'CAD$800.00',
    onsale: true,
    type: 'GPU',
    image: 'images/1.png'
  },
  {
    name: 'GTX 1070',
    description:
      'A decent GPU for low-end PCs. Not optimized for 4k gaming but still able to play middle end games.',
    price: 'CAD$599.99',
    onsale: true,
    type: 'GPU',
    image: 'images/2.jpg'
  },
  {
    name: 'i9 10900k',
    description: 'A 10 core CPU made by Intel, the fastest CPU out on the market from Intel.',
    price: 'CAD$816.00',
    onsale: true,
    type: 'CPU',
    image: 'images/3.jpg'
  },
  {
    name: 'Razer Naga Gaming Mouse',
    description:
      'A Gaming Mouse that has programmable buttons on the side allowing for more functionality.',
    price: 'CAD$79.99',
    onsale: true,
    type: 'peripheral',
    image: 'images/4.jpg'
  },
  {
    name: 'Razer Blade Gaming Laptop',
    description:
      'A fast gaming laptop made by Razer, contains a 20 series Graphics card and the latest CPU by Intel. Supports up to 144hz refresh rate and RGB lighting.',
    price: 'CAD$2500.00',
    onsale: true,
    type: 'Accessories',
    image: 'images/5.jpg'
  },
  {
    name: 'Corsair K95 Gaming Keyboard',
    description:
      'A mechanical keyboard that has designated Macro keys for more functionality. Comes with RGB lighting and is durable. For high-end gamers.',
    price: 'CAD$275.99',
    onsale: true,
    type: 'peripheral',
    image: 'images/6.jpg'
  },
  {
    name: 'Logitech G502',
    description:
      'A Gaming Mouse made by Logitech, can go up to 12,000 DPI and has 12 programmable buttons. Comfortable for gaming',
    price: 'CAD$59.99',
    onsale: true,
    type: 'peripheral',
    image: 'images/7.jpg'
  },
  {
    name: 'RTX 2070',
    description:
      'A cheaper 20 series graphics card made by Nvidia, supports ray-tracing but will not support 4k gaming at decent speeds. For middle-end gamers.',
    price: 'CAD$499.99',
    onsale: true,
    type: 'peripheral',
    image: 'images/8.jpg'
  },
  {
    name: 'AMD 5900X',
    description:
      'The latest Graphics cards released by AMD, rivals the RTX 3080 and is much cheaper and provides similar speeds to its competitors.',
    price: 'CAD$899.99',
    onsale: true,
    type: 'peripheral',
    image: 'images/9.jpg'
  },
  {
    name: 'Surgical mask',
    description:
      'A mask designed to combat the COVID-19 virus, highly advised for public safety and health services. Stay safe.',
    price: 'CAD$5.99',
    onsale: true,
    type: 'Accessories',
    image: 'images/10.png'
  }
];

//Create onloads for website
window.onload = function() {
  showMainMenu();
  showStock();
  sortByGPU();
  sortByCPU();
  sortByPeripherals();
  sortAccessories();
};

//Show items on sale
let showStock = () => {
  //Get the item id
  document.getElementById('onsale').addEventListener('click', () => {
    document.getElementById('subtitle-header').innerText = 'Items in stock';
    document.getElementById('productGoods').textContent = ' ';
    clearHeader();
    //Check products if the item is in stock, if yes create the product and show it on the screen
    products.forEach(product => {
      if (product.onsale === true) {
        createProduct(product);
      }
    });
  });
};
/* Create objects to use for later */
let showMainMenu = () => {
  //Create respective HTML variables for the home menu
  let divSlider = document.getElementById('slider');
  let cptn = document.getElementById('caption');
  let image = document.createElement('img');
  //Display the image and append the banner
  image.setAttribute('src', 'images/banner.jpg');
  divSlider.appendChild(image);
  //Display the subheader
  let txt = document.createTextNode('The latest Gaming Gear Online');
  let h4 = document.createElement('h4');
  //Set the attributes
  h4.setAttribute('id', 'txt');
  h4.appendChild(txt);
  cptn.appendChild(h4);
  //Create the products for each product
  products.forEach(product => {
    createProduct(product);
  });
};

let sortAccessories = () => {
  //Get respective IDs for accessories
  document.getElementById('accessories').addEventListener('click', () => {
    document.getElementById('subtitle-header').innerText = 'Accessories on sale:';
    document.getElementById('productGoods').textContent = ' ';
    clearHeader();
    //Create product for each product element and check if the type matches
    products.forEach(product => {
      if (product.type === 'Accessories') {
        createProduct(product);
      }
    });
  });
};

//Sort by category
let sortByGPU = () => {
  //Get products by GPU when user clicks on GPU submenu
  document.getElementById('GPUs').addEventListener('click', () => {
    document.getElementById('subtitle-header').innerText = 'Graphics Cards';
    document.getElementById('productGoods').textContent = ' ';
    //Clear the header
    clearHeader();
    //Check every product that matches the type, if match occurs create the product and show it on screen
    products.forEach(product => {
      if (product.type === 'GPU') {
        createProduct(product);
      }
    });
  });
};

let sortByCPU = () => {
  //Get products by CPU when user clicks on CPU submenu
  document.getElementById('CPUs').addEventListener('click', () => {
    document.getElementById('subtitle-header').innerText = 'CPUs';
    document.getElementById('productGoods').textContent = ' ';
    //Clear the header
    clearHeader();
    //Check every product that matches the type, if match occurs create the product and show it on screen
    products.forEach(product => {
      if (product.type === 'CPU') {
        //You can call the append function for your specific product instead
        createProduct(product);
      }
    });
  });
};

let sortByPeripherals = () => {
  //Get products by peripherals when user clicks on peripherals submenu
  document.getElementById('peripherals').addEventListener('click', () => {
    document.getElementById('subtitle-header').innerText = 'peripherals';
    document.getElementById('productGoods').textContent = ' ';
    clearHeader();
    //Check every product that matches the type, if match occurs create the product and show it on screen
    products.forEach(product => {
      if (product.type === 'peripheral') {
        createProduct(product);
      }
    });
  });
};
//Clear header
let clearHeader = () => {
  document.getElementById('slider').textContent = ' ';
  document.getElementById('caption').textContent = ' ';
};

//Create products
let createProduct = product => {
  //Create elements to append
  let ul = document.createElement('ul');
  let list = document.createElement('li');
  list.setAttribute('class', 'shadow-box');
  let divImage = document.createElement('div');
  let aImage = document.createElement('a');
  let image = document.createElement('img');
  //Set the attributes and append
  image.setAttribute('src', `${product.image}`);
  aImage.appendChild(image);
  divImage.setAttribute('class', 'img');
  divImage.appendChild(aImage);
  list.appendChild(divImage);
  //Create div variables and set the attributes
  let div = document.createElement('div');
  div.setAttribute('class', 'info');
  let aInfo = document.createElement('a');
  aInfo.setAttribute('class', 'title-product');
  let text = document.createTextNode(product.name);
  aInfo.appendChild(text);
  let ldiv = document.createElement('div');
  div.appendChild(ldiv);
  let p = document.createElement('p');
  text = document.createTextNode(product.description);
  //Append the contents
  p.appendChild(text);
  div.appendChild(p);
  div.appendChild(aInfo);

  //Create the price listings for product
  let sDiv = document.createElement('div');
  sDiv.setAttribute('class', 'price');
  let span = document.createElement('span');
  span.setAttribute('class', 'p');
  text = document.createTextNode('Price: ');
  span.appendChild(text);
  let strong = document.createElement('strong');
  strong.id = 'price';
  text = document.createTextNode(product.price);
  //Append the contents
  strong.appendChild(text);
  sDiv.appendChild(span);
  sDiv.appendChild(strong);

  div.appendChild(sDiv);
  //div action
  let sDiv2 = document.createElement('div');
  sDiv2.setAttribute('class', 'action');
  text = document.createTextNode('Buy');
  let action = document.createElement('a');
  action.setAttribute('href', '#');
  action.appendChild(text);
  sDiv2.appendChild(action);
  text = document.createTextNode('Add to cart');
  let action2 = document.createElement('a');
  action2.appendChild(text);
  action2.setAttribute('href', '#');
  sDiv2.appendChild(action2);
  div.appendChild(sDiv2);
  //append contents
  list.appendChild(div);
  ul.appendChild(list);
  document.getElementById('productGoods').appendChild(ul);
};
