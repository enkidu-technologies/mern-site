import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              My Company
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              We provide professional digital solutions designed to help
              businesses grow, connect, and succeed.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-400 transition hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-400 transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-slate-400 transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Web Development</li>
              <li>Software Development</li>
              <li>UI/UX Design</li>
              <li>Digital Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p>
                <span className="block text-white">Email</span>
                info@example.com
              </p>

              <p>
                <span className="block text-white">Phone</span>
                +91 98765 43210
              </p>

              <p>
                <span className="block text-white">Address</span>
                Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} My Company. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="transition hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
