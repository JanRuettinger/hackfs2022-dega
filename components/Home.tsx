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
        contractAddress: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
        imgURL: 'https://lh3.googleusercontent.com/ZOy0IHm9Ei4IL0Yl29Z_UkGTuThz1_yjjMKT3iDdmFSUIMOT_dMMpn7JzNH5fz19YQ9eGDereGzThVNVk2k3CEfSGKD0vRqd0I9TFh8',
        name: 'Bufficon #2',
    },
];

export default function Home() {
    const { data } = useAccount();
    // Establish a connection
    const [nfts, setNfts] = useState<NFTSummaryType[]>([]);
    useEffect(() => {
        const getUserNFTs = async () => {
            let tmp = await getNFTs(data?.address!, 'polygon');
            console.log(tmp);
            tmp = tmp.filter((item) => item.name != galleryItems[0].name);

            // check with Covalent if there exists a table for that contract already
            console.log(tmp);
            setNfts(tmp);
        };
        getUserNFTs();
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between mb-4">
                <h2 className="font-bold text-2xl">
                    Your NFTs without a gallery:
                </h2>
            </div>
            <div className="w-full border-b-2 border-block border-black"></div>

            <div className="mt-4">
                {nfts.map((item) => {
                    return (
                        <NFTItem
                            key={item.contractAddress}
                            name={item.name}
                            address={item.contractAddress}
                            imageURL={item.imgURL}
                        />
                    );
                })}
            </div>

            <div className="flex flex-row justify-between mb-4 mt-6">
                <h2 className="font-bold text-2xl">
                    Galleries you have access to:
                </h2>
            </div>
            <div className="w-full border-b-2 border-block border-black"></div>

            <div className="mt-4">
                {galleryItems.map((item) => {
                    return (
                        <GalleryItem
                            key={item.contractAddress}
                            name={item.name}
                            address={item.contractAddress}
                            imageURL={item.imgURL}
                        />
                    );
                })}
            </div>
        </div>
    );
}
