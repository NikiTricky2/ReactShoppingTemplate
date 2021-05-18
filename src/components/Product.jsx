function Product(props) {
    var a = [];
    for (var i = 0; i < props.imgSrcs.length - 1; i++) {
        a.push(i);
    }
    return (
        <div className="card" style={{width: '18rem'}}>
        <div id={"id" + props.id + "car"} class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button style={{border: 'none', background: 'gray'}} type="button" data-bs-target={"#id" + props.id + "car"} data-bs-slide-to="0" className="active" aria-current="true"></button>
            {a.map((value, index) => {
                return <button style={{border: 'none', background: 'gray'}} type="button" data-bs-target={"#id" + props.id + "car"} data-bs-slide-to={index}></button>
            })}
        </div>
        <div className="carousel-inner">
        {props.imgSrcs.map((value, index) => {
            return <div className="carousel-item active"> <img src={value} className="d-block w-100" alt={props.title} /> </div>
        })}
        </div>
        <button className="carousel-control-prev" style={{border: 'none', background: 'none', filter: 'invert(50%)'}} type="button" data-bs-target={"#id" + props.id + "car"} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" style={{border: 'none', background: 'none', filter: 'invert(50%)'}}  type="button" data-bs-target={"#id" + props.id + "car"} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
        </div>
        </div>
    );
  }
  
  export default Product;