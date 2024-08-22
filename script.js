document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const totalPriceElement = document.querySelector('.total');
  
    function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        totalPrice += unitPrice * quantity;
      });
      totalPriceElement.textContent = `${totalPrice} $`;
    }
  
    plusButtons.forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    minusButtons.forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.remove();
        updateTotalPrice();
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const heartIcons = document.querySelectorAll('.fa-heart');
  
    function toggleHeart(event) {
      const heart = event.currentTarget;
      heart.classList.toggle('liked');
    }
  
    heartIcons.forEach(heart => {
      heart.addEventListener('click', toggleHeart);
    });
  });

  function toggleHeartColor(event) {
    const heartIcon = event.target;
    if (heartIcon.classList.contains('fa-heart')) {
      if (heartIcon.style.color === 'red') {
        heartIcon.style.color = ''; 
      } else {
        heartIcon.style.color = 'red'; 
      }
    }
  }
  
  document.querySelectorAll('.fa-heart').forEach(icon => {
    icon.addEventListener('click', toggleHeartColor);
  });