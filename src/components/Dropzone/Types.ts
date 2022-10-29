export interface MIME_TYPES {
  png: 'image/png';
  gif: 'image/gif';
  jpeg: 'image/jpeg';
  svg: 'image/svg+xml';
  webp: 'image/webp';
  mp4: 'video/mp4';
  zip: 'application/zip';
  csv: 'text/csv';
  pdf: 'application/pdf';
  doc: 'application/msword';
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  xls: 'application/vnd.ms-excel';
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  ppt: 'application/vnd.ms-powerpoint';
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
  exe: 'application/vnd.microsoft.portable-executable';
}
export interface IMAGE_MIME_TYPE {
  image:
    | 'image/png'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/svg+xml'
    | 'image/webp';
}
export declare const PDF_MIME_TYPE: 'application/pdf'[];
export declare const MS_WORD_MIME_TYPE: (
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
)[];
export declare const MS_EXCEL_MIME_TYPE: (
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
)[];
export declare const MS_POWERPOINT_MIME_TYPE: (
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
)[];
export declare const EXE_MIME_TYPE: 'application/vnd.microsoft.portable-executable'[];
//# sourceMappingURL=mime-types.d.ts.map

export interface Accept {
  [key: string]: string[];
}
