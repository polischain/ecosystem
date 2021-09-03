import React from 'react'

export default function Navbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between lg:w-4/6">
          <div className="flex items-center flex-1 justify-between lg:justify-start">
            <a aria-label="Home" href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/logo.png"
                alt="Logo"
              />
            </a>
            <a
              className="text-xl font-bold leading-6 text-white sm:truncate ml-2"
              href="/"
            >
              Polis
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <i className="text-white fas fa-times" />
              ) : (
                <i className="text-white fas fa-bars" />
              )}
            </button>
          </div>

          <div
            className={
              'mt-3 lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? 'block rounded shadow-lg bg-dark' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center text-white text-md my-3">
                <a href="https://doc.polis.tech" rel="noopener noreferrer">
                  <span className="inline-block ml-4">Documentation</span>
                </a>
              </li>
              <li className="flex items-center text-white text-md my-3">
                <a href="#about">
                  <span className="inline-block ml-4">About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
