const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-6 py-12 w-full">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Destined Estates</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Building trust and excellence in real estate, one property at a
            time.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/static/icons/linkedin.png"
                alt="LinkedIn logo"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.somewhere.com"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/static/icons/x.png"
                alt="Twitter logo"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/static/icons/youtube.png"
                alt="YouTube logo"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Who We Are
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Real Estate Presence
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Leadership
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-300 mb-4">
            Our Commitment
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Our Business Integration Structure
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff8200] transition-colors duration-300"
              >
                Services by the Company
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-gray-400 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Accessibility Notice
            </a>
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Web Fraud Warning
            </a>
            <a
              href="#"
              className="hover:text-[#ff8200] transition-colors duration-300"
            >
              Complaints Policy
            </a>
          </div>
          <p className="mt-4 sm:mt-0 text-gray-500 text-center sm:text-right">
            © 2024 Destined Estates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
