import React from 'react';

export default function RefundCancellation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Refund and Cancellation Policy</h1>
      
      <p className="mb-4 text-sm md:text-base"><strong>Effective Date:</strong> May 4, 2025</p>
      
      <p className="mb-4 text-sm md:text-base">
        Croxton Technologies Private Limited ensures transparency in our cancellation and refund procedures.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">1. Cancellation Policy</h2>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li>Cancellations must be requested within 24 hours of payment.</li>
        <li>No cancellations allowed after project initiation.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">2. Refund Policy</h2>
      <ul className="list-disc pl-5 md:pl-6 mb-4 text-sm md:text-base">
        <li>Refunds are only applicable if the service hasn't started and cancellation is requested within 24 hours.</li>
        <li>No refunds for custom-developed or partially delivered services.</li>
      </ul>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">3. Refund Timeline</h2>
      <p className="mb-4 text-sm md:text-base">
        Refunds, if approved, are processed within 7–10 business days to the original payment method.
      </p>
      
      <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3 md:mb-4">4. Contact</h2>
      <p className="mb-4 text-sm md:text-base">
        For refunds, email us at <a href="mailto:croxtontechnologies@gmail.com" className="text-blue-600 hover:underline">croxtontechnologies@gmail.com</a> with your order ID and payment proof.
      </p>
    </div>
  );
} 