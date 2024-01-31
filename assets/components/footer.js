const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="bg-custom-black section-padding footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-md-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Užitočné odkazy</h4>
                        </div>
                        <ul class="custom links">
                            <li>
                                <a href="index.html" class="text-custom-white">Domov</a>
                            </li>
                            <li>
                                <a href="about.html" class="text-custom-white">O nás</a>
                            </li>
                            <li>
                                <a href="blog.html" class="text-custom-white">Naše služby</a>
                            </li>
                            <li>
                                <a href="contact-style-1.html" class="text-custom-white">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-md-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Insta Feeds</h4>
                        </div>
                        <ul class="custom insta-feed">
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-1-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-2-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-3-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-4-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-5-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                            <li class="insta-item animate-img">
                                <a href="#">
                                    <img src="assets/images/homepage-1/insta-6-80x80.jpg" class="img-fluid full-width" alt="insta">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box mb-xs-80">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">Rýchle odkazy</h4>
                        </div>
                        <ul class="custom links">
                            <li>
                                <a href="portfolio-detail.html" class="text-custom-white">Portfolio</a>
                            </li>
                            <li>
                                <a href="cost-calculator.html" class="text-custom-white">Cost Calculator</a>
                            </li>
                            <li>
                                <a href="gallery.html" class="text-custom-white">Gallery</a>
                            </li>
                            <li>
                                <a href="404.html" class="text-custom-white">404</a>
                            </li>
                            <li>
                                <a href="coming-soon.html" class="text-custom-white">Coming Soon</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="footer-box">
                        <div class="footer-heading">
                            <h4 class="text-custom-white no-margin">News Letter</h4>
                        </div>
                        <div class="newsletter">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-custom" placeholder="Email Id">
                                </div>
                                <button class="btn-first btn-submit btn-height" type="submit">Predplatiť</button>
                            </form>
                        </div>
                        <div class="social-media">
                            <ul class="custom social-media">
                              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="payment-logo mb-md-20">
                        <span class="text-custom-white fs-14 mr-3">We are accept</span>
                        <div class="payemt-icon">
                            <img src="assets/images/card01.png" alt="#">
                            <img src="assets/images/card02.png" alt="#">
                            <img src="assets/images/card03.png" alt="#">
                            <img src="assets/images/card04.png" alt="#">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <p class="text-custom-white no-margin">© DanielHami - 2024 | All Right Reserved. <a href="#" target="_self" class="text-custom-white">Designed By Daniel Hami</a></p>
                </div>
            </div>
        </div>
    </div>
`;

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const link3 = document.createElement('link');
        link3.setAttribute('rel', 'stylesheet');
        link3.setAttribute('href', './assets/css/bootstrap.min.css');
        shadowRoot.appendChild(link3);

        const link4 = document.createElement('link');
        link4.setAttribute('rel', 'stylesheet');
        link4.setAttribute('href', './assets/css/font-awesome.css');
        shadowRoot.appendChild(link4);
        
        const link12 = document.createElement('link');
        link12.setAttribute('rel', 'stylesheet');
        link12.setAttribute('href', './assets/css/font/flaticon.css');
        shadowRoot.appendChild(link12);

        const link11 = document.createElement('link');
        link11.setAttribute('rel', 'stylesheet');
        link11.setAttribute('href', './assets/css/swiper.min.css');
        shadowRoot.appendChild(link11);

        const link10 = document.createElement('link');
        link10.setAttribute('rel', 'stylesheet');
        link10.setAttribute('href', './assets/css/slick.css');
        shadowRoot.appendChild(link10);

        const link6 = document.createElement('link');
        link6.setAttribute('rel', 'stylesheet');
        link6.setAttribute('href', './assets/css/jquery-ui.css');
        shadowRoot.appendChild(link6);
        
        const link7 = document.createElement('link');
        link7.setAttribute('rel', 'stylesheet');
        link7.setAttribute('href', './assets/css/magnific-popup.css');
        shadowRoot.appendChild(link7);

        const link8 = document.createElement('link');
        link8.setAttribute('rel', 'stylesheet');
        link8.setAttribute('href', './assets/css/nice-select.css');
        shadowRoot.appendChild(link8);

        const link5 = document.createElement('link');
        link5.setAttribute('rel', 'stylesheet');
        link5.setAttribute('href', './assets/css/animate.css');
        shadowRoot.appendChild(link5);

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './assets/css/style.css');
        shadowRoot.appendChild(link);

        const link9 = document.createElement('link');
        link9.setAttribute('rel', 'stylesheet');
        link9.setAttribute('href', './assets/css/responsive.css');
        shadowRoot.appendChild(link9);

        shadowRoot.appendChild(footerTemplate.content);
    }
  }
  
  customElements.define('footer-component', Footer);