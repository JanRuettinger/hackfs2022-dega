import Link from 'next/link';
import Image from 'next/image';

type propType = {
    name: string;
    address: string;
    imageURL: string;
};

export default function GalleryItem({ name, address, imageURL }: propType) {
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
                <div className="font-bold text-blue-500 text-center bg-gray-200 rounded-md p-2 w-1/2">
                    <Link href={`/gallery/${address}`}>
                        <a>Go to Gallery</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
