import { Accept } from './Types';
import { FileRejection, FileWithPath } from 'react-dropzone';
import { MantineNumberSize } from '@mantine/core';
export interface IDropzoneComponentProps {
  /** File types to accept  */
  acceptFiles: Accept | string[] | undefined;
  /** Called when files are dropped into dropzone */
  onDrop(files: FileWithPath[]): void;
  /** Called when selected files don't meet file restrictions */
  rejectedUpload(rejectedFile: FileRejection[]): void;
  /** Padding from theme.spacing, or number to set padding in px */
  padding?: MantineNumberSize;
  /** Border radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
  /** Dropzone statues */
  children: React.ReactNode;
  /** Disable files capturing */
  disabled?: boolean;
  /** Display loading overlay over dropzone */
  loading?: boolean;
  /** Get open function as ref */
  openRef?: React.ForwardedRef<() => void | undefined>;
  /** Allow selection of multiple files */
  multiple?: boolean;
  /** Set maximum file size in bytes */
  maxSize?: number;
  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  name?: string;
  /** Number of files that user can pick */
  maxFiles?: number;
  /** Set to true to autofocus the root element */
  autoFocus?: boolean;
  /** If false, disables click to open the native file selection dialog */
  activateOnClick?: boolean;
  /** If false, disables drag 'n' drop */
  activateOnDrag?: boolean;
  /** If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. */
  activateOnKeyboard?: boolean;
  /** If false, stops drag event propagation to parents */
  dragEventsBubbling?: boolean;
  /** Called when the `dragenter` event occurs */
  onDragEnter?(event: React.DragEvent<HTMLElement>): void;
  /** Called when the `dragleave` event occurs */
  onDragLeave?(event: React.DragEvent<HTMLElement>): void;
  /** Called when the `dragover` event occurs */
  onDragOver?(event: React.DragEvent<HTMLElement>): void;
  /** Called when user closes the file selection dialog with no selection */
  onFileDialogCancel?(): void;
  /** Called when user opens the file selection dialog */
  onFileDialogOpen?(): void;
  /** If false, allow dropped items to take over the current browser window */
  preventDropOnDocument?: boolean;
  /** Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true */
  useFsAccessApi?: boolean;
}
