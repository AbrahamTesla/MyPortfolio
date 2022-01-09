import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
   return (
      <div className='productList'>
         <div className='productText'>
            <h1 className='productTitle'> My Portfolios</h1>
            <p className='productListDescriptions'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
               voluptas natus doloribus unde autem totam officia cupiditate
               repellendus eius dolorum!
            </p>
         </div>
         <div className='productListItem'>
            {products.map((item) => (
               <Product link={item.link} key={item.id} img={item.img} />
            ))}
         </div>
      </div>
   );
};

export default ProductList;
