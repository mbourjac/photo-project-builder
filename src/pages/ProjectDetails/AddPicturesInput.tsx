import { useDropzone } from 'react-dropzone';
import { Icon } from '../../components/ui/Icon';

type AddPicturesInputProps = {
  onDrop: (acceptedFiles: File[]) => void;
};

export const AddPicturesInput = ({ onDrop }: AddPicturesInputProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
    noDrag: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        {...getRootProps()}
        className="w-full rounded-lg bg-black p-2 text-sm text-white transition-colors duration-150 hover:opacity-80"
      >
        <label htmlFor="pictures" className="flex cursor-pointer gap-2">
          <Icon kind="plus" aria-hidden="true" className="size-5" />
          <span>Add pictures</span>
        </label>
        <input id="pictures" {...getInputProps()} />
      </div>
      <p className="text-sm text-zinc-600">
        You can also drag and drop new pictures to the gallery.
      </p>
    </div>
  );
};
