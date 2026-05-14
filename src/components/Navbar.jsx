import React, { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-nord-darkest border-b border-nord-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold text-nord-snow hover:text-nord-frost transition-colors"
        >
          Drew Voss
        </a>

        <div className="flex items-center space-x-8">
          <a
            href="/"
            className="text-nord-ice font-medium hover:text-nord-frost transition-colors"
          >
            Home
          </a>

          <div className="relative">
            <button
              className="text-nord-ice font-medium hover:text-nord-frost transition-colors flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-nord-dark rounded-lg shadow-lg border border-nord-border py-2 overflow-hidden">
                <a
                  href="/projects/homelab"
                  className="block px-4 py-2 text-sm text-nord-ice hover:bg-nord-border hover:text-nord-snow transition-colors"
                >
                  Proxmox Cluster
                </a>
                <a
                  href="/projects/garagetracker"
                  className="block px-4 py-2 text-sm text-nord-ice hover:bg-nord-border hover:text-nord-snow transition-colors"
                >
                  Garage Tracker
                </a>
                <a
                  href="/projects/portfolio"
                  className="block px-4 py-2 text-sm text-nord-ice hover:bg-nord-border hover:text-nord-snow transition-colors"
                >
                  Self-Hosted Portfolio Website
                </a>
              </div>
            )}
          </div>

          <a
            href="/about"
            className="text-nord-ice font-medium hover:text-nord-frost transition-colors"
          >
            About Me
          </a>
        </div>
      </div>
    </nav>
  );
}
