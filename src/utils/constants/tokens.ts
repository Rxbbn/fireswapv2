import { serializeToken, Token } from '../helpers/token'
import { SerializedToken } from './types'


const PHOENIX = 13381;
const TESTNET = 13382;
// const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}
// UPDATE MAINNET TOKENS ON LAUNCH // TODO: remove this
export const mainnetTokens = {
  wphx: new Token(
    PHOENIX,
    '0xcb186051DD62914B6dFc56c257823bfDA20DbEe6',
    18,
    'WPHX',
    'Wrapped Phoenix',
    'https://www.cryptophoenix.org/',
  ),
    // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  phx: new Token(PHOENIX, '0xcb186051DD62914B6dFc56c257823bfDA20DbEe6', 18, 'PHX', 'PHX', 'https://www.cryptophoenix.org/'), //update to mainnet
  rgp: new Token(
    PHOENIX,
    '0xfa262f303aa244f9cc66f312f0755d89c3793192',
    18,
    'RGP',
    'RigelToken (RGP)',
    'http://www.rigelprotocol.com/',
  ),
  
  busd: new Token(
    PHOENIX,
    '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  axs: new Token(
    PHOENIX,
    '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
    18,
    'AXS',
    'Binance-Pegged Axie Infinity Shard',
    'https://axieinfinity.com/',
  ),
  }

export const testnetTokens = {
  wbnb: new Token(
    TESTNET,
    '0xf834cABC1954e236013D4115394DBbBF1F0a0cc4', //wphx
    18,
    'WPHX',
    'Wrapped PHX',
    'https://www.binance.com/',
  ),
  busd: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
}

const tokens = (): TokenList => {
  

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()