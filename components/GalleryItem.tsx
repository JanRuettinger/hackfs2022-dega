import Link from 'next/link';

type propType = {
    name: string;
    address: string;
};

export default function GalleryItem({ name, address }: propType) {
    return (
        <div className="flex flex-row justify-between mb-4">
            <div>{name}</div>
            <Link href={`/gallery/${address}`}>
                <button className="font-bold text-red-500 bg-white rounded-md p-2">
                    Go to gallery
                </button>
            </Link>
            <button className="font-bold text-red-500 bg-white rounded-md p-2">
                Share
            </button>
        </div>
    );
}
