import styled from '@emotion/styled';
import { useState } from 'react';

import { useImageInput } from 'features/musicRecommendation/model/useImageInput';

import { Button, Modal } from 'shared/ui/';

export interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

export const ImageInput = ({ onUpload }: ImageUploaderProps) => {
  const [open, setOpen] = useState(false);
  const { file, isDragActive, getInputProps, getRootProps, imagePreview, handleSubmit } = useImageInput(onUpload);

  return (
    <>
      <Box>
        <Label>{file && file.name}</Label>
        <Button type="button" variant="outlined" onClick={() => setOpen(true)}>
          이미지 업로드
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ImageModalContainer>
          <ModalHeader>
            <Modal.Title>이미지 업로드</Modal.Title>
            <Modal.CloseButton onClose={() => setOpen(false)} />
          </ModalHeader>

          <ImageDropBox {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <DragActiveCaption>드래그하여 업로드</DragActiveCaption>
            ) : (
              <DragCaption>이미지를 드래그하거나 클릭해서 업로드하세요.</DragCaption>
            )}
            {imagePreview && (
              <ImagePreviewBox>
                <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              </ImagePreviewBox>
            )}
          </ImageDropBox>
          <ButtonBlock>
            <ButtonBox>
              <Button
                onClick={() => {
                  handleSubmit();
                  setOpen(false);
                }}
              >
                첨부
              </Button>
            </ButtonBox>
          </ButtonBlock>
        </ImageModalContainer>
      </Modal>
    </>
  );
};

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ImagePreviewBox = styled.div`
  width: 100%;
`;

const DragActiveCaption = styled.p`
  ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
const DragCaption = styled.p`
  ${({ theme }) => theme.colors[300]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;

const ImageDropBox = styled.div`
  display: flex;
  width: 492px;
  height: 208px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.colors[300]};
`;

const ImageModalContainer = styled.div`
  display: flex;
  width: 580px;
  padding: 36px 44px 44px 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 64px;
  padding: 18px 26px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[200]};
`;
const ButtonBox = styled.div`
  width: 163px;
`;
