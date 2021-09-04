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
    description: 'Blockchain explorer for Ethereum based network and a tool for inspecting and analyzing EVM based blockchains',
  },
  {
    name: 'Gnosis Safe',
    url: 'https://safe.polis.tech',
    image: 'https://avatars.githubusercontent.com/u/24954468?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description: 'Gnosis Safe is the most trusted platform to manage digital assets',
  },
  {
    name: 'Metamask',
    url: 'https://metamask.io/',
    image: 'https://avatars.githubusercontent.com/u/11744586?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description: 'A crypto wallet and gateway to blockchain apps',
  },
]
