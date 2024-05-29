import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        We would love to hear from you! Whether you have a question about our menu, feedback on your experience, or anything else, our team is ready to answer all your questions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Email: info@mrburger.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 75 Venn Street, Clapham, SW4 0BD</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Operating Hours</h2>
      <p className="text-lg mb-4">
        Monday - Friday: 10:00 AM - 10:00 PM<br />
        Saturday - Sunday: 12:00 PM - 12:00 AM
      </p>
      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
