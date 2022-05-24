import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./stores/auth.store";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// Create a client
const queryClient = new QueryClient();
ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <App />
                    <ReactQueryDevtools closeButtonProps={{ style: { top: 0, bottom: "unset" } }} initialIsOpen={false} />
                </AuthProvider>
            </QueryClientProvider>
        </ScrollToTop>
    </HashRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
