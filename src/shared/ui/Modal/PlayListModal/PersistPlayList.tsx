import styled from '@emotion/styled';
import { useState } from 'react';

import { usePlayListSaveUrlPostMutation } from 'features/playlist/lib/usePostPlayListSaveUrlQuery';

import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/BaseModal';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

export const PersistPlayListModal = ({ ...props }: OuterCloseModalProps) => {
  const [url, setUrl] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const SaveUrlMutation = usePlayListSaveUrlPostMutation();

  const closeErrorModal = () => setErrorModalOpen(false);

  return (
    <OuterCloseModal {...props}>
      <Content>
        <TitleWrap>
          <Modal.Title>플레이리스트 연동</Modal.Title>
          <SubTitle>유튜브 재생목록에서 list=(PLO4)부분을 확인 후 입력해 주세요.</SubTitle>
        </TitleWrap>

        <GuideWrap>
          <GuideText1>예시)</GuideText1>
          <GuideText2>https://www.youtube.com/watch?v=fLi0EJfi_vg&</GuideText2>
          <GuideText3>list=PLO4</GuideText3>
        </GuideWrap>

        <InputWrap>
          <InputTitle placeholder="플레이리스트 ID를 입력해 주세요." onChange={(e) => setUrl(e.target.value)} />
        </InputWrap>

        <ButtonBlock>
          <ButtonWrap>
            <Button
              disabled={SaveUrlMutation.isPending}
              onClick={() => {
                SaveUrlMutation.mutate(
                  { url },
                  {
                    onSuccess: () => {
                      props.onClose();
                    },
                    onError: () => {
                      setErrorModalOpen(true);
                    },
                  },
                );
              }}
            >
              생성
            </Button>
          </ButtonWrap>
        </ButtonBlock>

        <ErrorModal open={errorModalOpen} onClose={closeErrorModal}>
          플레이리스트 등록 중 오류가 발생하였습니다. 다시 등록해주세요.
        </ErrorModal>
      </Content>
    </OuterCloseModal>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 660px;
  padding: 36px 44px 44px 44px;
  position: relative;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  min-width: 163px;
  display: flex;
  gap: 23px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputTitle = styled.input`
  width: 100%;
  height: 60px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors.white};

  ::placeholder {
    ${({ theme }) => theme.fonts.wantedSans.B4};
    color: ${({ theme }) => theme.colors[200]};
  }
`;

// const TextAreaContent = styled.textarea`
//   display: flex;
//   width: 100%;
//   min-height: 116px;
//   resize: none;
//   padding: 20px 24px;
//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors[300]};
//   color: ${({ theme }) => theme.colors[200]};
//   ${({ theme }) => theme.fonts.wantedSans.B4};
//   &::placeholder {
//     ${({ theme }) => theme.colors[200]};
//   }
//   &:disabled {
//     background-color: ${({ theme }) => theme.colors[600]};
//     color: ${({ theme }) => theme.colors[200]};
//   }
// `;

const GuideWrap = styled.div`
  display: flex;
`;

const GuideText1 = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.C1};
  margin-right: 8px;
`;

const GuideText2 = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
`;

const GuideText3 = styled.div`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
  background-color: ${({ theme }) => theme.colors[300]};
`;
