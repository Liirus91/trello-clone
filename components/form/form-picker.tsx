'use client';

import { defaultImages } from '@/constants/images';
import { unsplash } from '@/lib/unsplash';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[]> | undefined;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const { pending } = useFormStatus();

  const [images, setImages] =
    useState<Array<Record<string, any>>>(defaultImages);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ['8994492'],
          count: 9,
        });

        if (result && result.response) {
          const newImages = result.response as Array<Record<string, any>>;
          setImages(newImages);
        } else {
          console.error('Failet to get images from Unsplash');
        }
      } catch (error) {
        console.log(error);
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader2 className="w-6 h-6 text-sky-700 animate-spin" />
      </div>
    );
  }
  console.log(images);

  return (
    <div className="relative">
      <div className="grid gap-2 mb-2 grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              'relative cursor-pointer aspect-video group hover:opacity-75 transition bg-muted',
              pending && 'opacity-50 hover:opacity-50 cursor-auto'
            )}
            onClick={() => {
              if (pending) {
                return;
              }
              setSelectedImageId(image.id);
            }}
          >
            <Image
              fill
              alt="Unsplash image"
              src={image.urls.thumb}
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
