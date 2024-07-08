import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/configureStore";
import { GlobalStyle } from "../globalStyles.styles";
// import { ErrorBoundary } from "react-error-boundary";
// import { HelmetProvider } from "react-helmet-async";

// import { MainErrorFallback } from "@/components/errors/main";
// import { Notifications } from "@/components/ui/notifications";
// import { Spinner } from "@/components/ui/spinner";
// import { AuthLoader } from "@/lib/auth";
import { queryClient } from "@/lib/react-query";
import "@/index.css";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      {/* // <React.Suspense
    //   fallback={
    //     <div className="flex h-screen w-screen items-center justify-center">
    //       Loading....
    //     </div>
    //   }
    // >
      {/* <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider> */}
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <Provider store={store}>
          <GlobalStyle />

          {/* <Notifications />
            <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center">
                  <Spinner size="xl" />
                </div>
              )}
            > */}
          {children}
          {/* </AuthLoader> */}
        </Provider>
      </QueryClientProvider>
    </>
    //   {/* </HelmetProvider>
    //   </ErrorBoundary> */}
    // // </React.Suspense>
  );
};
