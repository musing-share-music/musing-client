import { useEffect, useState } from 'react';
import { useTransitionState } from 'react-transition-state';

import { Genre, GENRE } from 'shared/types/genre';
import { Mood, MOOD } from 'shared/types/mood';
import { CheckBox, Modal, RightArrowButton, TextInput } from 'shared/ui/';

import { Chip } from './Chip';
import { Caption, ChipBlock, Container, durationMs, Footer, Form, Header, ModalCaption } from './styled';
import { Step, StepContent } from './type';

type GenreId = Genre['id'];
type MoodId = Mood['id'];
type Artist = string;

const handleCheck = <T extends string>(
  e: React.ChangeEvent<HTMLInputElement>,
  updateState: React.Dispatch<React.SetStateAction<Set<T>>>,
) => {
  const { id, checked } = e.target;

  updateState((prev) => {
    const updatedSet = new Set(prev);

    if (checked) {
      updatedSet.add(id as T);
    } else {
      updatedSet.delete(id as T);
    }

    return updatedSet;
  });
};

export const MusicSelectionModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [{ status }, toggle] = useTransitionState({ timeout: durationMs });

  const [step, setStep] = useState<Step>('genre');
  const [selectedGenres, setSelectedGenres] = useState<Set<GenreId>>(new Set());
  const [selectedMoods, setSelectedMoods] = useState<Set<MoodId>>(new Set());
  const [artist, setArtist] = useState<Set<Artist>>(new Set());
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleGenreCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheck(e, setSelectedGenres);
  };

  const handleMoodCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheck(e, setSelectedMoods);
  };

  const addArtist = (artist: Artist) => {
    if (!artist.trim()) return;

    setArtist((prev) => {
      const updatedArtist = new Set(prev);

      // TODO 이미 추가된 경우
      updatedArtist.add(artist);

      return updatedArtist;
    });
  };

  const deleteArtist = (artist: Artist) => {
    setArtist((prev) => {
      const updatedArtist = new Set(prev);
      updatedArtist.delete(artist);

      return updatedArtist;
    });
  };

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
      form: (
        <>
          {GENRE.map(({ id, text }) => (
            <CheckBox
              key={id}
              id={id}
              text={text}
              name={id}
              checked={selectedGenres.has(id)}
              onChange={handleGenreCheck}
            />
          ))}
        </>
      ),
    },
    mood: {
      title: <>좋은 취향이네요!</>,
      caption: <>다음으로 즐겨 듣는 음악의 분위기를 선택해 주세요.</>,
      form: (
        <>
          {MOOD.map(({ id, text }) => (
            <CheckBox
              key={id}
              id={id}
              text={text}
              name={id}
              checked={selectedMoods.has(id)}
              onChange={handleMoodCheck}
            />
          ))}
        </>
      ),
    },
    artist: {
      title: <>마지막으로, 좋아하는 아티스트가 있나요?</>,
      caption: <>좋아하는 아티스트를 추가해 주세요.</>,
      form: (
        <>
          <TextInput
            placeholder="아티스트명을 입력해주세요."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (e.nativeEvent.isComposing) return; // 한글 입력시, 마지막 글자가 추가되는 현상 방지
                addArtist(inputValue);
                setInputValue('');
              }
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ChipBlock>
            {Array.from(artist).map((artistItem) => (
              <Chip
                key={artistItem}
                text={artistItem}
                onDelete={() => {
                  deleteArtist(artistItem);
                }}
              />
            ))}
          </ChipBlock>
        </>
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

  useEffect(() => {
    const stepsValidation = {
      genre: () => selectedGenres.size > 0,
      mood: () => selectedMoods.size > 0,
      artist: () => artist.size > 0,
    };

    setIsValid(stepsValidation[step]());
  }, [artist.size, selectedGenres.size, selectedMoods.size, step]);

  return (
    <Modal open={open} onClose={() => onClose()}>
      <Container>
        <Header>
          <Modal.Title>{stepContents[step].title}</Modal.Title>
          <Caption>{stepContents[step].caption}</Caption>
        </Header>
        <Form status={status} step={step}>
          {stepContents[step].form}
        </Form>
        <Footer step={step}>
          <ModalCaption>최소 1개 이상의 태그를 선택해 주세요.</ModalCaption>
          <RightArrowButton
            iconColor={isValid ? 'primary1' : 300}
            disabled={!isValid}
            hoverBackgroundColor={isValid ? 300 : 500}
            onClick={() => goNextStep()}
          />
        </Footer>
      </Container>
    </Modal>
  );
};
