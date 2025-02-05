export default function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          {/* Exclusive */}
          <div>
            <h3 className="text-lg font-semibold">Exclusive</h3>
            <p className="mt-2">Subscribe</p>
            <p className="text-gray-400 text-sm">Get 10% off your first order</p>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md bg-gray-800 text-white w-full sm:w-48 focus:outline-none"
              />
              <button className="bg-gray-700 p-2 rounded-r-md"></button>
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
              <img src="/qr-code.png" alt="QR Code" className="w-16 h-16" />
              <div className="flex flex-col space-y-2">
                <img src="/google-play.png" alt="Google Play" className="w-28" />
                <img src="/app-store.png" alt="App Store" className="w-28" />
              </div>
            </div>
            {/* Social Icons */}
            <div className="mt-4 flex space-x-4 text-gray-400 text-xl">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    );
  }
  