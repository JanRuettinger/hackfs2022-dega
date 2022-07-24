// Get array of NFTs for user. Array:[[contract address, cached_image], [contract address, cached image]]
const axios = require('axios').default;

type NFTSummaryType = {
    contractAddress: string;
    imgURL: string;
    name: string;
};

type NFTResponseItemType = {
    contract_address: string;
    token_id: string;
    name: string;
    description: null | string;
    file_url: string;
    animation_url: null | string;
    cached_file_url: null | string;
    cached_animation_url: null;
    creator_address: string;
    metadata: any;
    metadata_url: string;
};

type NFTResponsePageType = {
    response: string;
    nfts: NFTResponseItemType[];
    total: number;
    continuation: null | string;
};

const NFT_BASE_URL = 'https://api.nftport.xyz/v0/accounts/';

export async function getNFTs(
    address: string,
    chain: string
): Promise<NFTSummaryType[]> {
    const result: NFTSummaryType[] = [];
    try {
        const nfts = await getNFTInfoAllPages(address, chain);
        for (let nft of nfts) {
            let NFTSummaryItem: NFTSummaryType = {
                contractAddress: nft.contract_address,
                imgURL: nft.file_url!,
                name: nft.name,
            };
            result.push(NFTSummaryItem);
        }
        return result;
    } catch (error) {
        throw error;
    }
}

async function getNFTInfoAllPages(
    address: string,
    chain: string
): Promise<NFTResponseItemType[]> {
    // manage pagination
    let NFTs: NFTResponseItemType[] = [];
    let responsePage: NFTResponsePageType;
    try {
        responsePage = await getNFTInfoSinglePage(address, chain);
    } catch (error) {
        throw error;
    }
    if (responsePage.nfts.length > 0) {
        NFTs = NFTs.concat(responsePage.nfts);
    }

    while (responsePage.response == 'OK' && responsePage.continuation) {
        try {
            responsePage = await getNFTInfoSinglePage(
                address,
                chain,
                responsePage.continuation
            );
        } catch (error) {
            throw error;
        }

        if (responsePage.nfts.length > 0) {
            NFTs = NFTs.concat(responsePage.nfts);
        }
    }
    console.log('result of api call:');
    console.log(NFTs);
    return NFTs;
}

async function getNFTInfoSinglePage(
    address: string,
    chain: string,
    continuation?: string
): Promise<NFTResponsePageType> {
    if (continuation) {
        try {
            const response = await axios.get(`${NFT_BASE_URL}${address}`, {
                params: {
                    chain: chain,
                    continuation: continuation,
                },
                headers: {
                    Authorization: process.env.NEXT_PUBLIC_NFT_PORT_API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } else {
        try {
            const response = await axios.get(`${NFT_BASE_URL}${address}`, {
                params: {
                    chain: chain,
                },
                headers: {
                    Authorization: process.env.NEXT_PUBLIC_NFT_PORT_API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
