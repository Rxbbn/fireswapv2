// import ethereumLogoUrl from 'assets/images/ethereum-logo.png'

export enum SupportedChainId {
  MAINNET = 1,
  PHOENIX = 13381,
  PHOENIXTEST = 13382,

}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.PHOENIX,
  SupportedChainId.PHOENIXTEST,
];

export const L1_CHAIN_IDS = [
  // SupportedChainId.MAINNET,
  SupportedChainId.PHOENIX,
  SupportedChainId.PHOENIXTEST,
] as const;

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number];

export interface L1ChainInfo {
  readonly blockWaitMsBeforeWarning?: number;
  readonly docs: string;
  readonly explorer: string;
  readonly infoLink: string;
  readonly label: string;
  readonly logoUrl?: string;
  readonly rpcUrls?: string[];
  readonly nativeCurrency: {
    name: string; // 'Goerli ETH',
    symbol: string; // 'gorETH',
    decimals: number; //18,
  };
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string;
  readonly logoUrl: string;
  readonly statusPage?: string;
}

export type ChainInfo = { readonly [chainId: number]: L1ChainInfo } & {
  readonly [chainId in SupportedL1ChainId]: L1ChainInfo;
};

export const CHAIN_INFO: ChainInfo = {

  [SupportedChainId.PHOENIX]: {
    docs: "",
    explorer: "https://phoenixplorer.com",
    infoLink: "https://cryptophoenix.org",
    label: "Phoenix",
    nativeCurrency: { name: "Phoenix", symbol: "PHX", decimals: 18 },
  },
  [SupportedChainId.PHOENIXTEST]: {
    docs: "",
    explorer: "",
    infoLink: "",
    label: "Phoenix Testnet",
    nativeCurrency: { name: "Test Phoenix", symbol: "tPHX", decimals: 18 },
  },
};
