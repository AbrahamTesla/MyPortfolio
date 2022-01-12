import './contact.css';
import Email from '../../img/emailImage.png';
import Phone from '../../img/Phone_icon.png';
// import Address from '../../img/address.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
   //    const expression = `<p className='contactThankYou'> Thank you! Message Sent!'</p>`;

   const formRef = useRef();
   const [sent, setSent] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            'service_y9qxm3q',
            'template_c50qqlx',
            formRef.current,
            'user_nSFxcgDcxwwctBRaiZDWU'
         )
         .then(
            (result) => {
               console.log(result.text);
               setSent(true);
            },
            (error) => {
               console.log(error.text);
            }
         );

      e.target.reset();
   };

   return (
      <div className='contact'>
         <div className='contactBackground'></div>
         <div className='contactWrapper'>
            <div className='contactLeft'>
               <h1 className='contactTitle'>
                  Let's connect & make your dreams come true!
               </h1>
               <div className='contactInfo'>
                  <div className='contactInfoItems'>
                     <img src={Phone} alt='' className='contactIcon' />
                     +1 (416) 777-9999
                  </div>
                  <div className='contactInfoItems'>
                     <img src={Email} alt='' className='contactIcon' />
                     manlangitv@gmail.com
                  </div>
                  <div className='contactInfoItems'>
                     <img
                        src={Github}
                        alt=''
                        className='contactIcon'
                        target='_blank'
                        rel='noreferrer'
                     />
                     <a href='https://github.com/AbrahamTesla'>Github</a>
                  </div>
                  <div className='contactInfoItems'>
                     <img src={Linkedin} alt='' className='contactIcon' />
                     <a
                        href='https://www.linkedin.com/in/vincent-manlangit/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        LinkedIn
                     </a>
                  </div>
               </div>
            </div>
            <div className='contactRight'>
               <p className='contactDescription'>
                  <b>I want to hear from you!</b> Please kindly reach me.
                  Offering my services to reach your goals.
               </p>
               <form ref={formRef} onSubmit={handleSubmit}>
                  <input type='text' placeholder='Name' name='user_name' />
                  <input
                     type='text'
                     placeholder='Subject'
                     name='user_subject'
                  />
                  <input type='text' placeholder='Email' name='user_email' />
                  <textarea rows='5' placeholder='Message' name='message' />
                  <button className='submit'>Submit</button>
                  {sent && ' Thank You! Message Sent'}
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
