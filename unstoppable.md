**Unstoppable Login:** We have used Unstoppable crypto domain login so users can login to using different domains like .crypto .x .bitcoin

## Unstoppable Domains Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

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
