import Image from "next/image";
import Link from "next/link";

type Dog = {
  name: string;
  image: string;
  message: string;
  slug: string;
  galleryPath: string;
};

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link href={`/gallery/${dog.slug}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="relative h-64 w-full">
          <Image
            src={dog.image}
            alt={dog.name}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{dog.name}</h2>
          <p className="mt-2 text-gray-600">{dog.message}</p>
        </div>
      </div>
    </Link>
  );
}
