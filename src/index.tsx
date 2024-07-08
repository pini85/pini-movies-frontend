import React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import App from "./app/index";
import { GlobalStyle } from "./globalStyles.styles";

// !enable mocking service worker in development
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./test/server/browser');
//   worker.start();
//   worker.printHandlers();
// }
const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  // <QueryClientProvider client={queryClient}>
  //   <Provider store={store}>
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
  //   </Provider>
  //   <ReactQueryDevtools />
  // </QueryClientProvider>
);
if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
