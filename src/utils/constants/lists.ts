
export const OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json'
export const MAIN_LIST = "https://raw.githubusercontent.com/Rxbbn/fireswapv2/main/src/utils/constants/tokenList/fireswap-default.tokenlist.json"
export const DEFAULT_LIST ="https://raw.githubusercontent.com/Rxbbn/fireswapv2/main/src/utils/constants/tokenList/fireswap-default.tokenlist.json"
export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_LIST,
 
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [DEFAULT_LIST]
