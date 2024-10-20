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
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor('bg-accent border-2 border-secondary/[0.2]');
      setNavSize('h-16 md:h-20 w-[90%] md:w-[60%] p-2 md:p-4');
      setNavRadius('rounded-2xl');
      setHideLogo('hidden');
      setNavPosition('left-1/2 -translate-x-1/2');
      setNavMargin('mt-4');
      setTextColor('text-primary hover:text-secondary'); // Change text color to primary on scroll
    } else {
      setBgColor('bg-transparent');
      setNavSize('h-20 md:h-24 w-full p-4 md:p-10');
      setNavRadius('');
      setHideLogo('block');
      setNavPosition('left-0 right-0');
      setNavMargin('mt-0');
      setTextColor('text-secondary'); // Reset text color when at the top
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navItems.find(item => item.to === path || (item.to === "/" && path === ""));
    setActive(activeLink ? activeLink.label : "");

    window.scrollTo(0, 0);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <nav className={`fixed top-0 z-50 transition-all duration-300 ${bgColor} ${navSize} ${navRadius} ${navPosition} ${navMargin}`}>
      <Container className="flex justify-between md:justify-around items-center w-full h-full">
        <Link to="/" className={hideLogo}>
          <Image src={logo} alt="VAJA logo" width={100} height={100} className="md:w-[120px] md:h-[120px]" />
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
                        className={`block px-4 py-2 text-sm ${textColor} hover:text-accent`}
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
