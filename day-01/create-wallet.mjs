import { address } from "@solana/kit";
import {
    generateKeyPairSigner,
    createSolanaRpc,
    devnet,
} from "@solana/kit";

const rpc = createSolanaRpc(
    devnet("https://api.devnet.solana.com")
);

const wallet = await generateKeyPairSigner();

const { value: balance } =
    await rpc.getBalance
            address("YOUR_FUNDED_ADDRESS").send();

const balanceInSol =
    Number(balance) / 1_000_000_000;

console.log(balanceInSol);