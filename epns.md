
**Ethereum Push Notification Service (EPNS):** Using EPNS we implemented send notification and get notification like status of stake amount completed, withdraw stake completed  on Dapp.


## EPNS Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/context/Notification.js

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
