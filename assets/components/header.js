const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<div class="topbar bg-custom-black">
    <div class="container-fluid custom-container">
        <div class="row">
            <div class="col-md-8">
                <div class="left-side ">
                    <ul class="custom">
                        <li>
                            <a href="tel:" class="text-custom-white"><i class="fas fa-phone-alt text-custom-blue"></i> +421 955 555 555</a>
                        </li>
                        <li>
                            <a href="mailto:info@domain.com" class="text-custom-white"><i class="fas fa-envelope text-custom-blue"></i> rbsservisbodnar@gmail.com</a>
                        </li>
                        <li>
                            <a href="#" class="text-custom-white"><i class="fas fa-map-marker-alt text-custom-blue"></i>25/B Zelená, Veľké Kapušany</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="right-side">
                    <ul class="custom">
                        <li>
                            <a href="#" class="text-custom-white"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" class="text-custom-white"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" class="text-custom-white"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#" class="text-custom-white"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- topbar -->
<!-- navigation -->
<header class="menu-style">
    <div class="container-fluid custom-container">
        <div class="row">
            <div class="col-12">
                <div class="header">
                    <div class="logo">
                        <a href="index.html">
                            <img src="assets/images/logo.png" class="img-fluid image-fit" alt="Logo">
                        </a>
                    </div>
                    <div class="right-side">
                        <div class="navigation">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo.png" class="img-fluid image-fit" alt="Logo">
                                </a>
                            </div>
                            <nav>
                                <ul class="custom main-menu">
                                    <li class="menu-item menu-item-has-children active">
                                        <a href="index.html" class="text-theme fs-14">Domov</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="about.html" class="text-theme fs-14">O nás</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="service.html" class="text-theme fs-14">Naše služby</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="contact-style-1.html" class="text-theme fs-14">Kontakt</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="social-media">
                                <ul class="custom">
                                    <li>
                                        <a href="#" class="text-custom-white"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-custom-white"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-custom-white"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-custom-white"><i class="fab fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="hamburger-menu">
                            <div class="menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="right-side-2">
                        <div class="cta-btn">
                            <div class="cta-text">
                                <a href="contact-style-1.html" class="addlisting-btn btn-first btn-border">Získať konzultanta </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(headerTemplate.content);

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

    }
  }
  
  customElements.define('header-component', Header);