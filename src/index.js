import './assets/global/reset.css';
import './assets/main.scss';

import Apple from './assets/images/apple.png';

const app = document.querySelector('#app');

const lintTest = condition => {
  if (condition) {
    return 'a';
  }
  return 'b';
};
console.log(lintTest(true));

const sampleImg = document.createElement('img');
sampleImg.src = Apple;
sampleImg.width = '304';

app.appendChild(sampleImg);
