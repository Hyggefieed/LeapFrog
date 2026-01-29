import React from 'react';
import { Origami, Twitter, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function LeapFrogFooter() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Agents', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#', badge: 'Hiring' },
      { label: 'Security', href: '#' },
      { label: 'Trust Center', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'SLA', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageSquare, href: '#', label: 'Discord' }
  ];

  return (
    <footer className="bg-[#050505] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Origami className="w-6 h-6 text-[#4ade80]" />
              <span className="text-white font-semibold text-lg">LeapFrog</span>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              The Agentic AI control plane for autonomous software delivery.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-[#4ade80] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-xs px-2 py-0.5 bg-[#4ade80] text-black font-medium rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 LeapFrog AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-[#4ade80] rounded-full animate-ping" />
            </div>
            <span className="text-xs text-slate-500">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}