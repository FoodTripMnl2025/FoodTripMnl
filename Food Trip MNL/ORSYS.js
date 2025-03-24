const orderForm = document.getElementById('order-form');
const productSelect = document.getElementById('product-select');
const productImage = document.getElementById('product-image');
const quantityInput = document.getElementById('quantity');
const customerNameInput = document.getElementById('customer-name');
const customerEmailInput = document.getElementById('customer-email');
const submitButton = document.getElementById('submit-order');
const orderSummary = document.getElementById('order-summary');


document.addEventListener('DOMContentLoaded', function() {
  const bestSellerImage = document.getElementById('bestSellerImage');
  
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  
  function onScroll() {
    if (isInViewport(bestSellerImage)) {
      bestSellerImage.classList.add('visible');
      
      window.removeEventListener('scroll', onScroll);
    }
  }
  
  
  onScroll();
  
 
  window.addEventListener('scroll', onScroll);
});


document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.menu-category');
  const menuItems = document.querySelectorAll('.menu-item');
  
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      
      button.classList.add('active');
      
      const category = button.getAttribute('data-category');
      
     
      menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-type') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

const products = [
  { 
    id: 1, 
    name: 'Goto', 
    price: 35, 
    image: 'GOTOO.jpg', 
    description: 'Traditional Filipino rice porridge with tripe'
  },
  { 
    id: 2, 
    name: 'Tapsilog', 
    price: 85, 
    image: 'Tapsilog.jpg',
    description: 'Filipino breakfast with garlic rice, egg, and beef tapa'
  },
  { 
    id: 3, 
    name: 'Chicksilog', 
    price: 90, 
    image: 'Chick.jpg',
    description: 'Crispy chicken with garlic rice, egg, and atchara'
  },
  { 
    id: 4, 
    name: 'Lechonsilog', 
    price: 95, 
    image: 'lechonsilog.jpg',
    description: 'Lechon kawali with garlic rice and fried egg'
  },
  { 
    id: 5, 
    name: 'Bulaklaksilog', 
    price: 100, 
    image: 'bulaklaksilog.jpg',
    description: 'Crispy bulaklak with garlic rice and fried egg'
  },
  { 
    id: 6, 
    name: 'Bacsilog', 
    price: 90, 
    image: 'bacsilog.jpg',
    description: 'Bacon with garlic rice and fried egg'
  },
  { 
    id: 7, 
    name: 'Daingsilog', 
    price: 85, 
    image: 'daingsilog.jpg',
    description: 'Daing na bangus with garlic rice and fried egg'
  },
  { 
    id: 8, 
    name: 'Hungariansilog', 
    price: 95, 
    image: 'hungariansilog.jpg',
    description: 'Hungarian sausage with garlic rice and fried egg'
  },
  { 
    id: 9, 
    name: 'Hotsilog', 
    price: 80, 
    image: 'hotsilog.jpg',
    description: 'Hotdog with garlic rice and fried egg'
  },
  { 
    id: 10, 
    name: 'Masilog', 
    price: 85, 
    image: 'masilog.jpg',
    description: 'Marinated pork with garlic rice and fried egg'
  },
  { 
    id: 11, 
    name: 'Tonkatsilog', 
    price: 100, 
    image: 'tonkatsilog.jpg',
    description: 'Tonkatsu with garlic rice and fried egg'
  },
  { 
    id: 12, 
    name: 'Tortasilog', 
    price: 75, 
    image: 'tortasilog.jpg',
    description: 'Tortang talong with garlic rice and fried egg'
  },
  { 
    id: 13, 
    name: 'Longsilog', 
    price: 90, 
    image: 'longsilog.jpg',
    description: 'Sweet longganisa with garlic rice and fried egg'
  },
  { 
    id: 14, 
    name: 'Sisig', 
    price: 95, 
    image: 'sisig.jpg',
    description: 'Sizzling pork dish with calamansi and chili peppers'
  },
  { 
    id: 15, 
    name: 'Bulalo', 
    price: 120, 
    image: 'bulalo-recipe-2.jpg',
    description: 'Beef bone marrow soup with vegetables'
  },
  { 
    id: 16, 
    name: 'Goto', 
    price: 35, 
    image: 'GOTOO.jpg',
    description: 'Traditional Filipino rice porridge with tripe'
  },
  { 
    id: 17, 
    name: 'Coke', 
    price: 25, 
    image: 'Coke.jpg',
    description: 'Classic refreshing cola drink'
  }
];



function populateProducts() {
  const menuItems = document.querySelectorAll('.menu-item');
  const productSelect = document.getElementById('product-select');

  
  productSelect.innerHTML = '';

  
  menuItems.forEach((item, index) => {
    const name = item.querySelector('.product-name').textContent.trim();
    const price = item.querySelector('.menu-item-price').textContent.trim().replace('₱', '');

   
    const option = document.createElement('option');
    option.value = index + 1; 
    option.textContent = `${name} - ₱${price}`;
    productSelect.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const productSelect = document.getElementById("product-select");
  const quantityInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("total-price");
  const orderForm = document.getElementById("order-form");

  function updateTotalPrice() {
      const selectedOption = productSelect.options[productSelect.selectedIndex];
      const price = parseInt(selectedOption.getAttribute("data-price"));
      const quantity = parseInt(quantityInput.value);
      totalPrice.textContent = price * quantity;
  }

  orderForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Order placed successfully! Total: ₱" + totalPrice.textContent);
      orderForm.reset();
      updateTotalPrice();
  });

  productSelect.addEventListener("change", updateTotalPrice);
  quantityInput.addEventListener("input", updateTotalPrice);

  updateTotalPrice();
});



