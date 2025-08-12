import { promises as fs } from "fs";
import path from "path";
import { dogs } from "../../../dogs";
import Link from "next/link";
import Gallery from "../../../components/Gallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return dogs.map((dog) => ({
    slug: dog.slug,
  }));
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
  const dog = dogs.find((d) => d.slug === slug);

  if (!dog) {
    return <div>Gallery not found</div>;
  }

  const imageDirectory = path.join(process.cwd(), "public", dog.galleryPath);
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <button className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          &larr; Back to Home
        </button>
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{dog.name}</h1>
      <Gallery images={imageFilenames} galleryPath={dog.galleryPath} />
    </div>
  );
}
