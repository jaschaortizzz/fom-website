import React from 'react'

function Header() {
  return (
      <div>
          <nav className="fixed top-0">
            <div className="py-3 flex bg-black text-white w-screen justify-between items-center">
              <div className="px-16 flex">
                  <img className="h-20" src="/images/fom-logo.jpg" alt="logo"/>
              </div>
              <ul className="px-16 flex font-semibold font-heading space-x-12">
                <li><a className="hover:text-gray-200" href="/">Home</a></li>
                <li><a className="hover:text-gray-200" href="/">Services</a></li>
                <li><a className="hover:text-gray-200" href="/">About Us</a></li>
                <li><a className="hover:text-gray-200" href="/">Contact Us</a></li>
              </ul>
            </div>
            
            {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a> */}
          </nav>

      </div>
  )
}

export default Header
