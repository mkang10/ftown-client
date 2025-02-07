export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Exclusive */}
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md bg-gray-800 p-2 text-white focus:outline-none sm:w-48"
            />
            <button className="rounded-r-md bg-gray-700 p-2"></button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="mt-2 text-gray-400">FPT UNIVERSITY HCM</p>
          <p className="text-gray-400">vynntss170388@fpt.edu.vn</p>
          <p className="text-gray-400">+8438-7502-824</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="mt-2 text-gray-400">Save $3 with App New User Only</p>
          <div className="mt-3 flex space-x-2">
            <img src="/qr-code.png" alt="QR Code" className="h-16 w-16" />
            <div className="flex flex-col space-y-2">
              <img src="/google-play.png" alt="Google Play" className="w-28" />
              <img src="/app-store.png" alt="App Store" className="w-28" />
            </div>
          </div>
          {/* Social Icons */}
          <div className="mt-4 flex space-x-4 text-xl text-gray-400">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">© Copyright Rimel 2022. All right reserved</div>
    </footer>
  )
}
