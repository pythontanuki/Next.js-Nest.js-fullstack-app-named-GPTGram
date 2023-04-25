import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const App = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <ChakraBaseProvider>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraBaseProvider>
  );
};

export default App;
