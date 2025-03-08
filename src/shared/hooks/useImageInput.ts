import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

/**
 * 이미지를 업로드하는 커스텀 훅
 */
export const useImageInput = (onUpload: (file: File[]) => void) => {
  const [file, setFile] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(uploadedFile);
      setFile((prev) => [...prev, uploadedFile]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
    multiple: false,
  });

  const handleSubmit = useCallback(() => {
    if (onUpload && file) onUpload(file);
  }, [onUpload, file]);

  return { file, getRootProps, getInputProps, isDragActive, handleSubmit, imagePreview };
};
