**Covalent:** We have used covalent in GigConomy dashboard to fetch agreements from smart contract.

## Covalent Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/sections/%40dashboard/app/AppTotalAgreement.js

```
const data = await Moralis.Plugins.covalent.getLogEventsByContractAddress({
        chainId: 80001,
        contractAddress: AgreementAddress,
      });
```

