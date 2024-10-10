import type { Dispatch, SetStateAction } from 'react';
import type { ReactNode } from '@tanstack/react-router';
import { useDropzone } from 'react-dropzone';
import { Icon } from '../../components/ui/Icon';
import type { SelectedPicture } from './ProjectDetails';

type DropzoneGalleryProps = {
  selectedPictures: SelectedPicture[];
  setSelectedPictures: Dispatch<SetStateAction<SelectedPicture[]>>;
  onDrop: (acceptedFiles: File[]) => void;
  children: ReactNode;
};

export const DropzoneGallery = ({
  selectedPictures,
  setSelectedPictures,
  onDrop,
  children,
}: DropzoneGalleryProps) => {
  const handleRemoveSelectedPicture = (selectedPictureIndex: number) => {
    setSelectedPictures((prevSelectedPictures) => {
      // Revoke the object URL when the file is removed
      URL.revokeObjectURL(prevSelectedPictures[selectedPictureIndex]!.preview);

      return prevSelectedPictures.filter(
        (_picture, index) => index !== selectedPictureIndex,
      );
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
    noClick: true,
  });

  return (
    <div {...getRootProps()} className="rounded-md">
      <input {...getInputProps()} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
        {selectedPictures.length > 0 &&
          selectedPictures.map((selectedPicture, index) => (
            <div key={index} className="relative">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={selectedPicture.preview}
                alt={`Preview of selected project picture ${String(index + 1)}`}
                className="rounded-md object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemoveSelectedPicture(index)}
                className="absolute right-2 top-2 z-10 flex size-7 items-center justify-center rounded-full bg-black hover:opacity-80"
              >
                <Icon
                  kind="x"
                  screenReaderLabel="Remove picture"
                  className="size-4 text-white"
                />
              </button>
            </div>
          ))}
        {children}
      </div>
    </div>
  );
};
