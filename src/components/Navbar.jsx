import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { logo } from '../assets';

const navItems = [
  { label: 'Our Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 md:p-10 h-20 md:h-24">
      <Container className="flex justify-between md:justify-around items-center w-full h-full">
        <Link to="/">
          <Image src={logo} alt="VAJA logo" width={100} height={100} className="md:w-[120px] md:h-[120px]" />
        </Link>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-secondary hover:text-accent transition-colors duration-200 font-libre-baskerville px-3 py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <IconMenu2
            onClick={toggle}
            size={24}
            className="text-secondary cursor-pointer"
          />
        </div>
      </Container>

      {opened && (
        <div className="md:hidden absolute top-5 md:top-20 left-0 right-0 bg-accent p-4">
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
