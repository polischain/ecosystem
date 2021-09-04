export default function Footer(): JSX.Element {
  return (
    <footer className="bg-dark-500 py-2 px-2 sm:px-8 sm:py-4">
      <div id="social" className="w-full bg-dark-500">
        <div className="max-w-3xl mx-auto px-4 pt-10 sm:pt-28 pb-4 bg-dark">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
            Build with a global community
          </h1>
        </div>
        <div className="w-4/6 lg:w-3/6 mx-auto text-center">
          <span className="text-lg md:text-2xl text-white text-center">
            Join us to learn, chat, and help us build the future of payments.
          </span>
        </div>
        <div className="w-full lg:w-3/5  xl:w-2/4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-10 justify-items-center">
            <a
              href="https://discord.gg/MjNZDNj"
              className="hover:shadow-blue-glow"
            >
              <div
                className="flow-root bg-white rounded-lg px-8 py-8"
                style={{ width: '200px' }}
              >
                <div className="mx-auto text-center">
                  <i
                    style={{ color: '#7289da' }}
                    className="fab fa-5x fa-discord"
                  />
                  <h3
                    style={{ color: '#7289da' }}
                    className="mt-2 text-3xl font-semibold text-white tracking-tight"
                  >
                    Discord
                  </h3>
                  <p style={{ color: '#7289da' }} className="mt-2 text-sm">
                    Join the conversation with the Polis community
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://t.me/PolisPayOfficial"
              className="hover:shadow-blue-glow"
            >
              <div
                className="flow-root bg-white rounded-lg px-8 py-8"
                style={{ width: '200px' }}
              >
                <div className="mx-auto text-center">
                  <i
                    style={{ color: '#0088CC' }}
                    className="text-white fab fa-5x fa-telegram"
                  />
                  <h3
                    style={{ color: '#0088CC' }}
                    className="mt-2 text-3xl font-semibold text-white tracking-tight"
                  >
                    Telegram
                  </h3>
                  <p style={{ color: '#0088CC' }} className="mt-2 text-sm">
                    Engage the conversation with the community
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/PolisChain"
              className="hover:shadow-blue-glow"
            >
              <div
                className="flow-root bg-white rounded-lg px-8 py-8"
                style={{ width: '200px' }}
              >
                <div className="mx-auto text-center">
                  <i
                    style={{ color: '#1da1f2' }}
                    className="text-white fab fa-5x fa-twitter"
                  />
                  <h3
                    style={{ color: '#1da1f2' }}
                    className="mt-2 text-3xl font-semibold text-white tracking-tight"
                  >
                    Twitter
                  </h3>
                  <p style={{ color: '#1da1f2' }} className="mt-2 text-sm">
                    Follow us on twitter to get the latest news
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
