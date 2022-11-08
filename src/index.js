import cardTemplate from './layout/cardTemplate.js';
import fetchData from './utils/fetchData.js';

const loading = document.querySelector('[data-loading]');
const section = document.createElement('section');
const main = document.querySelector('main');

const render = async () => {
  const [id, advice] = await fetchData();

  section.innerHTML = cardTemplate(id, advice);

  main.insertAdjacentElement('beforeend', section);

  loading.hidden = true;
};

const onClick = e => {
  const isButton = e.target.matches('[data-button]');

  if (!isButton) return;

  loading.hidden = false;
  section.remove();

  render();
};

main.addEventListener('click', onClick);

render();
