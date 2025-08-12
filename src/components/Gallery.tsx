"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
  galleryPath: string;
};

export default function Gallery({ images, galleryPath }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((filename) => (
          <div
            key={filename}
            className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedImage(filename)}
          >
            <Image
              src={`${galleryPath}/${filename}`}
              alt={filename}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${galleryPath}/${selectedImage}`}
              alt={selectedImage}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
