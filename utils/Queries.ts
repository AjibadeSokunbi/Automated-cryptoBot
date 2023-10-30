import { gql } from "@apollo/client";


export const GetLatestAndEarliestDecodedTransfersByLabel = gql`
query GetLatestAndEarliestDecodedTransfersByLabel($label: String) {
  getLatestAndEarliestDecodedTransfersByLabel(label: $label) {
    latestTransfers {
      event
      from
      hash
      timestamp
      to
      gas
      tokensIn {
        asset
        contractAddr
        decimals
        from
        to
        logo
        logIndex
        usdAmount
        value
      }
      tokensOut {
        asset
        contractAddr
        decimals
        logIndex
        from
        logo
        usdAmount
        to
        value
      }
    }
  }
}`

export const TOP_RELATED_ADDRESS = `
query RelatedEntities($input: UserInput) {
  getAddrTxnFlowInfo(input: $input) {
    relatedEntities {
      addr
      receivedCount
      receivedValue
      sentCount
      sentValue
    }
  }
}
`
export const TOP_RELATED_LABEL = gql`query GetRelatedEntities($label: String, $pageNumber: Int, $pageLimit: Int) {
  getRelatedEntities(label: $label, pageNumber: $pageNumber, pageLimit: $pageLimit) {
    relatedEntities {
      addr
      receivedCount
      receivedValue
      sentCount
      sentValue
    }
  }
}`

export const UserDecodedTransactions2 = gql`
query UserDecodedTransactions($input: UserInput) {
    userDecodedTransactions(input: $input) {
      transfers {
        event
        from
        to
        gas
        hash
        timestamp
        tokensIn {
          asset
          contractAddr
          decimals
          from
          logIndex
          logo
          to
          usdAmount
          value
        }
        tokensOut {
          asset
          contractAddr
          decimals
          from
          logIndex
          logo
          to
          usdAmount
          value
        }
      }
      transfersTotal
    }
  }
  
`
export const UserDecodedTransactions = `
query UserDecodedTransactions($input: UserInput) {
    userDecodedTransactions(input: $input) {
      transfers {
        event
        from
        to
        gas
        hash
        timestamp
        tokensIn {
          asset
          contractAddr
          decimals
          from
          logIndex
          logo
          to
          usdAmount
          value
        }
        tokensOut {
          asset
          contractAddr
          decimals
          from
          logIndex
          logo
          to
          usdAmount
          value
        }
      }
      transfersTotal
    }
  }
  
`
export const USER_TOKEN_INFO = gql`
  query UserBalanceInfo($input: UserInput, $pageNumber: Int, $pageLimit: Int) {
    userBalanceInfo(
      input: $input
      pageNumber: $pageNumber
      pageLimit: $pageLimit
    ) {
      tokenTotal
      tokenTotalNetworth
      balances {
        balance
        decimals
        logo
        name
        symbol
        usdPrice
        validated
        token_address
        Networth
        chain
      }
    }
  }
`;

export const USER_Balance = gql`
query UserBalanceInfo($input: UserInput) {
    userBalanceInfo(input: $input) {
      tokenTotalNetworth
    }
  }
`;

export const USER_Balance2 = `
query UserBalanceInfo($input: UserInput) {
    userBalanceInfo(input: $input) {
      tokenTotalNetworth
    }
  }
`;

export const GET_USER_DATA = gql`
  query GetUser($input: UserInput) {
    getUser(input: $input) {
      dateCreated
      isSuperUser
      mailCount
      referallPoints
      referred
      totalPoints
      userAddr
    }
  }
`;


export const USER_ALERTS_QUERY = gql`
  query Query($input: AlertInput) {
    userAlerts(input: $input) {
      userAddr
      email
      type
      NFTtype
      isgreaterThan
      dateCreated
      executed
      reminderPrice
      watchedAddr
    }
  }
`;



export const SMART_ALERT_QUERY = gql`
  query SmartAlerts($input: UserInput) {
    userSmartAlerts(input: $input) {
      email
      type
      userAddr
      watchedAddr
      reminderPrice
      isgreaterThan
      dateCreated
      executed
    }
  }
`;

export const TOKEN_INFO = gql`
  query TokenInfo($input: UserInput) {
    userTokenInfo(input: $input) {
      token_address
      name
      spenders {
        spender
        allowance
        lastApprovalDate
      }
    }
  }
`;

export const HISTORY_DATA = gql`
query UserAllTransactions($input: UserInput) {
  userAllTransactions(input: $input) {
    transfers {
      to
      from
      action
      asset
      value
      blockTimestamp
      chain
      hash
    }
  }
}
`

export const REVOKE_APPROVAL_TOKEN_QUERY = `
  query Balances($input: UserInput, $pageNumber: Int, $pageLimit: Int) {
    userBalanceInfo(
      input: $input
      pageNumber: $pageNumber
      pageLimit: $pageLimit
    ) {
      balances {
        decimals
        token_address
        name
      }
      tokenTotal
    }
  }
`;

export const TOKEN_SPENDER_INFO = `
  query UserTokenSpenderInfo($input: tokenSpenderInput) {
    userTokenSpenderInfo(input: $input) {
      allowance
      lastApprovalDate
      spender
    }
  }
`;

export const USER_NFT_PORTFOLIO = gql`
  query GetUserNFTPortfolio($input: UserInput, $index: Int, $limit: Int) {
    getUserNFTPortfolio(input: $input, index: $index, limit: $limit) {
      collectionInfo {
        floorPrice
        itemCount
        contractAddr
        name
      }
      txnLogs {
        contractAddress
        fromAddress
        toAddress
        type
        token {
          tokenId
        }
        contract {
          name
        }
        estimatedConfirmedAt
        gasPrice
        gas
      }
      NftBalance {
        token_address
        name
        amount
        token_id
        contract_type
        owner_of
        metadata
        symbol
      }
      totalCost
      totalMints
      PNL
      ethPrice
    }
  }
`;

export const USER_TOKEN_PORTFOLIO = gql`
  query TokenInfo($input: UserInput) {
    userTokenInfo(input: $input) {
      logo
      balance
      decimals
      thumbnail
      symbol
      token_address
      name
      usdPrice
    }
  }
`;


export const USER_TOKEN_PORTFOLIO_HISTORY = gql`
  query NativeTxns($input: UserInput) {
    userAllTransactions(input: $input) {
      nativeTxns {
        block_hash
        block_number
        block_timestamp
        from_address
        hash
        to_address
        transaction_index
        value
      }
      tokenTxns {
        address
        block_hash
        block_number
        block_timestamp
        from_address
        to_address
        transaction_hash
        value
      }
    }
  }
`;


// MUTATIONS
export const NEW_ALERT_MUTATION = gql`
  mutation CreateAlert($input: createAlertInput) {
    newUserAlert(input: $input) {
      email
      executed
      dateCreated
      watchedAddr
      reminderPrice
      isgreaterThan
    }
  }
`;

export const DELETE_ALERT_MUTATION = gql`
mutation DeleteUserAlert($deleteUserAlertId: String!) {
  deleteUserAlert(id: $deleteUserAlertId)
}
`;

export const NEW_USER_MUTATION = gql`
  mutation NewUser($input: CreateUserInput) {
    newUser(input: $input) {
      referred
      dateCreated
      mailCount
      userAddr
    }
  }
`;

export const GET_USER_ALERTS = gql`
  query UserAlerts($input: AlertInput) {
    userAlerts(input: $input) {
      watchedAddrToken
      watchedAddrLabel
      watchedAddrAmount
      watchedAddrAction
      watchedAddr
      executed
      dateExecuted
      dateCreated
      email
      telegramId
    }
  }
`;

export const GET_USER_ALERTS2 = `
  query UserAlerts($input: AlertInput) {
    userAlerts(input: $input) {
      watchedAddrToken
      watchedAddrLabel
      watchedAddrAmount
      watchedAddrAction
      watchedAddr
      executed
      dateExecuted
      dateCreated
      email
      telegramId
    }
  }
`;
export const GET_USER_QUERY = gql`
  query User($input: UserInput) {
    getUser(input: $input) {
      mailCount
      referred
      dateCreated
      referallPoints
    }
  }
`;

export const GET_PAIR_DATA = gql`
  query GetPairData($addr: String) {
    getPairData(addr: $addr) {
      _24h_txn_count
      _24h_volume
      baseAddress
      baseSymbol
      baseSymbolName
      dexName
      icon
      isUp
      marketCap
      oneBnbValue
      pairAddress
      poolCreated
      pooledToken0
      pooledToken1
      priceUsd
      quoteAddress
      quotePrice
      quoteSymbol
      token0Name
      token1Name
      totalLiquidity
      totalSupply
    }
  }
`;
