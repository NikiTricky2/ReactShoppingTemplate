import products from '../producs';

function ProductPage(props) {
    var product = products[props.match.params.id]
       return (
        <div>
            <img src={product.image} alt={product.name} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
            <h1>{product.name}</h1>
            <p>{product.fullDesc}</p>
        </div>
    );
  }
  
  export default ProductPage;