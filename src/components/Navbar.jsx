import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { logo } from '../assets';
import { navItems } from '../constants';



export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 md:p-10 h-20 md:h-24">
      <Container className="flex justify-between md:justify-around items-center w-full h-full">
        <Link to="/">
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
                className={`text-secondary hover:text-accent transition-colors duration-200 font-libre-baskerville px-3 py-2 ${
                  activeDropdown === item.to ? 'text-accent' : ''
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
                        className="block px-4 py-2 text-sm text-primary hover:text-accent"
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
              className="block text-white hover:text-secondary transition-colors duration-200 font-libre-baskerville py-2"
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
