// scroll bar
import "simplebar/src/simplebar.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

//
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { Web3ContextProvider } from "./context/Web3Context";
import { SuperfluidWeb3ContextProvider } from "./context/SuperfluidContext";
import { TransakWeb3ContextWeb3ContextProvider } from "./context/Transak";
import { Web3ModalContextProvider } from "./context/Web3Modal";
import { NotificationContextProvider } from "./context/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { makeStore } from "./redux/store";
import { Provider } from "react-redux";
// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <Provider store={makeStore()}>
      <BrowserRouter>
        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_KEY}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER}
        >
          <Web3ModalContextProvider>
            <NotificationContextProvider>
              <Web3ContextProvider>
                <SuperfluidWeb3ContextProvider>
                  <TransakWeb3ContextWeb3ContextProvider>
                    <App />
                  </TransakWeb3ContextWeb3ContextProvider>
                </SuperfluidWeb3ContextProvider>
              </Web3ContextProvider>
            </NotificationContextProvider>
          </Web3ModalContextProvider>
        </MoralisProvider>
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
