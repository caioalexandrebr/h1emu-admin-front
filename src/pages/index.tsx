import Head from 'next/head';

import Button from '@Atoms/Button';
import Input from '@Atoms/Input';

import Header from '@Molecules/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>h1emu - admin</title>
      </Head>
      <Header />
      <Input placeholder="Enter your authkey" />
      <Button type="button">Confirm</Button>
    </>
  );
}
