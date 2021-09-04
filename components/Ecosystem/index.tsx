import React, { useState } from 'react'
import { APPS, CATEGORIES } from '../../helpers/apps'

function card(app) {
  return (
    <a href={app.url} key={app.name}>
      <div className="flow-root bg-white rounded-lg px-8 py-8 shadow-md hover:shadow-2xl mx-auto text-center">
        <div>
          <img
            className="mx-auto"
            src={app.image}
            alt={app.name}
            width="100px"
          />
          <h3 className="my-5 text-lg font-semibold text-dark-500">
            {app.name}
          </h3>
          <p className="text-sm text-grey-500">{app.description}</p>
        </div>
      </div>
    </a>
  )
}

export default function Ecosystem(): JSX.Element {
  const [filter, setFilter] = useState('')

  function apps(): {
    name: string
    url: string
    image: string
    description: string
  }[] {
    if (filter) {
      return APPS.filter((fApp) => {
        return fApp.categories.indexOf(filter) !== -1
      })
    } else {
      return APPS
    }
  }

  function showFilters(): JSX.Element {
    const filters = Object.values(CATEGORIES)

    return (
      <div className="w-3/4 mx-auto flex items-center text-center">
        <div className="block mx-auto items-center">
          <button
            className="bg-dark-600 hover:bg-dark-400 text-white py-1 px-2 text-xs uppercase rounded-full mx-1 my-1"
            onClick={() => setFilter('')}
          >
            Show all
          </button>
          {filters.map((filter) => {
            return (
              <button
                className="bg-dark-600 hover:bg-dark-400 text-white py-1 px-2 text-xs uppercase rounded-full mx-1"
                onClick={() => setFilter(filter)}
              >
                {filter}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-2 px-2 sm:px-8 sm:py-4">
      <div>{showFilters()}</div>
      <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps().map((app) => {
              return card(app)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
