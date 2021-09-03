enum CATEGORIES {
  DEFI,
  EXPLORER,
  WALLET,
  STABLECOINS,
  EXCHANGES,
}

export const APPS = [
  {
    name: 'Blockscout',
    url: 'https://explorer.polis.tech',
    image: '',
    categories: [CATEGORIES.EXPLORER],
  },
  {
    name: 'Hades Finance',
    url: '#',
    image: '',
    categories: [CATEGORIES.DEFI, CATEGORIES.EXCHANGES],
  },
  {
    name: 'Metamask',
    url: '#',
    image: '',
    categories: [CATEGORIES.WALLET],
  },
]

export const CATEGORIES_NAMES = {
  0: 'DeFi',
  1: 'Explorer',
  2: 'Wallets',
  3: 'Stable coins',
  4: 'Exchanges',
}
