**Worldcoin:** We have used World ID to make it easy for users to get verified instead of sharing their KYC documents

## Worldcoin Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/LendingPage/LendingHeader.js

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

