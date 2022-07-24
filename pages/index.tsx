import type { NextPage } from 'next';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import LandingPage from '../components/LandingPage';
import Home from '../components/Home';
import { useEffect } from 'react';

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

    useEffect(() => {}, [isConnected]);

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>DeGa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-4 bg-gray-500 flex flex-row justify-between">
                <div className="text-2xl font-bold text-gray-800 font-bitter">
                    DeGa
                </div>
                <div>
                    <ConnectButton
                        // chainStatus="none"
                        // showBalance={false}
                        accountStatus="address"
                    />
                </div>
            </header>
            <main className="flex-grow bg-white p-4">
                <div className="w-3/5 mx-auto mt-32">
                    <Screen />
                </div>
            </main>
            <footer className="p-4 bg-green-200 text-center mt-auto">
                Built with ❤️ by Jan
            </footer>
        </div>
    );
};

export default Index;
