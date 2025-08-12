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
          <button
            aria-label="Close full-size image"
            className="absolute top-4 right-4 h-10 w-10 rounded-full border-2 border-white text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white transition flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
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
