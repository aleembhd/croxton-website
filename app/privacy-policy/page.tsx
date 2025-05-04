import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Privacy Policy</h1>
      
      <p className="mb-4 text-sm md:text-base"><strong>Effective Date:</strong> [Insert Date]</p>
      
      <p className="mb-4 text-sm md:text-base">
        Croxton Technologies Private Limited ("Croxton", "we", "our", or "us") values your privacy and is committed to protecting the information you share with us. 
        This Privacy Policy explains how we collect, use, disclose, and protect your information.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li><strong>Personal Information:</strong> Name, email, phone number, company name, etc.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited.</li>
        <li><strong>Usage Data:</strong> Interaction with our services via cookies and analytics tools.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">2. How We Use Your Information</h2>
      <p className="mb-2 text-sm md:text-base">We use collected information to:</p>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li>Provide and improve our services.</li>
        <li>Respond to your inquiries and offer support.</li>
        <li>Send updates or promotional materials (only with consent).</li>
        <li>Comply with legal requirements.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">3. Sharing Your Information</h2>
      <p className="mb-2 text-sm md:text-base">
        We do <strong>not</strong> sell or rent your data. We may share information with:
      </p>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li>Trusted service providers under confidentiality.</li>
        <li>Legal authorities, if required by law.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">4. Cookies</h2>
      <p className="mb-4 text-sm md:text-base">
        We use cookies for performance and analytics. You can disable them via your browser settings.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">5. Data Security</h2>
      <p className="mb-4 text-sm md:text-base">
        We use encryption, secure servers, and access controls to safeguard your data.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">6. Your Rights</h2>
      <p className="mb-2 text-sm md:text-base">You may:</p>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li>Access, correct, or delete your data.</li>
        <li>Withdraw your consent at any time.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">7. Contact Us</h2>
      <p className="mb-4 text-sm md:text-base">
        For any privacy concerns, email us at <a href="mailto:croxtontechnologies@gmail.com" className="text-blue-600 hover:underline">croxtontechnologies@gmail.com</a>.
      </p>
    </div>
  );
} 