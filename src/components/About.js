import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to Mr. Burger, your number one source for delicious and mouth-watering burgers. 
        We're dedicated to providing you the very best of fast food, with an emphasis on quality, 
        taste, and exceptional customer service.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
      <p className="text-lg mb-4">
        Founded in 2021 by Jane Doe, Mr. Burger has come a long way from its beginnings in a 
        small food truck. When Jane first started out, her passion for "tasty and innovative 
        burgers" drove her to start her own business. We now serve customers all over the city 
        and are thrilled to be a part of the quirky, eco-friendly, and fast-paced wing of the 
        food industry.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to offer high-quality, delicious food with the best possible customer 
        service. We believe that good food brings people together and strive to make every 
        dining experience memorable.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="text-lg">
        If you have any questions or comments, please don't hesitate to contact us at:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Email: info@mrburger.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 75 Venn Street, Clapham, SW4 0BD</li>
      </ul>
    </div>
  );
};

export default AboutUs;
