import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { logo } from '../assets';
import { navItems } from '../constants';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [active, setActive] = useState("");
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [navSize, setNavSize] = useState('h-20 md:h-24 w-full p-4 md:p-10');
  const [hideLogo, setHideLogo] = useState('block');
  const [navRadius, setNavRadius] = useState('');
  const [navPosition, setNavPosition] = useState('left-0 right-0');
  const [navMargin, setNavMargin] = useState('mt-0');
  const [textColor, setTextColor] = useState('text-secondary');
  const [justifyContent, setJustifyContent] = useState('md:justify-around');
  const [smallScreenBg, setSmallScreenBg] = useState('bg-transparent');
  const location = useLocation();

  const handleScroll = () => {
    if (window.innerWidth >= 768) { // Only apply changes for medium screens and larger
      if (window.scrollY > 0) {
        setBgColor('bg-accent border-4 border-secondary');
        setNavSize('h-16 md:h-20 w-full md:w-auto md:px-12');
        setNavRadius('md:rounded-full');
        setHideLogo('hidden');
        setNavPosition('md:left-1/2 md:-translate-x-1/2');
        setNavMargin('md:mt-4');
        setTextColor('text-primary hover:text-secondary');
        setJustifyContent('md:justify-center');
      } else {
        setBgColor('bg-transparent');
        setNavSize('h-20 md:h-24 w-full p-4 md:p-10');
        setNavRadius('');
        setHideLogo('block');
        setNavPosition('left-0 right-0');
        setNavMargin('mt-0');
        setTextColor('text-secondary');
        setJustifyContent('md:justify-around');
      }
    } else {
      // Glassmorphic effect for small screens
      if (window.scrollY > 0) {
        setSmallScreenBg('bg-white/30 backdrop-blur-md');
      } else {
        setSmallScreenBg('bg-transparent');
      }
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navItems.find(item => item.to === path || (item.to === "/" && path === ""));
    setActive(activeLink ? activeLink.label : "");

    window.scrollTo(0, 0);
    handleScroll();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Reset to initial state for small screens
        setBgColor('bg-transparent');
        setNavSize('h-20 w-full p-4');
        setNavRadius('');
        setHideLogo('block');
        setNavPosition('left-0 right-0');
        setNavMargin('mt-0');
        setTextColor('text-secondary');
        setJustifyContent('justify-between');
        handleScroll(); // Apply glassmorphic effect if needed
      } else {
        handleScroll(); // Re-apply scroll-based styles for larger screens
        setSmallScreenBg('bg-transparent'); // Reset small screen background
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set correct styles

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  return (
    <nav className={`fixed top-0 z-50 transition-all duration-300 ${window.innerWidth >= 768 ? bgColor : smallScreenBg} ${navSize} ${navRadius} ${navPosition} ${navMargin}`}>
      <Container className={`flex justify-between ${justifyContent} items-center w-full h-full`}>
        <Link to="/" className={hideLogo}>
          <Image src={logo} alt="VAJA logo" width={100} height={100} className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]" />
        </Link>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.to)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.to}
                className={`${textColor} hover:text-accent transition-colors duration-200 font-libre-baskerville px-3 py-2 ${
                  active === item.label ? 'text-accent' : ''
                }`}
              >
                {item.label}
              </Link>
              {item.dropdown && activeDropdown === item.to && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.to}
                        to={dropdownItem.to}
                        className={`block px-4 py-2 text-sm text-white hover:text-accent`}
                        role="menuitem"
                      >
                        {dropdownItem.label}
                      </Link>
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-accent p-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block ${textColor} hover:text-secondary transition-colors duration-200 font-libre-baskerville py-2`}
              onClick={toggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
