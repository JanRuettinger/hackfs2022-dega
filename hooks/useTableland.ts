import { useEffect, useState } from 'react';
import { connect, Connection } from '@tableland/sdk';
import { SUPPORTED_CHAINS } from '@tableland/sdk';

export default function useTableland() {
    // Establish a connection

    const [tableland, setTableland] = useState<Connection>();
    useEffect(() => {
        const initTableland = async () => {
            const tmp = await connect({
                chain: 'polygon-mumbai',
                chainId: 137,
            });
            console.log('connection: ', tmp);
            setTableland(tmp);
        };
        initTableland();
    }, []);
    return tableland;
}
