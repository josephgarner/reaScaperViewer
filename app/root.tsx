import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import MainNavigation from "./components/mainNavigation";
import theme from "./theme";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme} resetCSS={true}>
          <MainNavigation />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ChakraProvider>
      </body>
    </html>
  );
}
