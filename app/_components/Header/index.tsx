'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  // Initial animation setup
  useEffect(() => {
    // Prevent flash of unstyled content
    if (headerRef.current) {
      headerRef.current.style.visibility = 'visible';
    }

    // Initial animation for desktop menu items
    const menuItems = document.querySelectorAll('.menu-item');
    gsap.fromTo(
      menuItems,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );
  }, []);

  // Mobile menu animation
  const toggleMenu = () => {
    if (!menuRef.current) return;

    if (!isOpen) {
      // Opening animation
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Animate menu items
      const mobileMenuItems = menuRef.current.querySelectorAll('.mobile-menu-item');
      gsap.fromTo(
        mobileMenuItems,
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    } else {
      // Closing animation
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in',
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-white z-50"
      style={{ visibility: 'hidden' }} // Prevent FOUC
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold menu-item">
            <Image 
                src="/tcu-armni-logo.jpg"
                alt="東京都市大学 校友会"
                width={160}
                height={40}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="menu-item text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-16 right-0 h-screen w-64 bg-white shadow-lg transform translate-x-full transition-transform md:hidden"
      >
        <nav className="flex flex-col p-4">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="mobile-menu-item py-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;