export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#001219] text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-400">© {currentYear} CROXTON. All rights reserved.</p>
      </div>
    </footer>
  )
}

