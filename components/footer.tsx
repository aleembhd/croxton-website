import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 md:py-8 bg-[#001219] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6 md:mb-8">
          <ul className="flex flex-col space-y-2 md:space-y-3 text-sm md:text-base">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-300">
                • Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-gray-300">
                • Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-cancellation" className="hover:text-gray-300">
                • Refund and Cancellation
              </Link>
            </li>
            <li>
              <Link href="/shipping-delivery" className="hover:text-gray-300">
                • Shipping and Delivery
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-300">
                • About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-300">
                • Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-xs md:text-sm text-gray-400 text-center">© {currentYear} CROXTON. All rights reserved.</p>
      </div>
    </footer>
  )
}

