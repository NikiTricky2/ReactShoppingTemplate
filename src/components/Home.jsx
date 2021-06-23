import { Link } from 'react-router-dom';
import products from '../producs';
import Product from './Product';

function Home() {
    var prods = []
    for (const [index, product] of products.entries()) {
        prods.push(<Link to={"/product/"+index} key={index} className="text-dark" style={{textDecoration: 'none'}}><Product imgSrc={product.image} title={product.name} desc={product.desc} price={product.price} /></Link>)
    }    
    return (
        <div style={{overflowX: 'hidden'}}>
            <h1>Welcome to <span className="text-primary">ShopShop</span>!</h1>
            <div className="row">
                {prods}
            </div>
        </div>
    );
  }
  
  export default Home;