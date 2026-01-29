import React, { useState, useEffect } from 'react';
import { Wind, Menu, X, ChevronDown } from 'lucide-react';

export default function LeapFrogNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0a0a0a]/90' : 'backdrop-blur-md bg-[#0a0a0a]/80'
      } border-b border-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <Wind className="w-7 h-7 text-[#4ade80]" strokeWidth={2.5} />
              <span className="text-xl font-bold text-white tracking-tight">LeapFrog</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Product Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-300 hover:text-[#4ade80] transition-colors duration-200">
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {productDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl py-2">
                    <a href="#features" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">Features</a>
                    <a href="#agents" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">Agents</a>
                    <a href="#integrations" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">Integrations</a>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-300 hover:text-[#4ade80] transition-colors duration-200">
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl py-2">
                    <a href="#cicd" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">CI/CD</a>
                    <a href="#security" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">Security</a>
                    <a href="#finops" className="block px-4 py-2 text-gray-300 hover:text-[#4ade80] hover:bg-gray-900/50 transition-colors duration-200">Cloud FinOps</a>
                  </div>
                )}
              </div>

              <a href="#pricing" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Pricing</a>
              <a href="#docs" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Docs</a>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#login" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Login</a>
              <button className="relative px-5 py-2 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#3dcd70] transition-all duration-200 shadow-lg hover:shadow-[#4ade80]/50">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-[#4ade80] transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
        
        <div className={`absolute top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-[#0a0a0a]/98 border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
            {/* Product Section */}
            <div>
              <button 
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-[#4ade80] transition-colors duration-200"
              >
                <span className="text-lg font-medium">Product</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productDropdownOpen && (
                <div className="mt-3 ml-4 space-y-3">
                  <a href="#features" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">Features</a>
                  <a href="#agents" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">Agents</a>
                  <a href="#integrations" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">Integrations</a>
                </div>
              )}
            </div>

            {/* Solutions Section */}
            <div>
              <button 
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-[#4ade80] transition-colors duration-200"
              >
                <span className="text-lg font-medium">Solutions</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsDropdownOpen && (
                <div className="mt-3 ml-4 space-y-3">
                  <a href="#cicd" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">CI/CD</a>
                  <a href="#security" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">Security</a>
                  <a href="#finops" className="block text-gray-400 hover:text-[#4ade80] transition-colors duration-200">Cloud FinOps</a>
                </div>
              )}
            </div>

            <a href="#pricing" className="text-lg text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Pricing</a>
            <a href="#docs" className="text-lg text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Docs</a>

            <div className="border-t border-gray-800 pt-6 space-y-4">
              <a href="#login" className="block text-lg text-gray-300 hover:text-[#4ade80] transition-colors duration-200">Login</a>
              <button className="w-full px-5 py-3 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#3dcd70] transition-all duration-200 shadow-lg hover:shadow-[#4ade80]/50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}