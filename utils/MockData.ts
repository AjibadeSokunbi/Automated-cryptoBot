export const protocolPercentages = {
  LIDO: {
    percentage: 30,
    protocolImage: "https://example.com/ethereum.png",
  },
  UniswapV2V3: {
    percentage: 20,
    protocolImage: "https://example.com/binance-smart-chain.png",
  },
  Pancake: {
    percentage: 15,
    protocolImage: "https://example.com/solana.png",
  },
  UniswapV2V2: {
    percentage: 10,
    protocolImage: "https://example.com/polygon.png",
  },
  PancakeV2: {
    percentage: 60,
    protocolImage: "https://example.com/polygon.png",
  },
};

export const header = [
  {
    title: "Price",
    price: "$1,846.105",
    isDollar: true,
    isSiNumber: true,
    subPrice: "+0.98%"
  },
  {
    title: "24H Volume(USD)",
    price: "$139M",
    isDollar: true,
    isSiNumber: true,
  },
  {
    title: "Market Cap",
    price: "$6.3B",
    isDollar: true,
    isSiNumber: true,
  },
  {
    title: "Buys (24H)",
    price: "1,955",
    isDollar: false
  },
  {
    title: "Sells (24H)",
    price: "1,955",
    isDollar: false
  },
  {
    title: "Token Holders",
    price: "677889",
    isDollar: true,
    isSiNumber: true,
  },
];


export const HistoryMockData = [
  {
    blockTimestamp: 1626335200,
    from: "0x1234567890",
    to: "0x0987654321",
    action: "Received",
    hash: "0xabcde12345",
  },
  {
    blockTimestamp: 1626336000,
    from: "0x0987654321",
    to: "0x1234567890",
    action: "Sent",
    hash: "0x54321abcde",
  },
  {
    blockTimestamp: 1626337200,
    from: "0xabcdef1234",
    to: "0x9876543210",
    action: "Received",
    hash: "0xdefabc4567",
  },
  {
    blockTimestamp: 1626338400,
    from: "0x09876abcdef",
    to: "0x1234509876",
    action: "Sent",
    hash: "0x7890defabc",
  },
  {
    blockTimestamp: 1626339600,
    from: "0x1234509876",
    to: "0x09876abcdef",
    action: "Received",
    hash: "0xabcdef7890",
  },
  // 20 new entries
  {
    blockTimestamp: 1626340800,
    from: "0xabcdef7890",
    to: "0x09876abcde",
    action: "Sent",
    hash: "0x7890abcde",
  },
  {
    blockTimestamp: 1626342000,
    from: "0x09876abcde",
    to: "0xabcdef7890",
    action: "Received",
    hash: "0xabcde7890",
  },
  {
    blockTimestamp: 1626343200,
    from: "0x123450defa",
    to: "0x09876bcdef",
    action: "Sent",
    hash: "0xdefa7890",
  },
  {
    blockTimestamp: 1626344400,
    from: "0x09876bcdef",
    to: "0x123450defa",
    action: "Received",
    hash: "0x123450defa",
  },
  {
    blockTimestamp: 1626345600,
    from: "0x123450defa",
    to: "0x09876bcdef",
    action: "Sent",
    hash: "0xdefa1234",
  },
  {
    blockTimestamp: 1626346800,
    from: "0x1234567890",
    to: "0x0987654321",
    action: "Received",
    hash: "0xabcde12345",
  },
  {
    blockTimestamp: 1626348000,
    from: "0x0987654321",
    to: "0x1234567890",
    action: "Sent",
    hash: "0x54321abcde",
  },
  {
    blockTimestamp: 1626349200,
    from: "0xabcdef1234",
    to: "0x9876543210",
    action: "Received",
    hash: "0xdefabc4567",
  },
  {
    blockTimestamp: 1626350400,
    from: "0x09876abcdef",
    to: "0x1234509876",
    action: "Sent",
    hash: "0x7890defabc",
  },
  {
    blockTimestamp: 1626351600,
    from: "0x1234509876",
    to: "0x09876abcdef",
    action: "Received",
    hash: "0xabcdef7890",
  },
  {
    blockTimestamp: 1626352800,
    from: "0xabcdef7890",
    to: "0x09876abcde",
    action: "Sent",
    hash: "0x7890abcde",
  },
  {
    blockTimestamp: 1626354000,
    from: "0x09876abcde",
    to: "0xabcdef7890",
    action: "Received",
    hash: "0xabcde7890",
  },
  {
    blockTimestamp: 1626355200,
    from: "0x123450defa",
    to: "0x09876bcdef",
    action: "Sent",
    hash: "0xdefa7890",
  },
  {
    blockTimestamp: 1626356400,
    from: "0x09876bcdef",
    to: "0x123450defa",
    action: "Received",
    hash: "0x123450defa",
  },
  {
    blockTimestamp: 1626357600,
    from: "0x123450defa",
    to: "0x09876bcdef",
    action: "Sent",
    hash: "0xdefa1234",
  },
  {
    blockTimestamp: 1626358800,
    from: "0x1234567890",
    to: "0x0987654321",
    action: "Received",
    hash: "0xabcde12345",
  },
  {
    blockTimestamp: 1626360000,
    from: "0x0987654321",
    to: "0x1234567890",
    action: "Sent",
    hash: "0x54321abcde",
  },
  {
    blockTimestamp: 1626361200,
    from: "0xabcdef1234",
    to: "0x9876543210",
    action: "Received",
    hash: "0xdefabc4567",
  },
  {
    blockTimestamp: 1626362400,
    from: "0x09876abcdef",
    to: "0x1234509876",
    action: "Sent",
    hash: "0x7890defabc",
  },
  {
    blockTimestamp: 1626363600,
    from: "0x1234509876",
    to: "0x09876abcdef",
    action: "Received",
    hash: "0xabcdef7890",
  },
];



export const colors = [
  "bg-blue-500",
  "bg-teal-400",
  "bg-violet-600",
  "bg-amber-400",
  "bg-rose-500",
];


export const mockData = {
  address: "0x123456789abcdef",
  chainPercentages: {
    Ethereum: 40,
    Bnb: 30,
    Polygon: 14,
    Solana: 10,
    Arbitrum: 16,
  },
  isLoadings: false,
};

export const filteredData2 = {
  balances: [
    {
      symbol: "BTC",
      logo: "https://example.com/btc.png",
      usdPrice: 45000,
      balance: 1.2345,
      Networth: 55555,
    },
    {
      symbol: "ETH",
      logo: "https://example.com/eth.png",
      usdPrice: 3000,
      balance: 10.6789,
      Networth: 32100,
    },
    {
      symbol: "LTC",
      logo: "https://example.com/ltc.png",
      usdPrice: 150,
      balance: 50.123,
      Networth: 7518.45,
    },
    {
      symbol: "XRP",
      logo: "https://example.com/xrp.png",
      usdPrice: 0.75,
      balance: 1000,
      Networth: 750,
    },
    {
      symbol: "ADA",
      logo: "https://example.com/ada.png",
      usdPrice: 1.5,
      balance: 200,
      Networth: 300,
    },
    {
      symbol: "BNB",
      logo: "https://example.com/bnb.png",
      usdPrice: 300,
      balance: 20.567,
      Networth: 6170.1,
    },
    {
      symbol: "DOGE",
      logo: "https://example.com/doge.png",
      usdPrice: 0.25,
      balance: 5000,
      Networth: 1250,
    },
    {
      symbol: "XLM",
      logo: "https://example.com/xlm.png",
      usdPrice: 0.35,
      balance: 3000,
      Networth: 1050,
    },
    {
      symbol: "LINK",
      logo: "https://example.com/link.png",
      usdPrice: 25,
      balance: 50,
      Networth: 1250,
    },
    {
      symbol: "DOT",
      logo: "https://example.com/dot.png",
      usdPrice: 15,
      balance: 100,
      Networth: 1500,
    },
    {
      symbol: "BTC",
      logo: "https://example.com/btc.png",
      usdPrice: 45000,
      balance: 1.2345,
      Networth: 55555,
    },
    {
      symbol: "ETH",
      logo: "https://example.com/eth.png",
      usdPrice: 3000,
      balance: 10.6789,
      Networth: 32100,
    },
    {
      symbol: "LTC",
      logo: "https://example.com/ltc.png",
      usdPrice: 150,
      balance: 50.123,
      Networth: 7518.45,
    },
    {
      symbol: "XRP",
      logo: "https://example.com/xrp.png",
      usdPrice: 0.75,
      balance: 1000,
      Networth: 750,
    },
    {
      symbol: "ADA",
      logo: "https://example.com/ada.png",
      usdPrice: 1.5,
      balance: 200,
      Networth: 300,
    },
    {
      symbol: "BNB",
      logo: "https://example.com/bnb.png",
      usdPrice: 300,
      balance: 20.567,
      Networth: 6170.1,
    },
    {
      symbol: "DOGE",
      logo: "https://example.com/doge.png",
      usdPrice: 0.25,
      balance: 5000,
      Networth: 1250,
    },
    {
      symbol: "XLM",
      logo: "https://example.com/xlm.png",
      usdPrice: 0.35,
      balance: 3000,
      Networth: 1050,
    },
    {
      symbol: "LINK",
      logo: "https://example.com/link.png",
      usdPrice: 25,
      balance: 50,
      Networth: 1250,
    },
    {
      symbol: "DOT",
      logo: "https://example.com/dot.png",
      usdPrice: 15,
      balance: 100,
      Networth: 1500,
    },
  ],
};

export const filteredData = {
  balances: [
    {
      symbol: "BTC",
      logo: "https://example.com/btc.png",
      usdPrice: 45000,
      balance: 1.2345,
      Networth: 55555,
    },
    {
      symbol: "ETH",
      logo: "https://example.com/eth.png",
      usdPrice: 3000,
      balance: 10.6789,
      Networth: 32100,
    },
    {
      symbol: "LTC",
      logo: "https://example.com/ltc.png",
      usdPrice: 150,
      balance: 50.123,
      Networth: 7518.45,
    },
    {
      symbol: "XRP",
      logo: "https://example.com/xrp.png",
      usdPrice: 0.75,
      balance: 1000,
      Networth: 750,
    },
    {
      symbol: "ADA",
      logo: "https://example.com/ada.png",
      usdPrice: 1.5,
      balance: 200,
      Networth: 300,
    },
    {
      symbol: "BNB",
      logo: "https://example.com/bnb.png",
      usdPrice: 300,
      balance: 20.567,
      Networth: 6170.1,
    },
    {
      symbol: "DOGE",
      logo: "https://example.com/doge.png",
      usdPrice: 0.25,
      balance: 5000,
      Networth: 1250,
    },
    {
      symbol: "XLM",
      logo: "https://example.com/xlm.png",
      usdPrice: 0.35,
      balance: 3000,
      Networth: 1050,
    },
    {
      symbol: "LINK",
      logo: "https://example.com/link.png",
      usdPrice: 25,
      balance: 50,
      Networth: 1250,
    },
    {
      symbol: "DOT",
      logo: "https://example.com/dot.png",
      usdPrice: 15,
      balance: 100,
      Networth: 1500,
    },
  ],
};

export const watchlist = [
  {
    token: "SOL BSC"
  },
  {
    token: "SOL BSC"
  },
  {
    token: "SOL BSC"
  }
  
]

export const hotPairs = [
  "ETH",
  "BTC",
  "ADA",
  "XRP",
  "DOT",
  "LTC",
  "BCH",
  "LINK",
  "XLM",
  "DOGE",
  "UNI",
  "MATIC",
  "SOL",
  "AVAX",
  "ATOM",
  "ICP",
  "FTT",
  "ALGO",
  "XTZ",
  "AAVE",
  "ETH",
  "BTC",
  "ADA",
  "XRP",
  "DOT",
  "LTC",
  "BCH",
  "LINK",
  "XLM",
  "DOGE",
  "UNI",
  "MATIC",
  "SOL",
  "AVAX",
  "ATOM",
  "ICP",
  "FTT",
  "ALGO",
  "XTZ",
  "AAVE"
];

export const dataArray = [
  {
    WANNA: [{ action: 'Sent', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690254515000', usdAmount1: 944.264398448547, usdAmount2: null, value1: 944.264398448547, value2: null, gasFee: 10.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690254479000', usdAmount1: 1856.33, usdAmount2: null, value1: 1856.33, value2: null, gasFee: 5.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'USDC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690252823000', usdAmount1: 185.633, usdAmount2: 2200.0, value1: 185.633, value2: 66.7, gasFee: 2.5 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690250903000', usdAmount1: 1392.2475, usdAmount2: 0.036, value1: 1392.2475, value2: 0.0015, gasFee: 7.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690249463000', usdAmount1: 130.352238750409, usdAmount2: null, value1: 130.352238750409, value2: null, gasFee: 15.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690245983000', usdAmount1: 60.5, usdAmount2: null, value1: 60.5, value2: null, gasFee: 50.0 },
    { action: 'Add Liquidity', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224587000', usdAmount1: 4289.132072, usdAmount2: 520.0, value1: 4289.132072, value2: 0.05, gasFee: 3.0 },
    { action: 'Swap', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690224503000', usdAmount1: 4289.132072, usdAmount2: 1.012, value1: 4289.132072, value2: 0.002, gasFee: 2.5 },
    { action: 'Sent', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690224503000', usdAmount1: 4309.079153227032, usdAmount2: null, value1: 4309.079153227032, value2: null, gasFee: 4.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690224419000', usdAmount1: 5568.99, usdAmount2: null, value1: 5568.99, value2: null, gasFee: 3.5 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224239000', usdAmount1: 7761.364259632757, usdAmount2: 340.0, value1: 7761.364259632757, value2: 3333.5, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690223243000', usdAmount1: 200.942046075983, usdAmount2: 4.096, value1: 200.942046075983, value2: 67.88, gasFee: 10.0 },
    { action: 'Received', asset1: 'UNIBOT', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690205927000', usdAmount1: 15617.984651228762, usdAmount2: null, value1: 15617.984651228762, value2: null, gasFee: 8.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690205279000', usdAmount1: 32075.667978680623, usdAmount2: null, value1: 32075.667978680623, value2: null, gasFee: 12.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690205099000', usdAmount1: 454.085, usdAmount2: 0.5, value1: 454.085, value2: 66.7, gasFee: 20.0 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690204727000', usdAmount1: 6600.05, usdAmount2: 0.11, value1: 6600.05, value2: 5.777, gasFee: 5.0 },
    { action: 'Sent', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 2310.0175, usdAmount2: null, value1: 2310.0175, value2: null, gasFee: 3.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 4290.0325, usdAmount2: null, value1: 4290.0325, value2: null, gasFee: 4.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690158812000', usdAmount1: 1048.392, usdAmount2: 120.0, value1: 1048.392, value2: 3.77, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690157592000', usdAmount1: 1222.073, usdAmount2: 0.2, value1: 1222.073, value2: 5.777, gasFee: 2.5 },]
  },
  {
    SHOLA: [{ action: 'Sent', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690254515000', usdAmount1: 944.264398448547, usdAmount2: null, value1: 944.264398448547, value2: null, gasFee: 10.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690254479000', usdAmount1: 1856.33, usdAmount2: null, value1: 1856.33, value2: null, gasFee: 5.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'USDC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690252823000', usdAmount1: 185.633, usdAmount2: 2200.0, value1: 185.633, value2: 66.7, gasFee: 2.5 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690250903000', usdAmount1: 1392.2475, usdAmount2: 0.036, value1: 1392.2475, value2: 0.0015, gasFee: 7.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690249463000', usdAmount1: 130.352238750409, usdAmount2: null, value1: 130.352238750409, value2: null, gasFee: 15.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690245983000', usdAmount1: 60.5, usdAmount2: null, value1: 60.5, value2: null, gasFee: 50.0 },
    { action: 'Add Liquidity', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224587000', usdAmount1: 4289.132072, usdAmount2: 520.0, value1: 4289.132072, value2: 0.05, gasFee: 3.0 },
    { action: 'Swap', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690224503000', usdAmount1: 4289.132072, usdAmount2: 1.012, value1: 4289.132072, value2: 0.002, gasFee: 2.5 },
    { action: 'Sent', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690224503000', usdAmount1: 4309.079153227032, usdAmount2: null, value1: 4309.079153227032, value2: null, gasFee: 4.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690224419000', usdAmount1: 5568.99, usdAmount2: null, value1: 5568.99, value2: null, gasFee: 3.5 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224239000', usdAmount1: 7761.364259632757, usdAmount2: 340.0, value1: 7761.364259632757, value2: 3333.5, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690223243000', usdAmount1: 200.942046075983, usdAmount2: 4.096, value1: 200.942046075983, value2: 67.88, gasFee: 10.0 },
    { action: 'Received', asset1: 'UNIBOT', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690205927000', usdAmount1: 15617.984651228762, usdAmount2: null, value1: 15617.984651228762, value2: null, gasFee: 8.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690205279000', usdAmount1: 32075.667978680623, usdAmount2: null, value1: 32075.667978680623, value2: null, gasFee: 12.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690205099000', usdAmount1: 454.085, usdAmount2: 0.5, value1: 454.085, value2: 66.7, gasFee: 20.0 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690204727000', usdAmount1: 6600.05, usdAmount2: 0.11, value1: 6600.05, value2: 5.777, gasFee: 5.0 },
    { action: 'Sent', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 2310.0175, usdAmount2: null, value1: 2310.0175, value2: null, gasFee: 3.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 4290.0325, usdAmount2: null, value1: 4290.0325, value2: null, gasFee: 4.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690158812000', usdAmount1: 1048.392, usdAmount2: 120.0, value1: 1048.392, value2: 3.77, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690157592000', usdAmount1: 1222.073, usdAmount2: 0.2, value1: 1222.073, value2: 5.777, gasFee: 2.5 },]
  },
  {
    PROFITABLEMEMECOINTRADER: [{ action: 'Sent', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690254515000', usdAmount1: 944.264398448547, usdAmount2: null, value1: 944.264398448547, value2: null, gasFee: 10.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690254479000', usdAmount1: 1856.33, usdAmount2: null, value1: 1856.33, value2: null, gasFee: 5.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'USDC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690252823000', usdAmount1: 185.633, usdAmount2: 2200.0, value1: 185.633, value2: 66.7, gasFee: 2.5 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690250903000', usdAmount1: 1392.2475, usdAmount2: 0.036, value1: 1392.2475, value2: 0.0015, gasFee: 7.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690249463000', usdAmount1: 130.352238750409, usdAmount2: null, value1: 130.352238750409, value2: null, gasFee: 15.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690245983000', usdAmount1: 60.5, usdAmount2: null, value1: 60.5, value2: null, gasFee: 50.0 },
    { action: 'Add Liquidity', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224587000', usdAmount1: 4289.132072, usdAmount2: 520.0, value1: 4289.132072, value2: 0.05, gasFee: 3.0 },
    { action: 'Swap', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690224503000', usdAmount1: 4289.132072, usdAmount2: 1.012, value1: 4289.132072, value2: 0.002, gasFee: 2.5 },
    { action: 'Sent', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690224503000', usdAmount1: 4309.079153227032, usdAmount2: null, value1: 4309.079153227032, value2: null, gasFee: 4.0 },
    { action: 'Received', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690224419000', usdAmount1: 5568.99, usdAmount2: null, value1: 5568.99, value2: null, gasFee: 3.5 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224239000', usdAmount1: 7761.364259632757, usdAmount2: 340.0, value1: 7761.364259632757, value2: 3333.5, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690223243000', usdAmount1: 200.942046075983, usdAmount2: 4.096, value1: 200.942046075983, value2: 67.88, gasFee: 10.0 },
    { action: 'Received', asset1: 'UNIBOT', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690205927000', usdAmount1: 15617.984651228762, usdAmount2: null, value1: 15617.984651228762, value2: null, gasFee: 8.0 },
    { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690205279000', usdAmount1: 32075.667978680623, usdAmount2: null, value1: 32075.667978680623, value2: null, gasFee: 12.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690205099000', usdAmount1: 454.085, usdAmount2: 0.5, value1: 454.085, value2: 66.7, gasFee: 20.0 },
    { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690204727000', usdAmount1: 6600.05, usdAmount2: 0.11, value1: 6600.05, value2: 5.777, gasFee: 5.0 },
    { action: 'Sent', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 2310.0175, usdAmount2: null, value1: 2310.0175, value2: null, gasFee: 3.0 },
    { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 4290.0325, usdAmount2: null, value1: 4290.0325, value2: null, gasFee: 4.0 },
    { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690158812000', usdAmount1: 1048.392, usdAmount2: 120.0, value1: 1048.392, value2: 3.77, gasFee: 5.0 },
    { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690157592000', usdAmount1: 1222.073, usdAmount2: 0.2, value1: 1222.073, value2: 5.777, gasFee: 2.5 },]
  }
];


export const transactions = [
  { action: 'Sent', asset1: 'ETH', tokensIn: {}, asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690254515000', usdAmount1: 944.264398448547, usdAmount2: null, value1: 944.264398448547, value2: null, gasFee: 10.0 },
  { action: 'Received', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690254479000', usdAmount1: 1856.33, usdAmount2: null, value1: 1856.33, value2: null, gasFee: 5.0 },
  { action: 'Add Liquidity', asset1: 'ETH', asset2: 'USDC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690252823000', usdAmount1: 185.633, usdAmount2: 2200.0, value1: 185.633, value2: 66.7, gasFee: 2.5 },
  { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690250903000', usdAmount1: 1392.2475, usdAmount2: 0.036, value1: 1392.2475, value2: 55.78, gasFee: 7.0 },
  { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690249463000', usdAmount1: 130.352238750409, usdAmount2: null, value1: 130.352238750409, value2: null, gasFee: 15.0 },
  { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690245983000', usdAmount1: 60.5, usdAmount2: null, value1: 60.5, value2: null, gasFee: 50.0 },
  { action: 'Add Liquidity', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224587000', usdAmount1: 4289.132072, usdAmount2: 520.0, value1: 4289.132072, value2: 340.05, gasFee: 3.0 },
  { action: 'Swap', asset1: 'USDC', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690224503000', usdAmount1: 4289.132072, usdAmount2: 1.012, value1: 4289.132072, value2: 0.002, gasFee: 2.5 },
  { action: 'Sent', asset1: 'ETH', asset2: null, from: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', to: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', dex: null, dexLogo: null, blockTimestamp: '1690224503000', usdAmount1: 4309.079153227032, usdAmount2: null, value1: 4309.079153227032, value2: null, gasFee: 4.0 },
  { action: 'Received', asset1: 'ETH', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690224419000', usdAmount1: 5568.99, usdAmount2: null, value1: 5568.99, value2: null, gasFee: 3.5 },
  { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690224239000', usdAmount1: 7761.364259632757, usdAmount2: 340.0, value1: 7761.364259632757, value2: 333.65, gasFee: 5.0 },
  { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690223243000', usdAmount1: 200.942046075983, usdAmount2: 4.096, value1: 200.942046075983, value2: 67.88, gasFee: 10.0 },
  { action: 'Received', asset1: 'UNIBOT', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690205927000', usdAmount1: 15617.984651228762, usdAmount2: null, value1: 15617.984651228762, value2: null, gasFee: 8.0 },
  { action: 'Sent', asset1: 'UNIBOT', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690205279000', usdAmount1: 32075.667978680623, usdAmount2: null, value1: 32075.667978680623, value2: null, gasFee: 12.0 },
  { action: 'Add Liquidity', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690205099000', usdAmount1: 454.085, usdAmount2: 0.5, value1: 454.085, value2: 66.7, gasFee: 20.0 },
  { action: 'Swap', asset1: 'ETH', asset2: 'BTC', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690204727000', usdAmount1: 6600.05, usdAmount2: 0.11, value1: 6600.05, value2: 5.777, gasFee: 5.0 },
  { action: 'Sent', asset1: 'BITCOIN', asset2: null, from: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04', to: '0x81153f0889ab398c4acb42cb58b565a5392bba95', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 2310.0175, usdAmount2: null, value1: 2310.0175, value2: null, gasFee: 3.0 },
  { action: 'Received', asset1: 'BITCOIN', asset2: null, from: '0x81153f0889ab398c4acb42cb58b565a5392bba95', to: '0x689d2ee154633ae19d61a8570c09248dcbd0ed04', dex: null, dexLogo: null, blockTimestamp: '1690204427000', usdAmount1: 4290.0325, usdAmount2: null, value1: 4290.0325, value2: null, gasFee: 4.0 },
  { action: 'Add Liquidity', asset1: 'ETH', asset2: 'UNIBOT', from: null, to: null, dex: 'UniswapV2', dexLogo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025', blockTimestamp: '1690158812000', usdAmount1: 1048.392, usdAmount2: 120.0, value1: 1048.392, value2: 3.77, gasFee: 5.0 },
  { action: 'Swap', asset1: 'UNIBOT', asset2: 'ETH', from: null, to: null, dex: 'PancakeSwap', dexLogo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025', blockTimestamp: '1690157592000', usdAmount1: 1222.073, usdAmount2: 0.2, value1: 1222.073, value2: 5.777, gasFee: 2.5 },
];

export const lendingData = [
  {
    pool0: 'Zrx',
    pool1: 'Tusd',
    logo0: 'https://static.alchemyapi.io/images/assets/1896.png',
    logo1: 'https://static.alchemyapi.io/images/assets/2563.png',
    balance0: '1,004,247.30',
    balance1: '2,518,137.30',
    usdValue0: '7,308,281',
    usdValue1: '675,890.8',
  },
  {
    pool0: 'Fei',
    pool1: 'Link',
    logo0: 'https://static.alchemyapi.io/images/assets/8642.png',
    logo1: 'https://static.alchemyapi.io/images/assets/1975.png',
    balance0: '987,654.32',
    balance1: '4,320.30',
    usdValue0: '987,654',
    usdValue1: '165',
  },
];

export const stakeData = [
  {
    pool0: 'Gmx',
    pool1: 'esgmx',
    logo0: 'https://static.alchemyapi.io/images/assets/11857.png',
    logo1: '',
    balance0: '1,004,247.30',
    balance1: '2,518,137.30',
    usdValue: '7,308,281',
  },
  {
    pool0: 'Gmx',
    pool1: 'esgmx',
    logo0: 'https://static.alchemyapi.io/images/assets/11857.png',
    logo1: '',
    balance0: '987,654.32',
    balance1: '4,320.30',
    usdValue: '987,654',
  },
];

export const liquidityData = [
  {
    pool0: 'ETH',
    pool1: 'Wbtc',
    logo0: '/Eth.svg',
    logo1: 'https://static.alchemyapi.io/images/assets/3717.png',
    balance0: '1,004,247.30',
    balance1: '2,518,137.30',
    usdValue: '7,308,281',
  },
  {
    pool0: 'Dai',
    pool1: 'USDT',
    logo0: 'https://static.alchemyapi.io/images/assets/4943.png',
    logo1: 'https://static.alchemyapi.io/images/assets/825.png',
    balance0: '987,654.32',
    balance1: '4,320.30',
    usdValue: '987,654',
  },
];

export const yieldData = [
  {
    logo0: 'https://static.alchemyapi.io/images/assets/3408.png',
    logo1: 'https://static.alchemyapi.io/images/assets/2396.png',
    pool0: 'USDC',
    pool1: 'WETH',
    balance0: '1,004,247.30',
    balance1: '2,518,137.30',
    rewards: '0',
    usdValue: '7,308,281',
  },
  {
    logo0: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wrapped-bitcoin-wbtc-icon.svg',
    logo1: 'https://s2.coinmarketcap.com/static/img/coins/200x200/6758.png',
    pool0: 'WBTC',
    pool1: 'SUSHI',
    balance0: '500,000.00',
    balance1: '350,720.00',
    rewards: '120',
    usdValue: '500,000',
  },
];

export const alerts = [
  {
    date: "5mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer To",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Completed",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
  {
    date: "8mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer To",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Pending",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
  {
    date: "13mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer From",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Completed",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
  {
    date: "5mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer To",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Completed",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
  {
    date: "8mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer To",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Pending",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
  {
    date: "13mins ago",
    icon: "/binance_icon.svg",
    token: "Binance",
    condition: "Transfer From",
    conditionIcon: "",
    entityTitle: "Token god",
    entityAddress: "0x34...A4g",
    status: "Completed",
    type: "Wallet Tracking",
    toEmail: "johndoe@gmail.com",
    toTelegram: "johndoe",
  },
]
export const exampleC: string[] = [];

export const EntityNames = ["CURVE.FI FOUNDER", "ETH.BEN", "MACHI BIG BROTHER", "PEPE COIN DEPLOYER", "PROFITABLE MEMECOIN TRADER", "JUSTIN SUN"];
export const EntityAddresses = [
  "0xd0ff26e33c5b712a47b9d360acae83a39166e338",
  "0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
  "0x020ca66c30bec2c4fe3861a94e4db4a498a35872",
  "0xe7925d190aea9279400cd9a005e33ceb9389cc2b",
  "0xae2fc483527b8ef99eb5d9b44875f005ba1fae13",
  "0x3ddfa8ec3052539b6c9549f12cea2c295cff5296",
];
export const scamAnalysis = [
  {
    title: "Token Info",
    checks: [
      "Token Name",
      "Token Supply",
    ],
    desc: [
      "Token Name",
      "Token Supply",
    ],
    results: [
      "Wrapped Ether",
      "3,373,385.459",
    ],

  },
  {
    title: "Token Creator Information",
    checks: [
      "Contract Owner",
      "Contract Address",
      "Creator’s Balance",
      "Tokens held by creator",
      "Can the token owner manipulate the balance?",
      "Is there a hidden contract owner?",

    ],
    desc: [
      "Balance of the Creator’s Wallet",
      "Token's contract Address",
      "Total amount of tokens held by creator",
      "This shows whether the token's owner can change the balance of holders without their consent.",
      "This indicates if there is a hidden contract owner.",
      "A honeypot is a situation where scammers make it impossible for you to sell the token you have bought. any token that fails this test is an outright scam."
    ],
    results: [
      "0xc02aaa...cc2",
      "0xc02aaa...cc2",
      "0% of Total supply ",
      "No",
      "No",
      "Yes"
    ],
    status: [
      "",
      "",
      "Good",
      "Bad",
      "Good",
      "Bad",
    ]
  }
  ,
  {
    title: "Swap Analysis",
    checks: [
      "Honeypot Test",
      "Buy Tax",
      "Sell Tax",
      "Can slippage be manipulated?",
    ],

    desc: [
      "A honeypot is a situation where scammers make it impossible for you to sell the token you have bought. any token that fails this test is an outright scam.",
      "This describes the additional fee you pay while buying the token. Tax rate over 10% are viewed as bad practice.",
      "This describes the additional fee you pay while selling the token. Tax rate over 10% are viewed as bad practice.",
      "This shows whether the token's owner can change the balance of holders without their consent.",
    ],
    results: [
      "Passed",
      "5%",
      "0%",
      "No",
    ],
    status: [
      "Good",
      "Bad",
      "Good",
      "Bad",
    ]
  },
  {
    title: "Contract Analysis",
    checks: [
      "Is this token’s contract verified? ",
      "Can the creator mint new tokens?",
      "Does the contract have a proxy?",
    ],

    desc: [
      "Any contract found to be unverified is considered an outright scam.",
      "Reveals whether this contract has the ability to mint unlimited new tokens. Bad actors can easily take advantage of this feature if enabled.",
      "Reveals whether the token has a proxy. In the hands of a bad actor, this feature be exploited.",
    ],
    results: [
      "Yes",
      "No",
      "No",
    ],
    status: [
      "Bad",
      "Good",
      "Bad",
    ]
  },

]

export const dexDatabase = [
  {
    checks: [
      "Is this Token's Contract Verified?",
      "Honeypot Test",
      "Can Token Creator Mint New Tokens?",
      "Is This a Honeypot related address?",
      "Can Token owner tamper with balance?",
      "Is there a hidden contract with owner?"
    ],
    results: [
      "Yes",
      "Passed",
      "No",
      "No", 
      "0%",
      "No",
    ],
  }
]

export const dexScam = [
  {
    checks: "Is this Token's Contract Verified?",
    results: "Yes",
  },
  {
    checks: "Honeypot Test",
    results: "Passed",
  },
  {
    checks: "Can Token Creator Mint New Tokens?",
    results: "No",
  },
  {
    checks: "Is This a Honeypot related address?",
    results: "No",
  },
  {
    checks: "Can Token owner tamper with balance?",
    results: "0%",
  },
  {
    checks: "Is there a hidden contract with owner?",
    results: "No",
  },
];

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];


export const scamDatabase = [
  {
    title: "Scam Database Assessment",
    checks: [
      "Is this a Honeypot related Address",
      "This contract address is involved in:",
      "Phishing Activities?",
      "Darkweb Transactions?",
      "Stolen Funds?",
      "Data Source:"
    ],

    desc: [
      "Shows if the smart contract address is linked to any known scams.",
      "",
      "Shows if the smart contract address is linked to any known scams.",
      "Shows if the token address is linked with darkweb transactions.",

      "Percentage of total liquidity locked"
    ],
    results: [
      "Passed",
      "",
      "5%",
      "No",
      "No",
    ],
    status: [
      "Bad",
      "",
      "Bad",
      "Good",
      "Bad",
    ]
  }
]

export const tokenHolders = [
  {
    title: "Top 10 Token Holders Information ",
    titleMobile: "Top 10 Token Holders Info.",
    checks: [
      "Number of token Holders",
      "Top 10 Holders’ Ratio",
    ],
  }
];

export const topRelated = [
  {
    time: "2 hours ago",
    action: "sent",
    from: "Unknown Address",
    to: "ETH.BEN",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "recieved",
    from: "ETH.BEN",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "sent",
    from: "Unknown Address",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "recieved",
    from: "ETH.BEN",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "sent",
    from: "Unknown Address",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "recieved",
    from: "Unknown Address",
    to: "ETH.BEN",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "sent",
    from: "ETH.BEN",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "recieved",
    from: "Unknown Address",
    to: "ETH.BEN",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "sent",
    from: "Unknown Address",
    to: "Unknown Address",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
  {
    time: "2 hours ago",
    action: "recieved",
    from: "Unknown Address",
    to: "ETH.BEN",
    address: "0x045h23df67932r0000",
    amount: "8,698.96",
    token: "WETH",
    value: "0.03"
  },
];

export const referrals = [
  {
    icon: false,
    title: "What is Metadapp points ?",
    content1: "The Metadapp point system is a rewards program that allows users to earn points for participating in various activities on the platform. These points can then be redeemed for rewards or used to access exclusive features on the platform.",
  },
  {
    icon: false,
    title: "What do i get for accumulating Metadapp point ?",
    content1: "You can redeem your points for various rewards which may include cash, free access to Metadapp premium, discounts on products or services, token airdrops, exclusive access to our partners perks etc.",
    content2: "The exact rewards available may vary over time, but the idea is that by accumulating points, you are able to earn valuable benefits for your participation on the platform.",
  },
  {
    icon: false,
    title: "How can i earn Metadapp points ?",
    content1: "At the moment, you can  earn Metadapp points in two ways: ",
    content2: "Through a referral program and through creating and sharing high quality content about metadapp",
  },
  {
    icon: false,
    title: "Referral Program: Earn 5points per referral",
    content1: "You can earn points by inviting others to the platform through your referral link. For every person you invite who successfully signs in to the Metadapp platform using their wallet, you earn 5 Metadapp points as a reward for making the referral.  (There is no limit to the number of people you can refer) however we will be looking closely to ensure that the process is not abused. ",
  },
  {
    icon: true,
    title: "Social media content to earn up to 500 points per content shared.",
    content1: "You can also earn points by creating and sharing high-quality content on platforms such as YouTube, Reddit, LinkedIn, your personal blog or by writing high impact twitter threads about Metadapp.",
    content2: "Here’s how it works:",
    content3: '* Create and post quality content: Create a video, article, or thread that provides an honest and informative overview of the Metadapp platform. Make sure to emphasize the features and benefits of the platform, but avoid any type of spammy  or "shilling" content',
    content4: "*  Include your unique referral link in the video's description, article or thread, so that anyone who's interested in signing up for Metadapp can easily do so.",
    content5: "* Submit link of your content to us: Fill this google form to submit your content for us to review.",
  },
  {
    icon: false,
    title: "What is the difference between 5 points referral rewards and 500 points content rewards ?",
    content1: "You can earn points by inviting others to the platform through your referral link. For every person you invite who successfully signs in to the Metadapp platform using their wallet, you earn 5 Metadapp points as a reward for making the referral.  (There is no limit to the number of people you can refer) however we will be looking closely to ensure that the process is not abused.",
  },
  {
    icon: false,
    title: "How will i redeem my earned points ?",
    content1: "You can earn points by inviting others to the platform through your referral link. For every person you invite who successfully signs in to the Metadapp platform using their wallet, you earn 5 Metadapp points as a reward for making the referral.  (There is no limit to the number of people you can refer) however we will be looking closely to ensure that the process is not abused.",
  },
  {
    icon: false,
    title: "Contact us ",
    content1: "If you have any questions about the referral point rewards program or creating content for Metadapp, feel free to reach out to us at partnerships@metadapp.com.",
    content2: "We're always happy to help!",
    content3: "Note:",
    content4: "The exact amount of points earned for Content reward will depend on the quality of the content and the audience reach. Factors such as the level of detail provided, the level of research or original thinking evident, the overall presentation and engagement of the content will be taken into consideration when determining the final point reward.",
    content5: "You can redeem their points for various rewards that are being offered on the platform. Point's rewards could vary time to time.",
    content6: "These rewards are intended to help users grow the Metadapp community and promote the platform, and are separate from other rewards or incentives offered on this platform.",
  },
];

export const marketMakerTexts = [
  {
      title: "Boost Liquidity and Trading Volume",
      body: "Our market maker platform ensures continuous liquidity by acting as a wholesaler, providing buyers and sellers to facilitate smooth trading. It prevents price drops during low demand and increases trading volume by driving up prices during high demand.",
  },
  {
      title: "Customization and Control",
      body: "Customize your market making strategies with our platform. Define parameters such as time intervals, price ranges, and trading volumes to align with your specific requirements and adapt to changing market dynamics. Gain full control over your market making approach and optimize trading for your token.",
  },
  {
      title: "Efficient Order Execution",
      body: "Experience swift and seamless transactions with our market maker platform. Our automated trading software executes orders efficiently, capturing market opportunities without delay. This optimizes trading performance, reduces the risk of missed trades, and enhances profitability.",
  },
  {
      title: "Dynamic Price Stabilization",
      body: "Maintain a stable price for your token with our price stabilization mechanism. Our platform dynamically adjusts order prices based on market conditions, minimizing price fluctuations and creating an attractive trading environment. This promotes confidence, encourages participation, and leads to increased trading volume.",
  },
];

export const subscriptions = [
  {
      text: "Autogenerate 20 Unique wallets"
  },
  {
      text: "Customize Wallet Settings"
  },
  {
      text: "Customize Trading settings"
  },
  {
      text: "Randomize Trading intervals"
  },
  {
      text: "Set up market-making strategies for one token"
  },
  {
      text: "Real-time analytics & performance metrics"
  },
];

export const faqs = [
  {
      title: "What Platforms are supported?",
      body: "We provide support for tokens with liquidity on Uniswap V2 & V3"
  },
  {
      title: "Are there any hidden fees?",
      body: "There are no hidden fees on our end, all you have to pay for is the Subscription."
  },
  {
      title: "In the Trade Volume, can i perform on my token Unlimited?",
      body: "Absolutely, you can automate as many trades as possible to achieve the amount of volume you need."
  },
  {
      title: "Who pays for gas fees?",
      body: "Gas fees will be paid by you, and will be deducted from your master wallet balance."
  },
  {
      title: "Will you have Web versions of the Market making bot?",
      body: "Yes, we are currently working on Web version that will be released soon with more improved functionality at no extra cost."
  },
];

export const superuserfaqs = [
  {
    id: 1,
    title: "Benefits of becoming a Superuser?",
    content1: "Superusers will earn points for their feedback and contribution to the platform. Points can be redeemed for airdrops and even cash rewards in some cases.",
    content2: "As a superuser, you will be the first to receive rewards from our platform and partner protocols in the future.",
    content3: "Superusers will have access to 100% of the platform's premium features.",
  },
  {
    id: 2,
    title: "Superuser Activities",
    content1: "Use the feedback form to report bugs, suggest feature improvements or make suggestions. If your feedback is accepted and implemented, you will be rewarded.",
    content2: "Join our Discord AMAs: Join our monthly Ask-Me-Anything sessions on Discord and get answers to your questions from the Metadapp team. AMAs dates and links will be shared in the Discord channel.",
  },
  {
    id: 3,
    title: "Join Metadapp Superuser community",
    content1: "Must be passionate about the potential of Web3 and blockchain technology.",
    content2: "Must have a clear understanding of how DEX, NFTs, and DeFi dApps function.",
    content3: "A regular dex traders and interested in buying and selling tokens.",
    content4: "Must be passionate about NFTs and have experience buying, selling, and collecting them..",
  },
];

export const metabotsFaqs = [
  {
      title: "What is a Market making bot?",
      body: "A market making bot is a software program that automatically places buy and sell orders on Decentralized exchanges. The goal of a market making bot is to provide liquidity and volume for a token"
  },
  {
    title: "What Platforms are supported?",
    body: "We provide support for tokens with liquidity on Uniswap V2 & V3"
  },
  {
      title: "Are there any hidden fees?",
      body: "There are no hidden fees on our end, all you have to pay for is the Subscription."
  },
  {
      title: "In the Trade Volume, can i perform on my token Unlimited?",
      body: "Absolutely, you can automate as many trades as possible to achieve the amount of volume you need."
  },
  {
      title: "Who pays for gas fees?",
      body: "Gas fees will be paid by you, and will be deducted from your master wallet balance."
  },
  {
      title: "Will you have Web versions of the Market making bot?",
      body: "Yes, we are currently working on Web version that will be released soon with more improved functionality at no extra cost."
  },
];

export const freeAutomation = [
  {
    status: true,
    text: "Metabots (Telegram bot)"
  },
  {
    status: true,
    text: "Metabots Auto Trade Terminal (Web)"
  },
  {
    status: true,
    text: "Up to 3 Trading Wallets"
  },
  {
    status: true,
    text: "1 copy trade wallet at a time"
  },
  {
    status: true,
    text: "Up to 3 Concurrent trades open"
  },
  {
    status: false,
    text: "Up to 7 Trading Wallets"
  },
  {
    status: false,
    text: "Up to 5 copy trade wallets at a time"
  },
  {
    status: false,
    text: "Up to 10 Concurrent trades open"
  },
];

export const freeAnalytics = [
  {
    status: true,
    text: "Tx Flow Dashboard"
  },
  {
    status: true,
    text: "Tracking for up to 3 Smart Wallets"
  },
  {
    status: true,
    text: "Smart Alerts Access"
  },
  {
    status: true,
    text: "Smart Money Mode"
  },
  {
    status: false,
    text: "Alpha Hunt Access"
  },
  {
    status: true,
    text: "Telegram Alerts"
  },
  {
    status: true,
    text: "Portfolio Management Tools"
  },
  {
    status: true,
    text: "Due Diligence Tools"
  },
  {
    status: true,
    text: "Paid Subscription Tier: Unlimited Metapoints"
  },
  {
    status: false,
    text: "100 Email Alerts"
  },
  {
    status: false,
    text: "Portfolio Management Tools"
  },
  {
    status: false,
    text: "Due Diligence Tools"
  },
];

export const plusAutomation = [
  {
    status: true,
    text: "Metabots (Telegram bot)"
  },
  {
    status: true,
    text: "Metabots Auto Trade Terminal (Web)"
  },
  {
    status: true,
    text: "Up to 7 Trading Wallets"
  },
  {
    status: true,
    text: "Up to 5 copy trade wallets at a time"
  },
  {
    status: true,
    text: "Up to 10 Concurrent trades open"
  },
];

export const plusAnalytics = [
  {
    status: true,
    text: "Tx Flow Dashboard"
  },
  {
    status: true,
    text: "Tracking for up to 10 Smart Wallets"
  },
  {
    status: true,
    text: "Smart Alerts Access"
  },
  {
    status: true,
    text: "Smart Money Mode"
  },
  {
    status: true,
    text: "Alpha Hunt Access"
  },
  {
    status: true,
    text: "Unlimited Telegram Alerts"
  },
  {
    status: true,
    text: "Due Diligence Tools"
  },
  {
    status: true,
    text: "Paid Subscription Tier: 1000 Metapoints"
  },
  {
    status: true,
    text: "100 Email Alerts"
  },
];

export const proAutomation = [
  {
    status: true,
    text: "Metabots (Telegram bot)"
  },
  {
    status: true,
    text: "Metabots Auto Trade Terminal (Web)"
  },
  {
    status: true,
    text: "Up to 7 Trading Wallets"
  },
  {
    status: true,
    text: "Up to 10 Concurrent trades open"
  },
];

export const proAnalytics = [
  {
    status: true,
    text: "Tx Flow Dashboard"
  },
  {
    status: true,
    text: "Tracking for up to 10 Smart Wallets"
  },
  {
    status: true,
    text: "Smart Alerts Access"
  },
  {
    status: true,
    text: "Smart Money Mode"
  },
  {
    status: true,
    text: "Alpha Hunt Access"
  },
  {
    status: true,
    text: "Unlimited Telegram Alerts"
  },
  {
    status: true,
    text: "Portfolio Management Tools"
  },
  {
    status: true,
    text: "Due Diligence Tools"
  },
  {
    status: true,
    text: "Paid Subscription Tier: 2000 Metapoints"
  },
  {
    status: true,
    text: "100 Email Alerts"
  },
];