import { Dropzone } from '@mantine/dropzone';
import React from 'react';
import { IDropzoneComponentProps } from './Models';

export const DropzoneComponent: React.FC<IDropzoneComponentProps> = props => {
  return (
    <div>
      <Dropzone
        accept={props.acceptFiles}
        onDrop={props.onDrop}
        onReject={props.rejectedUpload}
        maxSize={props.maxSize ?? 2 * 1024 ** 2}
        maxFiles={props.maxFiles ?? 1}
        padding={props.padding ?? undefined}
        radius={props.radius ?? undefined}
        disabled={props.disabled ?? undefined}
        loading={props.loading ?? undefined}
        openRef={props.openRef ?? undefined}
        multiple={props.multiple ?? undefined}
        name={props.name ?? undefined}
        activateOnClick={props.activateOnClick ?? true}
        activateOnDrag={props.activateOnDrag ?? true}
        activateOnKeyboard={props.activateOnKeyboard ?? true}
        dragEventsBubbling={props.dragEventsBubbling ?? true}
        autoFocus={props.autoFocus ?? false}
        onDragEnter={props.onDragEnter ?? undefined}
        onDragLeave={props.onDragLeave ?? undefined}
        onDragOver={props.onDragOver ?? undefined}
        onFileDialogCancel={props.onFileDialogCancel ?? undefined}
        onFileDialogOpen={props.onFileDialogOpen ?? undefined}
        preventDropOnDocument={props.preventDropOnDocument ?? true}
        useFsAccessApi={props.useFsAccessApi ?? false}
      >
        {props.children}
      </Dropzone>
    </div>
  );
};
