import './product.css';

const Product = ({ link, img }) => {
   return (
      <div className='product'>
         <div className='productTab'>
            <div className='productCircle'></div>
            <div className='productCircle'></div>
            <div className='productCircle'></div>
         </div>
         <a href={link} target='_blank' rel='noreferrer' className='href'>
            <img src={img} alt='' className='productImage' />
         </a>
      </div>
   );
};

export default Product;
