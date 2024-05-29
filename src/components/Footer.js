import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-gray-200 text-muted">
      {/* Section: Social media */}
      <section className="flex justify-center justify-between p-4 border-b">
        {/* Left */}
        <div className="me-5 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="py-4">
        <div className="container text-center lg:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
            <div className="mb-4">
              <h6 className="text-sm font-semibold mb-2">About Mr. Burger</h6>
              <p className="text-sm text-gray-600">
                Mr. Burger is a leading fast-food chain specializing in delicious burgers, fries, and shakes.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-sm font-semibold mb-2">Products</h6>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Burgers</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Fries</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Shakes</a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-sm font-semibold mb-2">Useful links</h6>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Locations</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Menu</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Contact</a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-sm font-semibold mb-2">Contact</h6>
              <p className="text-sm text-gray-600">
                <i className="fas fa-home me-3"></i> NIT ROURKELA,SUNDERGARH, INDIA
              </p>
              <div className='flex items-center'>
              <p className="text-sm text-gray-600">
                <i className="fas fa-envelope me-3"></i>
                <a href="mailto:saimanikanta482@gmail.com" >saimanikanta482@gmail.com</a> 
              </p>
              </div>
              <p className="text-sm text-gray-600">
                <i className="fas fa-phone me-3"></i> +91 8919321632
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4 bg-gray-200">
        © {new Date().getFullYear()} Mr. Burger. All rights reserved.
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
