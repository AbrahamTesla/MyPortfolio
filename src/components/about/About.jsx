import './about.css';
import Award from '../../img/award.jpg';

const About = () => {
   return (
      <div className='about'>
         <div className='about-left'>
            <div className='about-card background'></div>
            <div className='about-card'>
               <img
                  src='https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                  className='about-img'
               />
            </div>
         </div>
         <div className='about-right'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-sub'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
               dolores accusamus architecto cumque sint quos at veritatis
               aperiam doloremque possimus?
            </p>
            <p className='about-description'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Reiciendis, cumque eos voluptatem ullam illum quae officiis
               distinctio quam fugiat autem?
            </p>
            <div className='award'>
               <img src={Award} alt='' className='award-img' />
               <div className='award-info'>
                  <h4 className='award-title'>Recognitions</h4>
                  <p className='award-description'>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Sed, repudiandae! Eligendi consectetur optio amet numquam
                     doloremque quia magnam maxime dolorem!
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
