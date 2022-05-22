import { customHttpProvider } from "./config";
import { Framework } from "@superfluid-finance/sdk-core"; 
import { ethers } from "ethers"; 
import { Daix } from "../contracts/Daix"; 

const fUSDCx_contract_address = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

export const getUSDCBalances = async (provider, address) => { 
  const signer = provider.getSigner(address); 
  const USDCx = new ethers.Contract(fUSDCx_contract_address, Daix, signer); 
  const USDCxBalance = await USDCx.balanceOf(address);
  return { 
    USDCxBalance: ethers.utils.formatEther(USDCxBalance),
  };
}; 

export const createFlow = async (
  provider,
  sender,
  recipient,
  flowRate
) => {
  const sf = await Framework.create({ 
    networkName: "mumbai",
    provider: customHttpProvider,
  });
  const signer = provider.getSigner(sender); 
  const usdcx = fUSDCx_contract_address;

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      sender: sender,
      receiver: recipient,
      flowRate: flowRate,
      superToken: usdcx, 
    });

    let usdcCreateFlowReceipt = await createFlowOperation.exec(signer);
    await usdcCreateFlowReceipt.wait(); 
    const newBalances = await getUSDCBalances(provider, sender);
    return { newBalances };
  } catch (error) {
    console.log(
      "your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
};

export const updateFlow = async (provider, sender, recipient, flowRate) => {
  const sf = await Framework.create({
    networkName: "mumbai",
    provider: customHttpProvider,
  }); 
  const signer = provider.getSigner(sender); 
  const usdcx = fUSDCx_contract_address; 
  try {
    const updateFlowOperation = sf.cfaV1.updateFlow({
      sender: sender,
      receiver: recipient,
      flowRate: flowRate,
      superToken: usdcx, 
    });

    let usdcUpdateFlowReceipt = await updateFlowOperation.exec(signer);
    await usdcUpdateFlowReceipt.wait(); 
    const newBalances = await getUSDCBalances(provider, sender);
    return { newBalances };
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
};

export const deleteFlow = async (provider, sender, recipient) => {
  const sf = await Framework.create({
    networkName: "mumbai",
    provider: customHttpProvider,
  }); 
  const signer = provider.getSigner(sender); 
  const usdcx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

  try {
    const deleteFlowOperation = sf.cfaV1.deleteFlow({
      sender: sender,
      receiver: recipient,
      superToken: usdcx, 
    });

    let usdcDeleteFlowReceipt = await deleteFlowOperation.exec(signer);
    await usdcDeleteFlowReceipt.wait(); 
    const newBalances = await getUSDCBalances(provider, sender);
    return { newBalances };
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
};
