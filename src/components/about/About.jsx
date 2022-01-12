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
               My passion to learn and grow, pushes me to improve myself and
               continually reach for higher goals. I started as a registered
               nurse that has myriad of experiences working in various clinical
               settings. Now, that the landscapes of healthcare has changed, I
               am invigorated to embrace and adapt myself to the newer
               technologies and innovations that exist today. Thus, I decided to
               head on in my new venture to acquire greater knowledge in
               software/full stack development. My short term goals is to gain
               experience working in a tech industry that stimulate progress and
               creates value in our society. In the future, I believe in the
               spirit of entrepreneurship. Thus, having a company surrounded by
               great talents, focus individuals, respecting and caring
               personalities that drives humanity to a better future is a dream
               worth having.
            </p>

            <div className='award'>
               <img src={Award} alt='' className='award-img' />
               <div className='award-info'>
                  <h4 className='award-title'>My Achievements & Experience</h4>
                  <p className='award-description'>
                     <li className='achievement'>
                        Cybersecurity - University of Toronto (In-progress)
                     </li>
                     <li className='achievement'>
                        Application Analyst/Clinical Informatics (2018)
                     </li>
                     <li className='achievement'>
                        Full Stack Developer - University of Toronto (2018)
                     </li>
                     <li className='achievement'>
                        Bachelor of Arts: Information Technology - York
                        University (2015)
                     </li>
                     <li className='achievement'>
                        Bachelor Science of Nursing - York University (2006)
                     </li>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
