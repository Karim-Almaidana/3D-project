import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center p-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-2xl lg:text-5xl font-light m-0 z-50"
      >
        ALMAIDANA
      </h1>
      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
        >
          RESOURCES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
        >
          DOCS
        </a>
      </nav>
      <button data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="2000" className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-300 hover:bg-white z-50 ">
        SIGNIN
      </button>

      {/* Mobile Menu */}

      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
      >
        <i class="bx bx-menu"></i>
      </button>
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center ">
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          >
            COMPANY
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          >
            FEATURES
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          >
            RESOURCES
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          >
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
