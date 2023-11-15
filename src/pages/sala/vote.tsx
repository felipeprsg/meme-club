import Head from 'next/head';

import { Vote } from '@/app/layouts/Home/Room/Vote';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Meme Club</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Vote />
    </>
  );
}
