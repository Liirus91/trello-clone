'use client';

import { defaultImages } from '@/constants/images';
import { unsplash } from '@/lib/unsplash';
import { cn } from '@/lib/utils';
import { Check, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { FormErrors } from './form-errors';

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
            {selectedImageId === image.id && (
              <div className="flex items-center justify-center absolute inset-y-0 h-full w-full bg-black/30">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <Link
              href={image.links.html}
              target="_blank"
              className="absolute opacity-0 group-hover:opacity-100 bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      <FormErrors id="image" errors={errors} />
    </div>
  );
};
