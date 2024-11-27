function toggleCard(id) {
  const card = document.getElementById(`card-${id}`);
  const btn = card.querySelector('.voir-plus-btn');
  const btnText = btn.querySelector('.btn-text');
  
  card.classList.add('card-transition');
  
  if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      btnText.textContent = 'Voir plus';
  } else {
      card.classList.add('expanded');
      btnText.textContent = 'Voir moins';
  }
  
  setTimeout(() => {
      card.classList.remove('card-transition');
  }, 1000);
}

// Animation au chargement des cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
      setTimeout(() => {
          card.classList.add('visible');
      }, index * 200);
  });
}); 