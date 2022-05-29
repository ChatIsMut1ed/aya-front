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
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            // retryDelay: (attempt) => attempt * 5000,
            staleTime: 5 * 60 * 1000,
            refetchInterval: 5 * 60 * 1000,
            cacheTime: 20 * 60 * 1000,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            // cacheTime: Infinity,
        },
        mutations: {
            onSuccess: () => {
                // queryClient.invalidateQueries("current-user-data");
            },
            onError: (error) => {
                console.log(error.response.data.message);
                // if (error.response.data?.message) {
                //     toast.error(error.response.data?.message || "");
                // } else toast.error(t("notifications.mutation_error", "Please try again later ⏳"));
            },
        },
    },
});
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
