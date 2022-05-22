import { ethers } from "ethers";
import { Daix } from "../contracts/Daix";

export const CONTRACT_ADDRESS = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";


export async function getBalanceOfUSDx(
  signer,
  wallet 
) { 
  const contract = new ethers.Contract(CONTRACT_ADDRESS,  Daix, signer);
  let result = await contract.balanceOf(wallet);
  return ethers.utils.formatEther(result);
}

export async function transferUSDCX(
  provider,
  sender,
  amount,
  receiver
) {
  const signer = provider.getSigner(sender);
  const contract = new ethers.Contract(CONTRACT_ADDRESS,  Daix, signer);
  const tokens = ethers.utils.parseUnits(amount.toString(), 18);
  const result = await contract.transfer(receiver, tokens);
  return result;  
}

export default { getBalanceOfUSDx, transferUSDCX };
