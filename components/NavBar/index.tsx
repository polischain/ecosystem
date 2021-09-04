import React from 'react'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Documentation', href: 'https://doc.polis.tech' },
  { name: 'Faucet', href: 'https://faucet.polis.tech' },
  { name: 'Explorer', href: 'https://explorer.polis.tech' },
]

export default function Navbar(): JSX.Element {
  return (
    <>
      <Disclosure as="nav" className="bg-dark-500">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <i className="text-white fas fa-times" />
                    ) : (
                      <i className="text-white fas fa-bars" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/img/logo.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden sm:block w-full">
                    <div className="flex flex-row-reverse mx-10">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                            'text-white hover:bg-dark-400 px-3 py-2 rounded-md text-lg'
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      'hover:bg-dark-400 text-white block px-3 py-2 rounded-md text-base font-medium'
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
