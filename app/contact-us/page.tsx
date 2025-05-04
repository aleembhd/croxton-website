import React from 'react';

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact Us</h1>
      
      <p className="mb-6 text-sm md:text-base">
        We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to help.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">Business Details</h2>
      <ul className="list-none pl-0 mb-4 space-y-3 text-sm md:text-base">
        <li><strong>Company Name:</strong> Croxton Technologies Private Limited</li>
        <li><strong>Address:</strong> Vanasthalipuram, Hyderabad, Telangana, India</li>
        <li><strong>Email:</strong> <a href="mailto:croxtontechnologies@gmail.com" className="text-blue-600 hover:underline">croxtontechnologies@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+917672029401" className="text-blue-600 hover:underline">7672029401</a></li>
        <li><strong>Working Hours:</strong> Monday to Saturday, 10:00 AM – 6:00 PM IST</li>
        <li><strong>Registered in:</strong> India</li>
      </ul>
      
      <p className="mt-6 text-sm md:text-base">
        Feel free to contact us through the form on our website or directly by email or phone.
      </p>
    </div>
  );
} 