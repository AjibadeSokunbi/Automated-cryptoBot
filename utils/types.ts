export interface UserDecodedTransactionsQuery {
  userDecodedTransactions: {
    transfers: Transfer[];
    transfersTotal: number;
  };
}
export interface GetLatestAndEarliestDecodedTransfersByLabelQuery {
  getLatestAndEarliestDecodedTransfersByLabel: {
    latestTransfers: Transfer[];
  };
}

export interface RelatedEntity {
  addr: string;
  receivedCount: number;
  receivedValue: number;
  sentCount: number;
  sentValue: number;
}

export interface BillingData {
  _id: string;
  user: string;
  amount: string;
  billingType: string;
  bilingTier: string;
  validUntil: string; // Consider using Date type if you can parse it.
  txnHash: string;
  createdAt: string; // Consider using Date type if you can parse it.
  updatedAt: string; // Consider using Date type if you can parse it.
  __v: number;
}

export interface User {
  _id: string;
  email: string;
  referred: any[]; // You can specify the actual type for "referred" if it's not always an empty array.
  referralId: string;
  wallet: string[];
  subscriptions: any[]; // You can specify the actual type for "subscriptions" if needed.
  tier: "FREE" | "PAID";
  trades: any[]; // You can specify the actual type for "trades" if needed.
  createdAt: string;
  updatedAt: string;
  __v: number;
  settings: {
    _id: string;
    user: string;
    autogas: boolean;
    scamScore: number;
    slippage: number;
    protocolIdentifier: string;
    isPrivate: boolean;
    shouldSimulate: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  token?: string;
}

export interface UserBotData {
  data: User;
}
export interface CustomDefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    authToken: string | null;
    wallets?: string[];
  };
}

export interface ServerDefaultSession {
  email?: string | null;
  wallets?: string[];
  botdata: UserBotData;
}

export interface ClientDefaultSession {
  user?: { email?: string };
  botUser: UserBotData;
  expires?: string;
  wallets?: string[];
  balance: string
}

export interface feeFetch {

  feeUsd: number
 feeEth: string;
}
export interface ExchangeResult {
  name: string;
  pair: string;
  address: string;
  token0: string;
  token1: string;
  pairAddress: string;
  volume: number;
  liquidity: number;
  trades: number;
  price: number;
  symbol: string;
  exchange: string;
  chain: string;
  baseName: string;
  quoteSymbol: string;
}

export interface ExchangeResponse {
  results: ExchangeResult[];
}


export interface BalanceInfo {
  decimals: string;
  token_address: string;
  name: string;
}

export interface UserBalanceInfoResponse {
  userBalanceInfo: {
    balances: BalanceInfo[];
    tokenTotal: number;
  };
}

export interface SecurityCheck {
  title?: string;
  checks?: string[];
  desc?: string[];
  results?: (string | number | React.ReactNode)[];
  status?: (boolean | null)[];
}

export type SecurityAnalysis = SecurityCheck[];

export interface GetAddrTxnFlowInfoResponse {
  getAddrTxnFlowInfo: {
    relatedEntities: RelatedEntity[];
  };
}

export interface TopResults {
  [label: string]: RelatedEntityLabel[];
}

export interface UserAlert {
  watchedAddrToken: string;
  watchedAddrLabel: string;
  watchedAddrAmount: number;
  watchedAddrAction: string;
  watchedAddr: string;
  executed: boolean;
  dateExecuted: string;
  dateCreated: string;
  _id: string;
  email: string;
  telegramId: string;
}

export interface TradeData {
  time: number;
  type: "buy" | "sell";
  priceUSD: number;
  price: number;
  tokenQuantity: number;
  total: number;
  pairId: string;
  address: string;
  txnHash: string;
  amount0: number;
  amount1: number;
  amountUSD: number;
  liquidity: null | any; // You can replace 'any' with a more specific type if needed
}
export interface WalletDatas {
  total_usd: number;
  address: string;
  total_tx: string;
}

export interface WalletTXNS {
  data : WalletDatas[];
  
}

export interface TokenPairDetails {
  baseAddress: string;
  baseSymbol: string;
  baseSymbolName: string;
  change: number;
  dexName: string;
  icon: string | null;
  isUp: boolean;
  name: string;
  oneEthValue: number;
  pairId: string;
  poolCreated: number;
  pooledToken0: number;
  pooledToken1: number;
  priceHigh: number;
  priceLow: number;
  priceUsd: number;
  quoteAddress: string;
  quotePrice: number;
  quoteSymbol: string;
  token0Address: string;
  token0Name: string;
  token1Address: string;
  token1Name: string;
  totalLiquidity: number;
  totalSupply: number;
  txCount: number;
  _24HourVolume: number;
  _24hPriceChange: number;
  _24h_buys: number;
  _24h_sells: number;
  _24h_txn_count: number;
  _24h_volume: number;
}

export interface NewTokenType {
  pair: string;
  timestamp: number;
  price: number;
  name: string;
  quote_symbol: string;
  base_symbol: string;
  base_id: string;
  score?: number;
}

export interface PoolActivityData {
  pair: string;
  amount_0: number;
  amount_1: number;
  block: number;
  timestamp: number; // Consider using Date type if you can parse it.
  tx_hash: string;
  type: string;
}

export interface PoolActivityDataList {
  data: PoolActivityData[];
}

export interface Dictionary<T> {
  [key: string]: T;
}

export interface TokenSecurity {
  cannot_sell_all: string;
  is_honeypot: string;
  is_open_source: string;
  hidden_owner: string;
  owner_change_balance: string;
  creator_balance: number;
  total_supply: number;
  buy_tax: number;
  sell_tax: number;
  slippage_modifiable: string;
  is_proxy: string;
  is_mintable: string;
  lp_holders?: LPHolder[];
  holder_count?: string
}

export interface AddressSecurity {
  honeypot_related_address: string;
  phishing_activities: string;
  darkweb_transactions: string;
  stealing_attack: string;
}

export interface LPHolder {
  is_locked: number;
  balance: number;
  percent: number;
}

export interface TokenSecurityResult {}

export interface TokenPairDetailsN {
  baseAddress: string;
  baseSymbol: string;
  baseSymbolName: string;
  change: number;
  dexName: string;
  icon: string | null;
  isUp: boolean;
  name: string;
  time: number;
  addressPair: string;
  oneEthValue: number;
  pairId: string;
  poolCreated: number;
  pooledToken0: number;
  pooledToken1: number;
  priceHigh: number;
  priceLow: number;
  priceUsd: number;
  quoteAddress: string;
  quotePrice: number;
  quoteSymbol: string;
  token0Address: string;
  token0Name: string;
  token1Address: string;
  token1Name: string;
  totalLiquidity: number;
  totalSupply: number;
  txCount: number;
  _24HourVolume: number;
  _24hPriceChange: number;
  _24h_buys: number;
  _24h_sells: number;
  _24h_txn_count: number;
  _24h_volume: number;
}
export type ProjectDetails = {
  id: string;
  count?: number;
  tokenPairDetails: TokenPairDetails;
};

export type FavoritesProjectsProps = {
  projectsDetails: ProjectDetails[];
};

export type State = {
  favoritedProjects: FavoritesProjectsProps;
};

export type ActionsProps = {
  addToFavorite: (
    projectId: string,
    tokenPairDetails: TokenPairDetails
  ) => void;
  removeFromFavorite: (projectId: string) => void;
};

export type UseStoreProps = State & ActionsProps;

// export type StoreProps = {
//     states: {
//         favoritedProjects: FavoritesProjectsProps;
//     },
//     actions: ActionsProps;
// }

export type FavoriteStarProps = {
  id: string;
  tokenPairDetails: TokenPairDetails;
};

export type FavoriteStarProps2 = {
  id: string;
  tokenPairDetails?: TokenPairDetails;
};
export interface TokenPairData {
  name: string;
  pair: string;
  address: string;
  token0: string;
  token1: string;
  pairAddress: string;
  volume: number;
  liquidity: number;
  trades: number;
  price: number;
  symbol: string;
  exchange: string;
  chain: string;
  baseName: string;
  quoteSymbol: string;
}

export type TokenPairDataArray = TokenPairData[];
export interface UserData {
  mailCount: number;
  referred: boolean;
  dateCreated: string;
  referallPoints: number;
}

export interface GetUserResponse {
  getUser: UserData;
}

export interface UserAlertsResponse {
  userAlerts: UserAlert[];
}

export interface RelatedEntityLabel {
  addr: string;
  receivedCount: number;
  receivedValue: number;
  sentCount: number;
  sentValue: number;
}

export interface GetRelatedEntitiesInput {
  label: string;
  pageNumber: number;
  pageLimit: number;
}

export interface GetRelatedEntitiesResponse {
  getRelatedEntities: {
    relatedEntities: RelatedEntityLabel[];
  };
}

export interface UserBalanceInfoQuery {
  userBalanceInfo: {
    tokenTotalNetworth: number;
  };
}

export interface Transaction {
  to: string;
  from: string;
  action: string;
  asset: string;
  value: string;
  blockTimestamp: string; // You can specify the data type for blockTimestamp (e.g., string or Date)
  chain: string;
  hash: string;
}

export interface UserAllTransactionsData {
  userAllTransactions: {
    transfers: Transaction[];
  };
}
export interface TokenBalance {
  balance: string;
  decimals: string;
  logo: string;
  name: string;
  symbol: string;
  usdPrice: number;
  validated: boolean;
  token_address: string;
  Networth: number;
  chain: string;
}

export interface UserBalanceInfoData {
  userBalanceInfo: {
    tokenTotal: number;
    tokenTotalNetworth: number;
    balances: TokenBalance[];
  };
}

export interface UserBotBalance {
  userBalanceInfo: {
    tokenTotalNetworth: number;
  };
}

export interface LabelResults {
  [label: string]: Transfer[];
}

export interface Transfer {
  event: string;
  from: string;
  to: string;
  gas: string;
  hash: string;
  timestamp: string;
  tokensIn: Token[];
  tokensOut: Token[];
}

interface Token {
  asset: string;
  contractAddr: string;
  decimals: number;
  from: string;
  logIndex: number;
  logo: string;
  to: string;
  usdAmount: number;
  value: number; // Corrected to number type
}


export interface UserTrade {
  _id: string;
  user: string;
  token: string;
  action: 'buy' | 'sell';
  amount: string;
  usdPrice: number;
  chain: string;
  wallet: string;
  status: 'CONFIRMED' | 'PENDING' | 'CONFRIMED'; 
  txnHash: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  executed: boolean
}
