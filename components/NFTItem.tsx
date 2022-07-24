import useTableland from '../hooks/useTableland';

type propType = {
    name: string;
    address: string;
    galleryExist: boolean;
};

export default function NFTItem({ name, address, galleryExist }: propType) {
    const tableland = useTableland();

    async function createNewGallery() {
        console.log('create new gallery table');
        if (tableland) {
            console.log('in if');
            // Create a table
            const { name } = await tableland.create(
                `uuid text, cid text, primary key (uuid)`,
                `GalleryTracker`
            );

            console.log('Table name:', name);
            // console.log('write from table');
            // // Wait for the table to be created, then query
        }
    }

    if (galleryExist) {
        return (
            <div className="flex flex-row justify-between mb-4">
                <div>{name}</div>
                <div className="font-bold text-gray-500 bg-white rounded-md p-2">
                    Gallery exists already
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-row justify-between mb-4">
                <div>{name}</div>
                <button
                    className="font-bold text-blue-500 bg-white rounded-md p-2"
                    onClick={createNewGallery}
                >
                    Create Gallery
                </button>
            </div>
        );
    }
}
