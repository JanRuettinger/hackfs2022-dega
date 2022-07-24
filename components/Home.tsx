import { chainId, useAccount } from 'wagmi';
import GalleryItem from './GalleryItem';
import { connect, Connection } from '@tableland/sdk';
import { useEffect, useState } from 'react';
import NFTItem from './NFTItem';
import useTableland from '../hooks/useTableland';
import { getNFTs } from '../lib/api';

type NFTSummaryType = {
    contractAddress: string;
    imgURL: string;
    name: string;
};

const galleryItems = [
    {
        name: 'APES',
        address: '1',
    },
    {
        name: 'CryptoPunks',
        address: '2',
    },
];

export default function Home() {
    const { data } = useAccount();
    // Establish a connection
    const [nfts, setNfts] = useState<NFTSummaryType[]>([]);
    useEffect(() => {
        const getUserNFTs = async () => {
            const tmp = await getNFTs(data?.address!, 'polygon');
            console.log(tmp);
            setNfts(tmp);
        };
        getUserNFTs();
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between mb-4">
                <h2 className="font-bold text-2xl">Your NFTs</h2>
            </div>
            <div className="w-full border-b-2 border-block border-black"></div>

            <div className="mt-4">
                {nfts.map((item) => {
                    return (
                        <NFTItem
                            key={item.contractAddress}
                            name={item.name}
                            address={item.contractAddress}
                            galleryExist={true}
                        />
                    );
                })}
            </div>

            <div className="flex flex-row justify-between mb-4 mt-6">
                <h2 className="font-bold text-2xl">Your Galleries</h2>
            </div>
            <div className="w-full border-b-2 border-block border-black"></div>

            <div className="mt-4">
                {galleryItems.map((item) => {
                    return (
                        <GalleryItem
                            key={item.address}
                            name={item.name}
                            address={item.address}
                        />
                    );
                })}
            </div>
        </div>
    );
}
