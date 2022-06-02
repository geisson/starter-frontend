import '../sass/style.scss';
import '../index.html';

const inputName = document.querySelector(
  '[data-teste="nome"]',
) as HTMLInputElement;
const btn = document.querySelector('[data-teste="btn"]') as HTMLButtonElement;

const handleClick = (event: Event): void => {
  event.preventDefault();

  const inputValue = inputName.value;

  console.log(`Ola mundo ${inputValue}!!!!!`);
};

btn.addEventListener('click', handleClick);
