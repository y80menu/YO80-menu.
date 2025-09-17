const categories = [
  {
    "id": "frozen_yogurt",
    "name": "Frozen Yogurt",
    "image": "frozen yogurt/KHL_3475.jpg",
    "products": [
      { "id": 1, "name": "Frozen Yogurt", "image": "frozen yogurt/KHL_3470.jpg", "description": "", "price": "50.000" },
      { "id": 2, "name": "Frozen Yogurt with toppings", "image": "frozen yogurt/KHL_3475.jpg", "description": "(fruits, candies, Pistachio, Nutella, Lotus, caramel(exstra price))", "price": "50.000" }
    ]
  },
  {
    "id": "icecream",
    "name": "Ice Cream",
    "image": "ice  cream/KHL_3524.jpg",
    "products": [
      { "id": 3, "name": "Ice Cream", "image": "ice  cream/KHL_3524.jpg", "description": "", "price": "70.000" },
      { "id": 5, "name": "Lick Cream", "image": "ice  cream/lick cream chocolate .jpg", "description": "", "price": "43.000" },
      { "id": 7, "name": "Red -mo", "image": "logo.png", "description": "", "price": "80.000" },
      { "id": 8, "name": "White -mo", "image": "logo.png", "description": "", "price": "80.000" },
      { "id": 9, "name": "Choco -mo", "image": "ice  cream/shocolate _ mo.jpg", "description": "", "price": "80.000" }
    ]
  },
  {
    "id": "fruit_salad",
    "name": "Fruit Salad",
    "image": "fruit salad/chocolate salad .jpg",
    "products": [
      { "id": 11, "name": "Choco Fruit Salad", "image": "fruit salad/chocolate salad .jpg", "description": "", "price": "100.000" },
      { "id": 13, "name": "Pistachio Fruit Salad", "image": "fruit salad/pistachio salad .jpg", "description": "", "price": "110.000" },
      { "id": 14, "name": "Seasonal Fruits Salad", "image": "fruit salad/KHL_3522.jpg", "description": "", "price": "$100.000" }
    ]
  },
  {
    "id": "sweets",
    "name": "sweets",
    "image": "sweet/triple choco.jpg",
    "products": [
      { "id": 15, "name": "Alpeno Crepe", "image": "sweet/alpeno crepe .jpg", "description": "", "price": "80.000" },
      { "id": 16, "name": "Nutella Crepe", "image": "sweet/nutella crepe .jpg", "description": "", "price": "80.000" },
      { "id": 17, "name": "Feututchini Crepe", "image": "sweet/feututchini crepe .jpg", "description": "", "price": "110.000" },
      { "id": 18, "name": "Lotus Crepe", "image": "sweet/lotus crepe .jpg", "description": "", "price": "90.000" },
      { "id": 19, "name": "Pistachio Crepe", "image": "sweet/pistachio crepe .jpg", "description": "", "price": "110.000" },
      { "id": 20, "name": "Fruit Crepe", "image": "logo.png", "description": "", "price": "110.000" },
      { "id": 21, "name": "Banana Roll Crepe", "image": "sweet/banana roll crepe .jpg", "description": "", "price": "115.000" },
      { "id": 23, "name": "Lotus Pancake", "image": "logo.png", "description": "", "price": "100.000" },
      { "id": 25, "name": "Alpeno Pancake", "image": "logo.png", "description": "", "price": "100.000" },
      { "id": 26, "name": "Nutella Pancake", "image": "sweet/nutella bancake .jpg", "description": "", "price": "100.000" },
      { "id": 27, "name": "Pistachio Pancake", "image": "sweet/pistachio bancake.jpg", "description": "", "price": "110.000" },
      { "id": 28, "name": "Fruit Pancake", "image": "logo.png", "description": "", "price": "120.000" },
      { "id": 29, "name": "Fruits Waffle", "image": "sweet/fruits waffle .jpg", "description": "", "price": "110.000" },
      { "id": 31, "name": "Pistachio Waffle", "image": "sweet/pistachio waffle 1 .jpg", "description": "", "price": "90.000" },
      { "id": 32, "name": "Lotus Waffle", "image": "sweet/lotus waffle .jpg", "description": "", "price": "80.000" },
      { "id": 33, "name": "Alpeno Waffle", "image": "logo.png", "description": "", "price": "80.000" },
      { "id": 34, "name": "Nutella Waffle", "image": "sweet/nutella waffle .jpg", "description": "", "price": "80.000" }
    ]
  },
  {
    "id": "ice_coffee",
    "name": "Ice Coffee",
    "image": "ice cofe/ice coffe with flavor .jpg",
    "products": [
      { "id": 35, "name": "Ice Americano", "image": "logo.png", "description": "", "price": "55.000" },
      { "id": 36, "name": "Ice Cappuccino", "image": "logo.png", "description": "", "price": "60.000" },
      { "id": 37, "name": "Ice Coffee", "image": "ice cofe/ice coffee.jpg", "description": "", "price": "63.000" },
      { "id": 38, "name": "Ice Coffee with flavor", "image": "ice cofe/ice coffe with flavor .jpg", "description": "(Caramel, Choco, Cinamon, Coconut, Hazelnut, Vanilla)", "price": "70.000" },
      { "id": 39, "name": "Ice Spanish Latte", "image": "logo.png", "description": "", "price": "70.000" }
    ]
  },
  {
    "id": "frappe",
    "name": "Frappe",
    "image": "frappe/caramel frappe .jpg",
    "products": [
      { "id": 40, "name": "Caramel Frappe", "image": "frappe/caramel frappe .jpg", "description": "", "price": "75.000" },
      { "id": 41, "name": "Lotus Frappe", "image": "frappe/lotus frappe.jpg", "description": "", "price": "81.000" },
      { "id": 42, "name": "Mocha Frappe", "image": "", "description": "", "price": "75.000" },
      { "id": 43, "name": "Oreo Frappe", "image": "frappe/oreo frappe.jpg", "description": "", "price": "80.000" }
    ]
  },
  {
    "id": "hot_drinks",
    "name": "Hot Drinks",
    "image": "hot drink/hot lotus .jpg",
    "products": [
     { "id": 44, "name": "Espresso ", "image": "hot drink/espresso .jpg", "description": "", "price": "40.000" },
    { "id": 45, "name": "Espresso affogato ", "image": "hot drink/espresso affogato.jpg", "price": "46.000" },
     { "id": 46, "name": "Espresso affogato pistachio ", "image": "hot drink/espresso pistachio affogato .jpg", "price": "47.000" },
    { "id": 47, "name": "cafe bombon ", "image":"hot drink/cafe bombon.jpg" ,"price": "46.000" },
    { "id": 48, "name": "Espresso doppio ","image": "hot drink/doppio.jpg", "description": "", "price": "52.000" },
     { "id": 49, "name": "Espresso Romano", "image": "hot drink/espresso romano .jpg", "description": "", "price": "41.000" },
     { "id": 50, "name": "Espresso Macchiato", "image": "logo.png", "description": "", "price": "42.000" },
    { "id": 51, "name": "Tristino", "image": "hot drink/tristeno.jpg", "description": "", "price": "46.000" },
     { "id": 52, "name": "Americano", "image": "hot drink/americano .jpg", "description": "", "price": "49.000" },
      { "id": 52, "name": "Cortado", "image": "logo.png", "description": "", "price": "52.000" },
      { "id": 53, "name": "Flat White", "image": "logo.png", "description": "", "price": "57.000" },
       { "id": 54, "name": "Cappuccino", "image": "hot drink/blue cappuccino.jpg", "description": "", "price": "55.000" },
      { "id": 55, "name": "Mochaccino", "image": "logo.png", "description": "", "price": "66.000" },
       { "id": 56, "name": "Cafe Latte", "image": "hot drink/cafe latte.jpg", "description": "", "price": "48.000" },
      { "id": 57, "name": "Caffe Latte with flavor", "image": "logo.png", "description": "(chocolate, Vanilla, Cinnamon, Caramel, Coconut, Hazelnut,pistachio)", "price": "59.000" },
      { "id": 58, "name": "Spanish Latte", "image": "logo.png", "description": "", "price": "55.000" },
      { "id": 59, "name": "Orchid", "image": "logo.png", "description": "", "price": "45.000" },
       { "id": 60, "name": "Hot Chocolate", "image": "hot drink/hot chocolate .jpg", "description": "", "price": "55.000" },
       { "id": 61, "name": "Hot Chocolate Lotus", "image": "hot drink/hot lotus .jpg", "description": "", "price": "66.000" },
       { "id": 62, "name": "Hot Chocolate Nutella", "image": "hot drink/nutella hot chocolate.jpg", "description": "", "price": "66.000" },
      { "id": 63, "name": "Hot Chocolate Marshmallow", "image": "hot drink/hot chocolate with marshmallow.jpg", "description": "", "price": "66.000" }
    ]
  },
  {
    "id": "soda_ice_tea",
    "name": "Soda & Ice Tea",
    "image": "soda.jpg",
    "products": [
      { "id": 64, "name": "Ice Tea", "image": "soda/ice tea.jpg", "description": "( Peach)", "price": "65.000" },
      { "id": 65, "name": "Ice Tea", "image": "logo.png", "description": "(Apple, lemon Mix, Berry, Strawberry, Passion, )", "price": "70.000" },

      { "id": 66, "name": "Mojito", "image": "soda/mojito .jpg", "description": "(Blue, Blueberry, Mint, Mix Berry, Strawberry)", "price": "70.000" },
      { "id": 67,"name": "Pina Blue", "image": "logo.png", "description": "", "price": "70.000" },
      { "id": 68, "name": "Range Blue", "image": "soda/range blue.jpg", "description": "", "price": "70.00" },
      { "id": 69, "name": "Spider Soda", "image": "", "description": "", "price": "70.000" },
      { "id": 70, "name": "Straw Blue", "image": "soda/straw blue.jpg", "description": "", "price": "70.000" },
      { "id": 71, "name": "Berry Blue", "image": "soda/berry blue.jpg", "description": "", "price": "70.000" },
      { "id": 72, "name": "Magic Soda", "image": "soda/magic soda.jpg", "description": "", "price": "70.000" }
    ]
  },
  {
    "id": "milkshake",
    "name": "Milk Shakes",
    "image": "milk shake/KHL_3460.jpg",
    "products": [
      { "id": 73, "name": "Apple Cinnamon Shake", "image": "milk shake/apple cinnamon milkshake.jpg", "description": "", "price": "75.000" },
      { "id": 74, "name": "Banana Shake", "image": "logo.png", "description": "", "price": "75.000" },
      { "id": 75, "name": "Bublegum Shake", "image": "milk shake/candy milkshake .jpg", "description": "", "price": "75.000" },
      { "id": 76, "name": "Chocolate Shake", "image": "milk shake/chocolate milkshake.jpg", "description": "", "price": "75.000" },
      { "id": 77, "name": "Coffee Shake", "image": "milk shake/coffee milkshake.jpg", "description": "", "price": "75.000" },
      { "id": 78, "name": "Lotus Shake", "image": "milk shake/lotus milkshake .jpg", "description": "", "price": "75.000" },
      { "id": 79, "name": "Nutella Shake", "image": "milk shake/nutella milkshake .jpg", "description": "", "price": "75.000" },
      { "id": 80, "name": "Pistachio Shake", "image": "milk shake/pistachio milkshake .jpg", "description": "", "price": "90.000" },
      { "id": 81, "name": "Strawberry Shake", "image": "milk shake/strawberry milkshake .jpg", "description": "", "price": "70.000" },
      { "id": 82, "name": "Vanilla Shake", "image": "logo.png", "description": "", "price": "70.000" },
      { "id": 83, "name": "Caramel Shake", "image": "logo.png", "description": "", "price": "75.000" },
      { "id": 84, "name": "oreo Shake", "image": "milk shake/oreo milkshake .jpg", "description": "", "price": "75.000" }

    ]
  },
  {
    "id": "cocktail_smoothie",
    "name": "Cocktail Smoothie",
    "image": "cocktail/jamaica.jpg",
    "products": [
      { "id": 85, "name": "Avocado", "image": "cocktail/avocado (2).jpg", "description": "", "price": "90.000" },
      { "id": 86, "name": "Avocado Dates & Nuts", "image": "cocktail/avocado and nuts.jpg", "description": "", "price": "99.000" },
      { "id": 87, "name": "Banana & Milk", "image": "cocktail/banana and milk.jpg", "description": "", "price": "75.000" },
      { "id": 88, "name": "Banana Milk Choco", "image": "cocktail/banana and milk and chocolate.jpg", "description": "", "price": "75.000" },
      { "id": 89, "name": "Banana Milk Mango", "image": "logo.png", "description": "", "price": "75.000" },
      { "id": 90, "name": "Banana Milk Strawberry", "image": "cocktail/banana and milk and strawberry.jpg", "description": "", "price": "75.000" },
      { "id": 91, "name": "Jamaica", "image": "cocktail/jamaica.jpg", "description": "", "price": "79.000" },
      { "id": 92, "name": "Pinacolada", "image": "logo.png", "description": "", "price": "75.000" },
      { "id": 93, "name": "Seasonal Fruits", "image": "cocktail/seasonal fruits.jpg", "description": "", "price": "75.000" },
      { "id": 94, "name": "Tropical Fruits", "image": "cocktail/tropical fruits.jpg", "description": "", "price": "88.000" },
      { "id": 95, "name": "citrus Fruits cocktail", "image": "cocktail/tropical fruits.jpg", "description": "", "price": "80.000" }

    ]
  },
  {
    "id": "fresh_juice",
    "name": "Fresh Juice",
    "image": "fresh/polo juice.jpg",
    "products": [
      { "id": 96, "name": "Apple Juice", "image": "logo.png", "description": "", "price": "61.000" },
      { "id": 97, "name": "Mango Juice", "image": "fresh/mango juice.jpg", "description": "", "price": "75.000" },
      { "id": 98, "name": "Polo Juice", "image": "fresh/polo juice.jpg", "description": "", "price": "63.000" },
      { "id": 99, "name": "Blackberry Juice", "image": "fresh/balckberry.jpg", "description": "", "price": "70.000" },
      { "id": 100, "name": "Melon Juice", "image": "fresh/melon juice.jpg", "description": "", "price": "52.000" },
      { "id": 101, "name": "Pomegranate Juice", "image": "logo.png", "description": "", "price": "70.000" },
      { "id": 102, "name": "Carrot Juice", "image": "logo.png", "description": "", "price": "61.000" },
      { "id": 103, "name": "Orange Juice", "image": "fresh/orange juice .jpg", "description": "", "price": "63.000" },
      { "id": 104, "name": "Strawberry Juice", "image": "fresh/strawberry juice.jpg", "description": "", "price": "70.000" },
      { "id": 105, "name": "Kiwi Juice", "image": "fresh/kiwi juice .jpg", "description": "", "price": "73.000" },
      { "id": 106, "name": "Peach Juice", "image": "fresh/peach juice.jpg", "description": "", "price": "63.000" },
      { "id": 107, "name": "Watermelon Juice", "image": "fresh/water melon juice.jpg", "description": "", "price": "52.000" },
      { "id": 108, "name": "Lemon Juice", "image": "fresh/lemon juice.jpg", "description": "", "price": "61.000" },
      { "id": 109, "name": "Pineapple Juice", "image": "fresh/pineapple juice.jpg", "description": "", "price": "70.000" }
    ]
  }
];



const catContainer = document.getElementById('category-container');
const prodSection = document.getElementById('products-container');
const prodTitle = document.getElementById('products-title');
const prodGrid = document.getElementById('product-grid');

const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');

// عرض الفئات
categories.forEach(category => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${category.image || 'https://via.placeholder.com/300x200?text=Category'}" alt="${category.name}" />
    <h2>${category.name}</h2>
  `;
  card.onclick = () => showProducts(category);
  catContainer.appendChild(card);
});

// عرض المنتجات داخل الفئة
function showProducts(category) {
  catContainer.style.display = 'none';
  prodSection.style.display = 'block';
  prodTitle.textContent = category.name;
  prodGrid.innerHTML = '';

  category.products.forEach(product => {
    const pCard = document.createElement('div');
    pCard.className = 'card';
    pCard.innerHTML = `
      <img src="${product.image || 'https://via.placeholder.com/300x200?text=Product'}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description || ''}</p>
      <p class="price">${product.price}</p>
    `;
    pCard.onclick = () => showModal(product);
    prodGrid.appendChild(pCard);
  });
}

// الرجوع للفئات
function goBack() {
  prodSection.style.display = 'none';
  catContainer.style.display = 'grid';
}

// إظهار النافذة
function showModal(product) {
  modalImg.src = product.image || 'https://via.placeholder.com/300x200?text=Product';
  modalName.textContent = product.name;
  modalDesc.textContent = product.description || 'لا يوجد وصف.';
  modalPrice.textContent = product.price || '';
  modal.style.display = 'flex';
}

// إغلاق النافذة
function closeModal() {
  modal.style.display = 'none';
}