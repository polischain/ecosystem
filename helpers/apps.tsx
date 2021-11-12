export const CATEGORIES = {
  DEFI: 'DeFi',
  EXPLORER: 'Explorer',
  WALLET: 'Wallets',
  EXCHANGES: 'Exchanges',
  UTILS: 'Utils',
}

export const APPS = [
  {
    name: 'Blockscout Explorer',
    url: 'https://explorer.polis.tech',
    image:
      'https://raw.githubusercontent.com/blockscout/blockscout/master/blockscout.png',
    categories: [CATEGORIES.EXPLORER],
    description:
      'Blockchain explorer for Ethereum based network and a tool for inspecting and analyzing EVM based blockchains',
  },
  {
    name: 'Gnosis Safe',
    url: 'https://safe.polis.tech',
    image: 'https://avatars.githubusercontent.com/u/24954468?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description:
      'Gnosis Safe is the most trusted platform to manage digital assets',
  },
  {
    name: 'Metamask',
    url: 'https://metamask.io/',
    image: 'https://avatars.githubusercontent.com/u/11744586?s=200&v=4',
    categories: [CATEGORIES.WALLET],
    description: 'A crypto wallet and gateway to blockchain apps',
  },
  {
    name: 'Hades Swap',
    url: 'https://hadesswap.finance/',
    image: 'https://hadesswap.finance/static/media/logo.6bd95907.png',
    categories: [CATEGORIES.EXCHANGES, CATEGORIES.DEFI],
    description: 'Community-driven DeFi hub for Polis Olympus blockchain',
  },
  {
    name: 'Chainlist',
    url: 'https://chainlist.org/',
    image: 'https://chainlist.org/favicon.png',
    categories: [CATEGORIES.UTILS],
    description: 'A list of EVM enabled blockchains to connect easily',
  },
  {
    name: 'Polis Faucet',
    url: 'https://faucet.polis.tech/',
    image: 'https://faucet.polis.tech/images/logo-512x512.png',
    categories: [CATEGORIES.UTILS],
    description: 'Polis Sparta and Polis Olympus faucet',
  },
  {
    name: 'vfat.tools',
    url: 'https://vfat.tools/',
    image: 'https://vfat.tools/favicon.svg',
    categories: [CATEGORIES.DEFI],
    description: 'Yield Farming Information',
  },
]
