import React from 'react'

const Home = ({ item }) => {
  return (
    <section className="product-filter-section">
      <div className="container">
        <div className="section-title">
          <h2>BROWSE TOP SELLING PRODUCTS</h2>
        </div>
        <div className="row">
          {item.map(({ name, image, price }) => (
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={image} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
                    <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>${price}</h6>
                  <p>{name} </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-5">
          <button className="site-btn sb-line sb-dark">LOAD MORE</button>
        </div>
      </div>
    </section>

  )
}

export default Home
