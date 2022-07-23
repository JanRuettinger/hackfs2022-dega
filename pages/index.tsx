import type { NextPage } from 'next';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import LandingPage from '../components/LandingPage';
import Home from '../components/Home';

const Index: NextPage = () => {
    const { data } = useAccount();
    const { isConnected } = useConnect();

    const Screen = () => {
        if (isConnected && data) {
            return <Home />;
        } else {
            return <LandingPage />;
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-4 bg-red-500 flex flex-row justify-between">
                <div>NAME </div>
                <div>
                    <ConnectButton
                    // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    />
                </div>
            </header>
            <main className="flex-grow bg-green-500 p-4">
                <div className="w-3/5 mx-auto mt-32">
                    <Screen />
                </div>
            </main>
            <footer className="p-4 bg-blue-500">Footer</footer>
        </div>
    );
};

export default Index;