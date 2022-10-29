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
export interface Accept {
  [key: string]: string[];
}
