import products from '../producs';
import Product from './Product';

function Home() {
    var prods = []
    for (const [index, product] of products.entries()) {
        prods.push(<Product key={index} imgSrc={product.image} title={product.name} desc={product.desc} />)
    }    
    return (
        <div style={{overflowX: 'hidden'}}>
            <h1>Welcome to <span className="text-primary">ShopShop</span>!</h1>
            <div class="row">
                {prods}
            </div>
        </div>
    );
  }
  
  export default Home;