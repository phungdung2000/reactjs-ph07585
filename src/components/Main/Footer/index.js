import React from 'react'

const Footer = props => {
    return (
        <div>
            <section className="footer-section">
  <div className="container">
    <div className="footer-logo text-center">
      <a href="index.html"><img src="./img/logo-light.png" alt="" /></a>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget about-widget">
          <h2>About</h2>
          <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
          <img src="img/cards.png" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget about-widget">
          <h2>Questions</h2>
          <ul>
            <li><a href>About Us</a></li>
            <li><a href>Track Orders</a></li>
            <li><a href>Returns</a></li>
            <li><a href>Jobs</a></li>
            <li><a href>Shipping</a></li>
            <li><a href>Blog</a></li>
          </ul>
          <ul>
            <li><a href>Partners</a></li>
            <li><a href>Bloggers</a></li>
            <li><a href>Support</a></li>
            <li><a href>Terms of Use</a></li>
            <li><a href>Press</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget about-widget">
          <h2>Questions</h2>
          <div className="fw-latest-post-widget">
            <div className="lp-item">
              <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/1.jpg" />
              <div className="lp-content">
                <h6>what shoes to wear</h6>
                <span>Oct 21, 2018</span>
                <a href="#" className="readmore">Read More</a>
              </div>
            </div>
            <div className="lp-item">
              <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/2.jpg" />
              <div className="lp-content">
                <h6>trends this year</h6>
                <span>Oct 21, 2018</span>
                <a href="#" className="readmore">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="footer-widget contact-widget">
          <h2>Questions</h2>
          <div className="con-info">
            <span>C.</span>
            <p>Your Company Ltd </p>
          </div>
          <div className="con-info">
            <span>B.</span>
            <p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
          </div>
          <div className="con-info">
            <span>T.</span>
            <p>+53 345 7953 32453</p>
          </div>
          <div className="con-info">
            <span>E.</span>
            <p>office@youremail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="social-links-warp">
    <div className="container">
      <div className="social-links">
        <a href className="instagram"><i className="fa fa-instagram" /><span>instagram</span></a>
        <a href className="google-plus"><i className="fa fa-google-plus" /><span>g+plus</span></a>
        <a href className="pinterest"><i className="fa fa-pinterest" /><span>pinterest</span></a>
        <a href className="facebook"><i className="fa fa-facebook" /><span>facebook</span></a>
        <a href className="twitter"><i className="fa fa-twitter" /><span>twitter</span></a>
        <a href className="youtube"><i className="fa fa-youtube" /><span>youtube</span></a>
        <a href className="tumblr"><i className="fa fa-tumblr-square" /><span>tumblr</span></a>
      </div>
      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */} 
      <p className="text-white text-center mt-5">Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    </div>
  </div>
</section>


        </div>
    )
}



export default Footer
