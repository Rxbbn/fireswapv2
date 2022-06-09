import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { NetworkConnector } from "./NetworkConnector";
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from "../constants/chains";

const NETWORK_URL = 'http://testnet.phoenixplorer.com:8545';

const RPC = {
  [SupportedChainId.PHOENIX]: `https://rpc.phoenixplorer.com`,
  [SupportedChainId.PHOENIXTEST]:
    "http://testnet.phoenixplorer.com:8545",

};

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export const NETWORK_CHAIN_ID: number = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? "13382"
);

if (typeof NETWORK_URL === "undefined") {
  throw new Error(
    `REACT_APP_NETWORK_URL must be a defined environment variable`
  );
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary =
    networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
const supportedChainIds = [13381, 13382];
export const checkSupportedIds = (chainID: number) =>
  supportedChainIds.some((id) => id === chainID);
export const bscConnector = new BscConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: RPC,
  qrcode: true,
  // bridge: 'https://bridge.walletconnect.org',
  // pollingInterval: 15000,
});

// export const walletlink = new WalletLinkConnector({
//     url: NETWORK_URL,
//     appName: 'Smartswap',
//     appLogoUrl: SMARTSWAP_LOGO

// })

export const connectorKey = "connectv2";

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};
