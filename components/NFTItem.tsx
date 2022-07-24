import useTableland from '../hooks/useTableland';
import Image from 'next/image';

type propType = {
    name: string;
    address: string;
    imageURL: string;
};

export default function NFTItem({ name, address, imageURL }: propType) {
    const tableland = useTableland();

    async function createNewGallery() {
        console.log('create new gallery table');
        if (tableland) {
            // Create a table
            const { name } = await tableland.create(
                `uuid text, cid text, primary key (uuid)`,
                `GalleryTracker`
            );
            console.log('Table name:', name);
            // Add Policy to allow only NFTs owners to update the table
        }
    }

    return (
        <div className="grid grid-cols-3 items-center mb-4">
            <div className="font-semibold text-xl">{name}</div>
            <div className="w-2/4">
                <Image
                    src={`/api/imageproxy?url=${encodeURIComponent(imageURL)}`}
                    alt=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
            <div className="flex flex-row justify-end">
                <button
                    className="font-bold text-blue-500 bg-gray-200 rounded-md p-2 w-1/2"
                    onClick={createNewGallery}
                >
                    Create Gallery
                </button>
            </div>
        </div>
    );
}
