export default function Footer(){
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 py-10 text-sm">

        <div>
          <h3 className="text-white mb-2 font-semibold">
            CS — Ticket System
          </h3>
          <p>Lorem ipsum is simply dummy text.</p>
        </div>

        <div>
          <h4 className="text-white mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-2">Information</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-2">Social Links</h4>
          <ul className="space-y-1">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cs.com</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs pb-4">
        © 2026 CS — Ticket System.
      </div>
    </footer>
  );
}