import { promises as fs } from "fs";
import path from "path";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default async function Home() {
  const imageDirectory = path.join(process.cwd(), "public", "weddingAlbum");
  const allFilenames = await fs.readdir(imageDirectory);
  const imageFilenames = allFilenames
    .filter((name) => /\.(jpe?g|png|gif|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const desiredHeroCandidates = ["2I7A7190.jpg"]; // preferred hero image
  const heroImage =
    desiredHeroCandidates.find((candidate) =>
      imageFilenames.some((f) => f.toLowerCase() === candidate.toLowerCase())
    ) ?? imageFilenames[0] ?? null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="container mx-auto px-4">
        {heroImage && (
          <div className="relative w-full h-[50vh] rounded-lg overflow-hidden shadow-lg mb-10">
            <Image
              src={`/weddingAlbum/${heroImage}`}
              alt="Wedding featured photo"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Wedding Album
        </h1>
        <Gallery images={imageFilenames} galleryPath="/weddingAlbum" />
      </div>
    </main>
  );
}
