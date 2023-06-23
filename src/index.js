import './assets/sass/index.scss';
import styles from './assets/sass/modules/app.module.scss'
import solution from './js/blocks';

const blocksA = [2,6,8,5];
const blocksB = [1,5,5,2,6];

document.querySelector('#root').innerHTML = `
<div class=${styles['d-flex-center']}>
   <div class=${styles['pad-20-gray']}>
      <img class=${styles['img']} src="./src/images/frog.gif"/>
         <div class=${styles['pad-10-white']}> 
            <span class=${styles['font-style-light']}> Block A { ${blocksA} } Frog can't jump to : ${solution(blocksA)}</span> <br>
            <span class=${styles['font-style-light']}> Block B { ${blocksB} } Frog can jump to : ${solution(blocksB)}</span>
         </div>
   </div>
   <div class=${styles['absolute-left']}>
      <span>Name: Waren Gador</span>
      <p> Class: WD47P <br>
          Practical Exam: 3
      </p>
   </div>
</div>
`