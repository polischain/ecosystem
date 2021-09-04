export const CATEGORIES = {
  DEFI: 'DeFi',
  EXPLORER: 'Explorer',
  WALLET: 'Wallets',
  TOKENS: 'Tokens',
  EXCHANGES: 'Exchanges',
}

export const APPS = [
  {
    name: 'Blockscout Explorer',
    url: 'https://explorer.polis.tech',
    image:
      'https://raw.githubusercontent.com/blockscout/blockscout/master/blockscout.png',
    categories: [CATEGORIES.EXPLORER],
    description: 'Official block explorer for the Olympus network',
  },
  {
    name: 'Gnosis Safe',
    url: 'https://safe.polis.tech',
    image: 'https://avatars.githubusercontent.com/u/24954468?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description: 'Audited and secure multi-signature wallets',
  },
  {
    name: 'Metamask',
    url: 'https://metamask.io/',
    image: 'https://avatars.githubusercontent.com/u/11744586?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description: 'A crypto wallet and gateway to blockchain apps on Olympus',
  },
]
