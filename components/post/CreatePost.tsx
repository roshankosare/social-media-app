import Image from 'next/image';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { useState } from 'react';

interface CreatePostProps {
  onUploadPost: () => Promise<void>;
  image: File;
  setCaption: (value: string) => void;
  caption: string;
  resetImage: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  onUploadPost,
  image,
  setCaption,
  caption,
  resetImage,
}) => {
  const [postButtonDisabled, setPostButtonDisabled] = useState<boolean>(false);
  return (
    <Card className="my-10 flex h-auto w-full flex-col gap-y-5 border-none py-10 sm:max-h-[450px] sm:max-w-4xl sm:flex-row sm:border-solid">
      <div className="h-[300px] w-full px-5 sm:h-full sm:w-1/2">
        <Image
          src={URL.createObjectURL(image)}
          width={1000}
          height={1000}
          alt="image"
          className="mx-auto my-auto h-full w-auto"
        />
      </div>

      <div className=" flex w-full flex-col gap-y-8 px-5 sm:w-1/2">
        <Textarea
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          className="h-32 w-full"
          placeholder="write somting about post"
        />
        <div className=" flex flex-row gap-x-4">
          <Button className="w-32" onClick={() => resetImage()}>
            Cancel
          </Button>
          <Button
            className="w-32"
            disabled={postButtonDisabled}
            onClick={async () => {
              setPostButtonDisabled(true);
              await onUploadPost();
              setPostButtonDisabled(false);
            }}
          >
            Post
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
