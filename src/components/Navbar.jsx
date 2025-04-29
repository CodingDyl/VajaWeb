import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { logo } from '../assets';
import { navItems } from '../constants';
import { Divider } from '@mantine/core';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [smallScreenBg, setSmallScreenBg] = useState('bg-transparent');
  const location = useLocation();
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleScroll = () => {
    if (window.innerWidth >= 768) {
      setIsScrolled(window.scrollY > 0);
    } else {
      setSmallScreenBg(window.scrollY > 0 ? 'bg-white/30 backdrop-blur-md w-full flex justify-between pr-10' : 'bg-transparent w-full flex justify-between pr-10');
    }
  };

  const handleMouseEnter = (itemTo) => {
    clearTimeout(hoverTimeout);
    setActiveDropdown(itemTo);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navItems.find(item => item.to === path || (item.to === "/" && path === ""));
    setActive(activeLink ? activeLink.label : "");

    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(hoverTimeout);
    };
  }, [location, hoverTimeout]);

  return (
    <nav 
      className={`fixed top-0 z-50 transition-all duration-300 ${
        window.innerWidth >= 768 
          ? isScrolled 
            ? 'bg-accent border-4 border-secondary h-16 md:h-20 w-full md:w-auto md:px-12 md:rounded-full md:left-1/2 md:-translate-x-1/2 md:mt-4' 
            : 'bg-transparent h-20 md:h-24 w-full p-4 md:p-2'
          : smallScreenBg
      }`}
    >
      <Container className={`flex ${isScrolled ? 'md:justify-center' : 'md:justify-around'} justify-between items-center w-full h-full`}>
        <Link to="/" className={`${isScrolled ? 'hidden' : 'block'} ml-4 md:ml-8`}>
          <Image src={logo} alt="VAJA logo" width={100} height={100} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
        </Link>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div
              key={item.to}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.to)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.to}
                className={`${isScrolled ? 'text-primary hover:text-secondary' : 'text-secondary'} transition-colors duration-200 font-libre-baskerville px-3 py-2 ${
                  active === item.label ? 'text-accent' : ''
                }`}
              >
                {item.label}
              </Link>
              {item.dropdown && activeDropdown === item.to && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 overflow-y-auto lg:overflow-visible max-w-[90vw] max-h-[80vh]"
                  onMouseEnter={() => handleMouseEnter(item.to)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col lg:flex-row lg:items-stretch">
                    {item.dropdown.map((section, index) => (
                      <div key={index} className="relative p-4 min-w-[200px]">
                        <div className="text-md font-bold text-accent mb-3">{section.heading}</div>
                        <div className="flex flex-col gap-2">
                          {section.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.to}
                              to={dropdownItem.to}
                              className="text-sm text-white hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent whitespace-nowrap"
                              role="menuitem"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                        {index < item.dropdown.length - 1 && (
                          <div className="lg:absolute lg:right-0 lg:top-4 lg:bottom-4 lg:h-[calc(100%-2rem)]">
                            <Divider 
                              orientation={window.innerWidth >= 1024 ? "vertical" : "horizontal"} 
                              className="my-4 lg:my-0 lg:h-full bg-accent w-full lg:w-0.5"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          {opened ? (
            <IconX
              onClick={toggle}
              size={24}
              className="text-secondary cursor-pointer"
            />
          ) : (
            <IconMenu2
              onClick={toggle}
              size={24}
              className="text-secondary cursor-pointer"
            />
          )}
        </div>
      </Container>

      {opened && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-accent p-4 w-full max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.to} className="flex flex-col">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileActiveDropdown(mobileActiveDropdown === item.to ? null : item.to);
                    } else {
                      toggle();
                    }
                  }}
                >
                  <Link
                    to={item.dropdown ? "#" : item.to}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                      } else {
                        toggle();
                      }
                    }}
                    className={`block ${isScrolled ? 'text-primary hover:text-secondary' : 'text-secondary'} transition-colors duration-200 font-libre-baskerville py-2`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 text-secondary transition-transform duration-200 ${
                        mobileActiveDropdown === item.to ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                {item.dropdown && mobileActiveDropdown === item.to && (
                  <div className="ml-4 mt-2 space-y-4">
                    {item.dropdown.map((section, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="text-sm font-bold text-accent">{section.heading}</div>
                        {section.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.to}
                            to={dropdownItem.to}
                            className="text-sm text-white hover:text-secondary transition-colors duration-200 pl-2"
                            onClick={toggle}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
