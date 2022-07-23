import { chainId } from 'wagmi';
import GalleryItem from './GalleryItem';
import { connect, Connection } from '@tableland/sdk';
import { useEffect, useState } from 'react';
import NFTItem from './NFTItem';

const nftItems = [
    {
        name: 'APES',
        address: '0x002020',
        galleryExist: true,
    },
    {
        name: 'APES',
        address: '0x002020',
        galleryExist: false,
    },
];

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
    // Establish a connection
    const [tablelandConnection, setTablelandConnection] =
        useState<Connection>();

    async function createNewGallery() {
        console.log('create new gallery table');
        if (tablelandConnection) {
            console.log('in if');
            // Create a table
            // const { name } = await tablelandConnection.create(
            //     `name text, id int, primary key (id)`,
            //     `quickstart`
            // );

            // console.log(name);
            // console.log('write from table');
            // // Wait for the table to be created, then query
            // const writeRes = await tablelandConnection.write(
            //     `INSERT INTO ${name} VALUES (0, 'Bobby Tables');`
            // );
            let name = 'quickstart_80001_520';
            console.log('read from table');
            const readRes = await tablelandConnection.read(
                `SELECT * FROM ${name}`
            );

            console.log(readRes);
        }
    }

    useEffect(() => {
        const initTableland = async () => {
            const tmp = await connect({
                chain: 'polygon-mumbai',
                chainId: 80001,
            });
            console.log('connection: ', tmp);
            setTablelandConnection(tmp);
        };
        initTableland();
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between mb-4">
                <h2 className="font-bold text-2xl">Your NFTs</h2>
            </div>
            <div className="w-full border-b-2 border-block border-black"></div>

            <div className="mt-4">
                {nftItems.map((item) => {
                    return (
                        <NFTItem
                            key={item.address}
                            name={item.name}
                            address={item.address}
                            galleryExist={item.galleryExist}
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
