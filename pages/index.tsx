import Navbar from '../components/NavBar'
import React from 'react'
import Footer from '../components/Footer'
import Ecosystem from '../components/Ecosystem'

export function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative h-80 flex content-center items-center justify-center hero-header">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-3xl xl:text-5xl">
                  Explore the Polis Chain Ecosystem
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Ecosystem />
      </main>
      <Footer />
    </>
  )
}

export default Home
