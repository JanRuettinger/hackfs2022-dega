const axios = require('axios').default;

export async function getTableCreationTxs(
    contractAddress: string,
    chainID: string
) {
    console.log('in covalent call');
    const params = new URLSearchParams();
    params.append('quote-currency', 'USD');
    params.append('format', 'JSON');
    params.append('key', process.env.NEXT_PUBLIC_COVALENT_API_KEY!);
    const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainID}/events/address/${contractAddress}/`,
        { params }
    );
    console.log('Covalent response:');
    console.log(response);
    return response.data.data.items;
}

// https://api.covalenthq.com/v1/1/events/address/0xc0da01a04c3f3e0be433606045bb7017a7323e38/?quote-currency=USD&format=JSON&starting-block=12115107&ending-block=12240004&key=xxx
