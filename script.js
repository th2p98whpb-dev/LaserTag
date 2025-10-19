document.getElementById('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('thanks').textContent='Спасибо! Заказ принят (демо).';
});