"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/ui/Lightbox";

interface ImageGalleryProps {
  images: string[];
  title: string;
  imageFit?: "cover" | "contain";
}

export function ImageGallery({ images, title, imageFit = "cover" }: ImageGalleryProps) {
  const fit = imageFit;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, index) => (
          <motion.button
            key={`${src}-${index}`}
            type="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary ${
              fit === "contain" ? "bg-white border border-primary/10" : ""
            } ${
              index === 0 ? "col-span-2 row-span-2 aspect-[16/10]" : "aspect-square"
            }`}
            onClick={() => openLightbox(index)}
            aria-label={`Buka gambar ${index + 1} dari ${title}`}
          >
            <Image
              src={src}
              alt={`${title} - dokumentasi ${index + 1}`}
              fill
              className={`${fit === "contain" ? "object-contain p-6" : "object-cover"} hover:opacity-90 transition-opacity`}
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        alt={title}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
