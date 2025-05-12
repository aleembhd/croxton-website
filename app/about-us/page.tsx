import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About Us</h1>
      
      <h2 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-3 md:mb-4">Croxton – Where Technology Meets Efficiency</h2>
      
      <p className="mb-4 text-sm md:text-base">
        Croxton is an AI-focused technology company providing smart automation tools to power B2B growth. 
        We help businesses reduce operational costs and improve customer interactions using the latest AI technologies.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">What We Offer</h2>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li><strong>AI Voice Agents</strong> to improve engagement and response.</li>
        <li><strong>AI Chatbots</strong> for automated support and customer service.</li>
        <li><strong>Custom AI Applications</strong> tailored to your unique business needs.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">Our Mission</h2>
      <p className="mb-4 text-sm md:text-base">
        To empower businesses through reliable, intelligent automation systems that scale effortlessly.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">Company Details</h2>
      <ul className="list-none pl-0 mb-4 space-y-2 text-sm md:text-base">
        <li><strong>Legal Name:</strong> Croxton Technologies </li>
        <li><strong>Email:</strong> <a href="mailto:croxtontechnologies@gmail.com" className="text-blue-600 hover:underline">croxtontechnologies@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+917672029401" className="text-blue-600 hover:underline">7672029401</a></li>
        <li><strong>Address:</strong> Plot No 466 Road No 9/3, Opp Avasa Building, Vaidehinagar, Vanastalipuram, Rangareddy, Telangana</li>
        <li><strong>Registered in:</strong> India</li>
      </ul>
    </div>
  );
} 