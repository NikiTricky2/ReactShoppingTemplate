import Product from './Product';

function Home() {
    return (
        <div>
            <h1>Welcome to <span className="text-primary">ShopShop</span>!</h1>
            <Product imgSrc="/images/keyboard.webp" title="Keyboard" desc="Adipisicing nostrud in exercitation eu tempor adipisicing. Dolor fugiat quis eiusmod eu incididunt excepteur ex id consectetur adipisicing officia excepteur. Cupidatat in consequat est nostrud non do reprehenderit adipisicing sunt deserunt irure do magna mollit." />
        </div>
    );
  }
  
  export default Home;