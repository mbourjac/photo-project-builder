import {
  useState,
  type Dispatch,
  type KeyboardEvent,
  type SetStateAction,
} from 'react';
import { Icon } from '../../components/ui/Icon';

type ProjectTagsInputProps = {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
};

export const ProjectTagsInput = ({ tags, setTags }: ProjectTagsInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const addTags = (input: string) => {
    const newTags = input
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '' && !tags.includes(tag));

    if (newTags.length > 0) {
      setTags((prevTags) => [...prevTags, ...newTags]);
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTags(inputValue);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="tags" className="text-sm font-semibold">
          Tags
        </label>
        <p id="tags-help" className="text-sm text-zinc-600">
          You can add multiple tags at once by separating them with a comma.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            id="tags"
            aria-describedby="tags-help"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow rounded-md border px-3 py-1"
          />
          <button
            type="button"
            onClick={() => addTags(inputValue)}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white transition-colors duration-150"
          >
            Add
          </button>
        </div>
      </div>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 rounded-full bg-zinc-200 px-2.5 py-1 text-sm"
            >
              <span>{tag}</span>
              <button
                type="button"
                className="rounded-full"
                onClick={() => removeTag(tag)}
              >
                <Icon
                  kind="x"
                  screenReaderLabel="Remove tag"
                  className="size-3 rounded-full bg-white text-black"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
