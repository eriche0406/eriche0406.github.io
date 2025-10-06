function toggleCard(event, card) {
    if (event.target.tagName === "A" || event.target.tagName === "BUTTON") return;
  
    const details = card.querySelector('.hidden-details');
    if (details.classList.contains('open')) {
      details.classList.remove('open');
      details.style.maxHeight = null;
    } else {
      details.classList.add('open');
      details.style.maxHeight = details.scrollHeight + 'px';
    }
  }