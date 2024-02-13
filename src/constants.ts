import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://rpc.helius.xyz/?api-key=e35cb8cf-ba28-4b2c-a685-5ac0f9753b53"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('A1yPM7RjvUetd6Fq8VRTatPSsidqWWwydascNShkVc91')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'smashy.gg'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
   {
     mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
     symbol: 'JUP',
     name: 'Jupiter',
     image: "https://static.jup.ag/jup/icon.png",
     decimals: 1e9,
     baseWager: 0.005,
   }
]
