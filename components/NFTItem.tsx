type propType = {
    name: string;
    address: string;
    galleryExist: boolean;
};

export default function NFTItem({ name, address, galleryExist }: propType) {
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
                <button className="font-bold text-blue-500 bg-white rounded-md p-2">
                    Create Gallery
                </button>
            </div>
        );
    }
}
