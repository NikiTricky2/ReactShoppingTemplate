function Product(props) {
    return (
        <div className="card" style={{width: '18rem', margin: '6px'}}> 
        <img src={props.imgSrc} className="card-img-top" alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title} <span className="text-success">{props.price}$</span></h5>
            <p className="card-text">{props.desc}</p>
        </div>
        </div>
    );
  }
  
  export default Product;