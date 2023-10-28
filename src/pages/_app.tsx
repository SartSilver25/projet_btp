import WithSubnavigation from '@/components/navbar'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
  <Head>
    <link rel="icon" href="/maison.ico" />
  </Head>
    <WithSubnavigation></WithSubnavigation>
    <Component {...pageProps} />
  </ChakraProvider>
}
