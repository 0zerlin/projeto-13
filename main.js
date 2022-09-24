let shop = document.getElementById("shop");

let shopItensData = [
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
  {
    id: "1234",
    name: "casual shirt",
    price: 50,
    desc: "aaaaaaaaaaaaaaa",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItensData
    .map((x) => {
      let { id, name, price, desc } = x;
      let search = basket.find((x) => x.id === id) || [];
      return ` 
    <div class="item" id="product-id-${id}">
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div class="quantity" id=${id}>
          ${search.item === undefined ? 0 : search.item}</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  //basket console

  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);

  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search);
  //search item
  document.getElementById(id).innerHTML = search.item;

  console.log(id);

  calculation();
};

let calculation = () => {};
