import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20 pt-16 text-[#333]">

      {/* Main Links Grid - Samsung Style */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-200 pb-16">

          <div className="flex flex-col pr-8 lg:border-r border-gray-200">
            <h4 className="font-bold text-sm mb-6 text-black">Product & Service</h4>
            <Link to="/products?category=mobiles" className="text-[13px] hover:underline mb-4">Smartphones</Link>
            <Link to="/products?category=laptops" className="text-[13px] hover:underline mb-4">Laptops & PCs</Link>
            <Link to="/products?category=accessories" className="text-[13px] hover:underline mb-4">Audio & Accessories</Link>
            <Link to="/products?condition=refurbished" className="text-[13px] hover:underline mb-4">Refurbished Devices</Link>
            <Link to="/products" className="text-[13px] hover:underline mb-4">Explore All</Link>
          </div>

          <div className="flex flex-col px-0 lg:px-8 lg:border-r border-gray-200 mt-10 lg:mt-0">
            <h4 className="font-bold text-sm mb-6 text-black">Support</h4>
            <a href="#" className="text-[13px] hover:underline mb-4">Track Order</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Warranty Information</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Service Center</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Book a Repair</a>
            <a href="#" className="text-[13px] hover:underline mb-4">WhatsApp Support</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Email the CEO</a>
          </div>

          <div className="flex flex-col px-0 lg:px-8 lg:border-r border-gray-200 mt-10 md:mt-10 lg:mt-0">
            <h4 className="font-bold text-sm mb-6 text-black">Account & Offers</h4>
            <a href="#" className="text-[13px] hover:underline mb-4">My Page</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Product Registration</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Vouchers & Promos</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Student Offers</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Corporate Purchase</a>
          </div>

          <div className="flex flex-col pl-0 lg:pl-8 mt-10 md:mt-10 lg:mt-0">
            <h4 className="font-bold text-sm mb-6 text-black">About Us</h4>
            <a href="#" className="text-[13px] hover:underline mb-4">Company Info</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Business Area</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Brand Identity</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Careers</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Investor Relations</a>
            <a href="#" className="text-[13px] hover:underline mb-4">Newsroom</a>
          </div>

        </div>
      </div>

      {/* Legal & Company Info */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-10 border-b border-gray-200 text-xs text-gray-500 space-y-4">
        <p>Copyright © 1995-{new Date().getFullYear()} SAURABH MOBILES All Rights reserved.</p>
        <p className="leading-relaxed">
          Please dispose of e-waste and plastic waste responsibly.<br />
          For more information or e-waste pick up, please call 1800 5 123456 or <a href="#" className="text-blue-600 hover:underline">click here</a> for more details.
        </p>
        <p className="leading-relaxed">
          Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001<br />
          Corporate Identification Number (CIN): U31900DL1995PTC071387
        </p>
      </div>

      {/* Bottom Bar: Links & Social */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs font-medium text-[#333]">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 lg:mb-0">
          <span className="font-bold border-r border-gray-300 pr-4 md:pr-6">India/English</span>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">CSR Policy</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold mr-2">Stay in the Loop?</span>
          {/* SVG Icons used to prevent react-icons missing import errors for unverified sub-packages */}
          <a href="#" className="text-xl hover:text-black text-gray-700 transition-colors" title="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
          </a>
          <a href="#" className="text-xl hover:text-black text-gray-700 transition-colors" title="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" className="text-xl hover:text-black text-gray-700 transition-colors" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href="#" className="text-xl hover:text-black text-gray-700 transition-colors" title="YouTube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          </a>
        </div>
      </div>

    </footer>
  )
}
