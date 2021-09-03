export default function Footer(): JSX.Element {
  return (
    <footer className="bg-dark-500 py-2 px-2 sm:px-8 sm:py-4">
      <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="w-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10">
            <div className="pt-2 sm:pt-4 col-span-2 sm:col-span-1 md:col-span-2 sm:pr-16">
              <div className="flex items-center">
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
              </div>
              <div className="text-sm text-grey-500 ml-2 mt-4">
                Polis is a community-driven sidechain focused on creating tools
                to start accepting cryptocurrencies easily and securely.
              </div>
              <div className="flex space-x-6 md:order-2 ml-2 mt-4 ">
                <a href="https://polischain.medium.com/" className="text-white">
                  <i className="fab fa-2x fa-medium text-white" />
                </a>
                <a href="https://twitter.com/PolisChain" className="text-white">
                  <i className="fab fa-2x fa-twitter text-white" />
                </a>
                <a href="https://github.com/polischain" className="text-white">
                  <i className="fab fa-2x fa-github text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
