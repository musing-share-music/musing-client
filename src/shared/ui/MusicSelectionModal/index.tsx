import styled from '@emotion/styled';
import { useState } from 'react';
import { useTransitionState } from 'react-transition-state';

import IconCloseSvg from 'shared/assets/image/icons/icon-close.svg?react';
import { commonStyles } from 'shared/styles/common';
import { GENRE } from 'shared/types/genre';
import { MOOD } from 'shared/types/mood';
import { CheckBox, Modal, RightArrowButton, TextInput } from 'shared/ui/';

import { Body, Caption, Container, durationMs, Footer, Header, ModalCaption } from './styled';
import { Step, StepContent } from './type';

export const MusicSelectionModal = () => {
  const [{ status }, toggle] = useTransitionState({ timeout: durationMs });
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState<Step>('genre');

  const stepContents: StepContent = {
    genre: {
      title: (
        <>
          반가워요! <br /> 뮤징에 오신 것을 환영해요.
        </>
      ),
      caption: (
        <>
          태리님이 선호하는 <strong>장르</strong>를 선택해 주세요!
        </>
      ),
      body: (
        <>
          {GENRE.map(({ text }) => (
            <CheckBox key={text} id={text} text={text} />
          ))}
        </>
      ),
    },
    mood: {
      title: <>좋은 취향이네요!</>,
      caption: <>다음으로 즐겨 듣는 음악의 분위기를 선택해 주세요.</>,
      body: (
        <>
          {MOOD.map(({ text }) => (
            <CheckBox key={text} id={text} text={text} />
          ))}
        </>
      ),
    },
    artist: {
      title: <>마지막으로, 좋아하는 아티스트가 있나요?</>,
      caption: <>좋아하는 아티스트를 추가해 주세요.</>,
      body: (
        <Form>
          <TextInput placeholder="아티스트명을 입력해주세요." />
          <Chip />
        </Form>
      ),
    },
  };

  const goNextStep = () => {
    toggle(false); // 다음 전환 애니메이션을 시작하기 위해 종료

    switch (step) {
      case 'genre':
        setStep('mood');
        break;
      case 'mood':
        setStep('artist');
        break;
      default:
        break;
    }

    toggle(true); // 전환 애니메이션 시작
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Container>
        <Header>
          <Modal.Title>{stepContents[step].title}</Modal.Title>
          <Caption>{stepContents[step].caption}</Caption>
        </Header>
        <Body status={status} step={step}>
          {stepContents[step].body}
        </Body>
        <Footer step={step}>
          <ModalCaption>최소 1개 이상의 태그를 선택해 주세요.</ModalCaption>
          <RightArrowButton onClick={() => goNextStep()} />
        </Footer>
      </Container>
    </Modal>
  );
};

const Form = styled.form``;

const Chip = () => {
  return (
    <>
      <ChipWrapper>
        <CloseButton>
          <IconCloseSvg width={16} />
        </CloseButton>
      </ChipWrapper>
    </>
  );
};

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[500]};
  ${commonStyles.hoverTransition}

  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
`;
