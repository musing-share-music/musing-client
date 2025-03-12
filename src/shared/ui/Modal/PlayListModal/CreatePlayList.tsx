import styled from '@emotion/styled';

import { Button } from 'shared/ui/Button';
// import { TextInput } from 'shared/ui/Input';
// import { TextArea } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal/BaseModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

export const CreatePlayListModal = ({ ...props }: OuterCloseModalProps) => {
  return (
    <OuterCloseModal {...props}>
      <Content>
        <TitleWrap>
          <Modal.Title>플레이리스트 생성</Modal.Title>
          <SubTitle>최대 3개까지 생성할 수 있어요.</SubTitle>
        </TitleWrap>
        <InputWrap>
          <InputTitle placeholder="제목을 입력해 주세요."></InputTitle>
          <TextAreaContent placeholder="내용을 입력해 주세요."></TextAreaContent>
        </InputWrap>
        <GuideWrap>
          <GuideText1>유튜브 플레이리스트와 연동할 수도 있어요!</GuideText1>
          <GuideText2>보유하고 계신 유튜브 플레이리스트를 가져오시겠어요?</GuideText2>
        </GuideWrap>
        <ButtonBlock>
          <ButtonWrap>
            <PeristButton onClick={props.onClose}>플레이리스트 연동하기</PeristButton>
          </ButtonWrap>
          <ButtonWrap>
            <Button onClick={props.onClose}>생성</Button>
          </ButtonWrap>
        </ButtonBlock>
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
  gap: 4px;
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  min-width: 163px;
  display: flex;
  gap: 23px;
`;

const PeristButton = styled.button`
  min-width: 306px;
  border-radius: 8px;
  border-width: 1px;
  padding-top: 16px;
  padding-right: 64px;
  padding-bottom: 16px;
  padding-left: 64px;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B3};

  &:hover {
    background-color: ${({ theme }) => theme.colors[300]};
  }
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
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

const TextAreaContent = styled.textarea`
  display: flex;
  width: 100%;
  min-height: 116px;
  resize: none;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  &::placeholder {
    ${({ theme }) => theme.colors[200]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors[600]};
    color: ${({ theme }) => theme.colors[200]};
  }
`;

const GuideWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuideText1 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;

const GuideText2 = styled.div`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
