import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


function Product() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const apiGet = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await apiGet.clone().json);
        setFilter(await apiGet.json());
        setLoading(false);
        // console.log(filter);
      }

      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(filter)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Electronic")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return(
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img className='card-img-top' src={product.image} alt={product.title} height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,16)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <a href="#" className='btn btn-outline-dark'>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        })};
      </>
    )
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1><hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;