import Image from 'next/image';
import Link from 'next/link';

export default function JobCards({ id, title, imageUrl, desc, status }) {
  return (
    <div className="mt-4 mb-2 bg-white rounded-md sm:w-auto shadow-lg">
      <div className="h-36 relative overflow-hidden rounded-t-md">
        <Image
          src={imageUrl}
          alt="Cover photo for Job post"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-4 bg-white rounded-b-md">
        <div className="text-xl leading-tight font-semibold text-blue-700">
          <Link href={`/${id}`}>{title}</Link>
        </div>
        <div className="text-md leading-normal mt-2 text-gray-600 font-medium">
          {desc}
        </div>
        <div
          className={`${
            status.toLowerCase() == 'recruiting'
              ? 'text-green-800 bg-green-200'
              : 'text-red-800 bg-red-200'
          } font-light text-sm mt-4 rounded-full -ml-2 p-2 inline-block leading-3`}
        >
          Currently {status.toLowerCase()}
        </div>
      </div>
    </div>
  );
}
