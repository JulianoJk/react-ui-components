// import { useState } from 'react';
import { Text } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import React from 'react';
import { Accept } from './Types';

export interface IDropzoneComponentProps {
  dropzoneLabel: string;
  acceptedUpload(file: FileWithPath[]): void;
  rejectedUpload(): void;
  acceptFiles: Accept | string[] | undefined;
}

export const DropzoneComponent: React.FC<IDropzoneComponentProps> = props => {
  // const [files, setFiles] = useState<FileWithPath[]>([]);

  // const previews = files.map((file, index) => {
  //   const imageUrl = URL.createObjectURL(file);

  //   return (
  //     <Image
  //       key={index}
  //       src={imageUrl}
  //       imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
  //     />
  //   );
  // });
  // const isValidType = () =>{
  //   if(props.acceptFiles)
  // }

  return (
    <div>
      <Dropzone
        accept={props.acceptFiles}
        onDrop={props.acceptedUpload}
        onReject={props.rejectedUpload}
      >
        <Text align="center">{props.dropzoneLabel}</Text>
      </Dropzone>

      {/* <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        {previews}
      </SimpleGrid> */}
    </div>
  );
};
