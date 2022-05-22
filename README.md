# GigConomy : Decentralized Freelancing Platform for Global Gig Economy 🤝

## Problem we are solving:

**“Trust”** is a key factor for successful transactions between parties. To ensure trust, we involve third party freelancing platforms or middlemen and pay hefty commissions which highly affect the overall profit margins of parties involved in a transaction.

**GigConomy** : Decentralized Freelancing Platform for Global Gig Economy 🤝 which helps individuals and businesses to grow globally and increase profit margins in four simple steps:

**1) List Products,Services or subscription packages.**

**2) Create Escrow agreements with personalize terms as per customers.**

**3) Send/Receive crypto payments in reliable and secure way without paying hefty commissions to third parties.**

## List of Bounties implemented:

**⭓ Polygon:** We have used Polygon Mumbai Testnet for deploying smart contracts of
**1) Escrow Agreement**

## Polygon Implementation:

```
module.exports = {`
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },

  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

https://github.com/GigConomy/GigConomy/blob/master/hardhat.config.js

**⚫ Spheron:** We have used Spheron Decentralized cloud to host our Dapp using Pinta storage integration of Spheron.

[dapp url]: ().

**💾 IPFS/Filecoin NFT.Storage:** We are Using Web3.Storage, to permanently store all the details of user invoices and subscription service on decentralized storage.

## IPFS/Filecoin Implementation:

```
  function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the

    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return process.env.REACT_APP_WEB3_STORAGE_API_KEY;
  }

  function makeFileObjects(data) {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!

    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    const files = [new File([blob], "subscribtion_Details.json")];
    return files;
  }
```

https://github.com/GigConomy/GigConomy/blob/master/src/modal/CreateSubscribtionModal.js
https://github.com/GigConomy/GigConomy/blob/master/src/modal/CreateInvoiceModal.js

**WalletConnect:** Using WalletConnect to enables a mobile wallet to easily connect to decentralized web applications, and interact with them from your phone.

## WalletConnect Implementation:

```
walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_INFURA_KEY, // required
    },
  },
```

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

**Unstoppable Login:** Using Unstoppable domains user can login with their unstoppable domains.

## Unstoppable Domains Implementation:

```
export const uauthOptions = {
  clientID: "79a8a15a-dddc-4d39-8483-9db5536cc839",
  redirectUri: "http://localhost:3000",

  scope: "openid wallet",
};

"custom-uauth": {
    display: UAuthWeb3Modal.display,
    connector: UAuthWeb3Modal.connector,
    package: UAuthSPA,
    options: uauthOptions,
  },

```

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

**Coinbase Wallet:** Coinbase Wallet allow us to connect and send, receive crypto payment.

## Coinbase Wallet Implementation:

```
 walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "GigConomy", // Required
      infuraId: process.env.REACT_APP_INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },

```

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

**Ethereum Push Notification Service (EPNS):** Using EPNS any smart contract, dApp or backend can send on-chain or off-chain notifications which is connected to wallet addresses of a user.

## EPNS Implementation:

```
 async function fetchNotifications(account) {
    if (account) {
      // define the variables required to make a request
      const walletAddress = account;
      const pageNumber = 1;
      const itemsPerPage = 20;

      // fetch the notifications
      const { count, results } = await api.fetchNotifications(
        walletAddress,
        itemsPerPage,
        pageNumber
      );

      // parse all the fetched notifications
      const parsedResponse = utils.parseApiResponse(results);
      setNotificationItems(parsedResponse);
    }
  }

  async function sendNotifications(data) {
    try {
      const tx = await epnsSdk.sendNotification(
        data.to,
        "GigConomy",
        data.message,
        "",
        "",
        3, //this is the notificationType
        "http://localhost:3000/", // a url for users to be redirected to
        "https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=", // an image url, or an empty string
        null //this can be left as null
      );
      setIsUpdated(!isUpdated);
    } catch (error) {
      console.log(error);
    }
  }

```

https://github.com/GigConomy/GigConomy/blob/master/src/context/Notification.js

**Worldcoin:** Using worldcoin to verify user.

## Worldcoin Implementation:

```
  async function getVerified() {
    try {
      const result = await worldID.enable();
      console.log("World ID verified succesfully:", result);
    } catch (failure) {
      console.warn("World ID verification failed:", failure);
      // Re-activate here so your end user can try again
    }
  }
```

https://github.com/GigConomy/GigConomy/blob/master/src/LendingPage/LendingHeader.js

**Transak:** Using Transak we can onboard more user by getting fiat currency and giving them crypto.

## Transak Implementation:

```
 let transak = new transakSDK({
      apiKey: process.env.REACT_APP_TRANSAK_API_KEY, // Your API Key
      environment: "STAGING", // STAGING/PRODUCTION
      hostURL: window.location.origin,
      widgetHeight: "480px",
      widgetWidth: "500px",
      // Examples of some of the customization parameters you can pass
      defaultCryptoCurrency: "ETH", // Example 'ETH'
      walletAddress: account, // Your customer's wallet address
      themeColor: "#6b46c1", // App theme color
      fiatCurrency: "USD", // If you want to limit fiat selection eg 'USD'
      email: "", // Your customer's email address
      redirectURL: "",
    });
    setTransak(transak);
    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
    });

```

https://github.com/GigConomy/GigConomy/blob/master/src/context/Transak.js

**Covalent:** Covalent is used to get data of contract from blockchain

## Covalent Implementation:

```
const data = await Moralis.Plugins.covalent.getLogEventsByContractAddress({
        chainId: 80001,
        contractAddress: AgreementAddress,
      });
```

https://github.com/GigConomy/GigConomy/blob/master/src/sections/%40dashboard/app/AppTotalAgreement.js

**Challenges we have faced:** When we started building, we had so many ideas for features and functionalities to implement in GigConomy. We had too many ideas like we can build a freelancing platform, we can build a review system for businesses and so on. As a startup we knew that too many features or trying to cover too many use cases at once will confuse the users and implemented minimum possible features to solve one use case.

## Homepage:

<img width="1440" alt="Screenshot 2022-05-22 at 4 17 24 PM" src="https://user-images.githubusercontent.com/54347081/169691544-5d35e6ac-40a1-4574-acf6-f33992ece828.png">

## Wallets:

<img width="1412" alt="Screenshot 2022-05-22 at 4 23 30 PM" src="https://user-images.githubusercontent.com/54347081/169691725-83e23f90-6d01-499a-8cd0-4af44419e685.png">

## Escrow Agreement:

<img width="1403" alt="img2" src="https://user-images.githubusercontent.com/54347081/169691573-f97ee886-1937-409f-bd86-62887f7e7bb5.png">

## Analytics:

<img width="1420" alt="img1" src="https://user-images.githubusercontent.com/54347081/169691637-f01158ac-0ea3-45a3-8d74-e892f572058c.png">

## Ethereum Push Notification Service(EPNS):

<img width="1429" alt="Screenshot 2022-05-22 at 4 28 20 PM" src="https://user-images.githubusercontent.com/54347081/169691869-d090b834-74e9-48c6-bc74-364ffc571332.png">

## Subscriptions

<img width="1434" alt="Screenshot 2022-05-22 at 4 35 08 PM" src="https://user-images.githubusercontent.com/54347081/169692092-d49ae979-4533-4a4d-a074-a2a0b6101443.png">

## Subscription Details

<img width="1369" alt="Screenshot 2022-05-22 at 4 36 06 PM" src="https://user-images.githubusercontent.com/54347081/169692128-e1020333-26d2-4267-abe9-7c00217c724a.png">

## Invoice Details

<img width="1415" alt="Screenshot 2022-05-22 at 4 29 48 PM" src="https://user-images.githubusercontent.com/54347081/169691914-490cacc6-c1b2-4d8f-9b22-8a26d374348e.png">

**WAGMI 😊🚀∞**
