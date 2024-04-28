import NavBar from "@/components/navbar/navbar"
import "../styles/globals.css"
import QuickContacts from "@/components/contactBox/quickContact/quickContact"
import ContactBox from "@/components/contactBox/contactBox/contactBox"
import { SessionProvider } from "next-auth/react"
import Head from "next/head.js"
import Script from "next/script"
import SocialWidget from "@/components/contactBox/sidewidget/sideWidget"

const noAuthRoutes = ['/welcome', '/newLogin', '/register'];
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
 

    <NavBar />
    <SocialWidget />
    <main>
      <Component {...pageProps} />
    </main>
    <ContactBox />
    <QuickContacts />
    </SessionProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // Determine if authentication is required based on the page's path
  const { asPath } = ctx;

  const isAuthRequired = !noAuthRoutes.includes(asPath);

  // Call the page's `getInitialProps` function if it exists
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, isAuthRequired };
};
export default MyApp