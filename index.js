//MORE

let btnsMore = document.querySelectorAll('.more-button');

for (btn of btnsMore) {
  btn.addEventListener('click', function() {
    let card = this.closest('.more-card');
    let switcher = card.querySelector('.more-switch');
    let more = card.querySelector('.more');

    if (switcher.style.display === 'none') {
      switcher.style.display = 'inline';
      more.style.display = 'none';
      this.textContent = 'Подробнее';
    } else {
      switcher.style.display = 'none';
      more.style.display = 'flex';
      this.textContent = 'Скрыть';
    }

  });
}
