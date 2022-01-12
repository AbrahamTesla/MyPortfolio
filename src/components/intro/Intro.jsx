import './intro.css';
import Penguin from '../../img/penguin.png';

const Intro = () => {
   return (
      <div className='intro'>
         <div className='intro-left'>
            <div className='intro-left-wrapper'>
               <h2 className='intro-greetings'>Hello, My Name is</h2>
               <h1 className='name'>Ace</h1>
               <div className='intro-title'>
                  <div className='intro-title-wrapper'>
                     <div className='intro-title-item'>Web Developer</div>
                     <div className='intro-title-item'>Front-End Developer</div>
                     <div className='intro-title-item'>Back-End Developer</div>
                     <div className='intro-title-item'>Application Analyst</div>
                     <div className='intro-title-item'>
                        Clinical Informatics
                     </div>
                  </div>
               </div>
               <div className='intro-description'>
                  "Imagination is more important than knowledge. Knowledge is
                  limited. Imagination encircles the world." by
                  <b className='Einstein'>Albert Einstein</b>
               </div>
            </div>
         </div>
         <div className='intro-right'>
            <div className='intro-right-background'></div>
            <img src={Penguin} alt='' className='right-img' />
         </div>
      </div>
   );
};

export default Intro;
