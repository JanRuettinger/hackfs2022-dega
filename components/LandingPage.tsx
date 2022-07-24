import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <div className="text-center text-4xl font-bold font-bitter">
                DeGa - Decentralized Photo Gallery for NFT Communities
            </div>
            <div className="mt-4 w-4/5 mx-auto text-xl">
                DeGa is a tool for{' '}
                <span className="font-semibold text-orange-500">vibrant</span>{' '}
                web3 communities who love{' '}
                <span className="font-semibold text-orange-500">
                    collecting photos together!
                </span>
            </div>

            <div>
                <div className="text-2xl font-bold text-center mt-8">
                    How does it work?
                </div>
                <div className="w-4/5 mx-auto">
                    <ul className="list-disc">
                        <li className="mt-4">
                            Your community uploads photos to{' '}
                            <span className="font-semibold">
                                IPFS/web3.storage
                            </span>
                        </li>
                        <li className="mt-4">
                            Links to your shared photos are conveniently stored
                            in a{' '}
                            <span className="font-semibold">
                                table by Tableland.xyz
                            </span>{' '}
                            so they never get lost
                        </li>
                        <li className="mt-4">
                            <span className="font-semibold">
                                Smart access control
                            </span>{' '}
                            ensures that only members of your community can add
                            photos to your gallery
                        </li>
                        <li className="mt-4">
                            <span className="font-semibold">
                                Blazingly fast
                            </span>{' '}
                            Web2 like loading times thanks to{' '}
                            <span className="font-semibold">
                                NFTPort&apos;s high performance NFT API{' '}
                            </span>
                        </li>
                        <li className="mt-4">
                            Photo sharing is not enough? Your community can
                            <span className="font-semibold">
                                {' '}
                                exchange messages powered by XMTP{' '}
                            </span>
                        </li>
                        <li className="mt-4">
                            Find the tables you have access to in{' '}
                            <span className="font-semibold">no time</span>{' '}
                            thanks to the API from{' '}
                            <span className="font-semibold">CovalentHQ</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full">
                <Image
                    src={'/assets/screenshot.png'}
                    alt=""
                    width="500px"
                    height="300px"
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}
