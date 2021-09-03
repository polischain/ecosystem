import Navbar from '../components/NavBar'
import React  from 'react'
import Footer from '../components/Footer'

export function Home(): JSX.Element {

  return (
    <>
      <Navbar />
      <main>
        <div className="relative h-screen flex content-center items-center justify-center hero-header">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl">
                  Join the payments revolution
                </h1>
                <p className="mt-6 lg:w-8/12 text-lg mx-auto text-white">
                  Stake, swap, trade, and engage with a vibrant community
                  building the future of payments.{' '}
                </p>
              </div>
            </div>
            <div className="w-5/6 pt-5 sm:flex sm:justify-center mx-auto">
              <div className="rounded-md shadow-lg">
                <a
                  href="#start"
                  className="bg-contrast-500 hover:bg-contrast-800 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="w-full bg-dark-500">
          <div className="w-full mx-auto px-4 pt-28 pb-4">
            <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
              About
            </h1>
          </div>
          <div className="w-4/6 lg:w-3/6 mx-auto text-center">
            <span className="text-lg md:text-2xl text-white text-center">
              Polis is a community-driven sidechain focused on creating tools to
              start accepting cryptocurrencies easily and securely.
            </span>
          </div>
          <div className="w-3/5 mx-auto">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-10 justify-items-center">
              <div
                className="flow-root bg-darkgrey-500 rounded-lg px-8 py-8"
                style={{ width: '300px' }}
              >
                <div className="mx-auto text-center">
                  <i className="text-white fas fa-5x fa-university" />
                  <h3 className="mt-2 text-4xl font-semibold text-white tracking-tight">
                    Olympus
                  </h3>
                  <p className="mt-2 text-base text-grey-500">
                    Production ready network
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://explorer.polis.tech"
                      className="bg-contrast-500 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="flow-root bg-darkgrey-500 rounded-lg px-8 py-8"
                style={{ width: '300px' }}
              >
                <div className="mx-auto text-center">
                  <i className="text-white fas fa-5x fa-cogs" />
                  <h3 className="mt-2 text-4xl font-semibold text-white tracking-tight">
                    Sparta
                  </h3>
                  <p className="mt-2 text-base text-grey-500">
                    Test network
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://sparta-explorer.polis.tech"
                      className="bg-contrast-500 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="start" className="w-full bg-dark-500">
          <div className="max-w-3xl mx-auto px-4 pt-10 sm:pt-28 pb-4 bg-dark">
            <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
              Explore the network products
            </h1>
          </div>
          <div className="w-5/6 mx-auto">
            <div className="flex flex-row space-x-6 items-center px-3 md:px-10 pt-20 pb-8 overflow-x-scroll no-scrollbar">
              <div className="flex flex-row space-x-6 lg:pl-10">
                <div
                  className="flow-root bg-darkgrey-500 rounded-lg px-8 pb-8"
                  style={{ width: '281px', height: '250px' }}
                >
                  <div className="-mt-16 mx-auto text-center">
                    <div className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden circle-gradient">
                      <i className="text-white fas fa-3x fa-gifts" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                      Shop
                    </h3>
                    <p className="mt-2 text-sm text-grey-500">
                      Enter the self-service shop and access hundreds of
                      products.
                    </p>
                    <div className="rounded-md shadow-lg mt-4">
                      <a
                        className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-opacity-80 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                      >
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div
                  className="flow-root bg-darkgrey-500 rounded-lg px-8 pb-8"
                  style={{ width: '281px', height: '250px' }}
                >
                  <div className="-mt-16 mx-auto text-center">
                    <div className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden circle-gradient">
                      <i className="text-white fas fa-3x fa-wallet" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                      Wallet
                    </h3>
                    <p className="mt-2 text-sm text-grey-500">
                      Get the mobile wallet to store your tokens safely.
                    </p>
                    <div className="rounded-md shadow-lg mt-4">
                      <a
                        className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                      >
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div
                  className="flow-root bg-darkgrey-500 rounded-lg px-8 pb-8"
                  style={{ width: '281px', height: '250px' }}
                >
                  <div className="-mt-16 mx-auto text-center">
                    <div className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden circle-gradient">
                      <i className="text-white fas fa-3x fa-cash-register" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                      Point Of Sale
                    </h3>
                    <p className="mt-2 text-sm text-grey-500">
                      Deploy your own Point-Of-Sale and start accepting tokens.
                    </p>
                    <div className="rounded-md shadow-lg mt-4">
                      <a
                        className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                      >
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div
                  className="flow-root bg-darkgrey-500 rounded-lg px-8 pb-8"
                  style={{ width: '281px', height: '250px' }}
                >
                  <div className="-mt-16 mx-auto text-center">
                    <div className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden circle-gradient">
                      <i className="text-white fas fa-3x fa-coins" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                      Stake
                    </h3>
                    <p className="mt-2 text-sm text-grey-500">
                      Enter the the dApp and support the network with your
                      tokens.
                    </p>
                    <div className="rounded-md shadow-lg mt-4">
                      <a
                        className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                      >
                        Coming Soon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </main>
      <Footer />
    </>
  )
}

export default Home
