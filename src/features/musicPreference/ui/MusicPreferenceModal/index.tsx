import { useEffect, useState } from 'react';
import { useTransitionState } from 'react-transition-state';

import { useGetGenre, useGetMood, usePostArtist, usePostGenre, usePostMood } from 'features/musicPreference/api';
import { Step, StepContent } from 'features/musicPreference/model/type';

// import { GENRE, GenreId } from 'entities/genre/model/genre';
// import { MOOD, MoodId } from 'entities/mood/model/mood';

import { useUserInfoStore } from 'shared/store/userInfo';
import { CheckBox, Chip, Modal, RightArrowButton, TextInput } from 'shared/ui/';

import { Caption, ChipBlock, Container, durationMs, Footer, Form, Header, ModalCaption } from './styled';

type Artist = string;

const handleCheck = <T extends number>(
  e: React.ChangeEvent<HTMLInputElement>,
  updateState: React.Dispatch<React.SetStateAction<Set<T>>>,
) => {
  const { id, checked } = e.target;

  updateState((prev) => {
    const updatedSet = new Set(prev);

    if (checked) {
      updatedSet.add(Number(id) as T);
    } else {
      updatedSet.delete(Number(id) as T);
    }

    return updatedSet;
  });
};

interface GenreType {
  id: number;
  genreName: string;
}

interface MoodType {
  id: number;
  moodName: string;
}

export const MusicSelectionModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [{ status }, toggle] = useTransitionState({ timeout: durationMs });

  const [step, setStep] = useState<Step>('genre');
  const [selectedGenres, setSelectedGenres] = useState<Set<number>>(new Set());
  const [selectedMoods, setSelectedMoods] = useState<Set<number>>(new Set());
  const [artist, setArtist] = useState<Set<Artist>>(new Set());
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  //사용자 정보
  const { userInfo } = useUserInfoStore();

  //api call
  const [Genredata] = useGetGenre();
  const [Mooddata] = useGetMood();
  const genreMutation = usePostGenre();
  const moodMutation = usePostMood();
  const artistMutation = usePostArtist();

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
          {userInfo.name}님이 선호하는 <strong>장르</strong>를 선택해 주세요!
        </>
      ),
      form: (
        <>
          {Genredata?.data?.map(({ id, genreName }: GenreType) => (
            <CheckBox
              key={id}
              id={id.toString()}
              text={genreName}
              name={id.toString()}
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
          {Mooddata?.data?.map(({ id, moodName }: MoodType) => (
            <CheckBox
              key={id}
              id={id.toString()}
              text={moodName}
              name={id.toString()}
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
                if (e.nativeEvent.isComposing) return;
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
    toggle(false);

    switch (step) {
      case 'genre':
        genreMutation.mutate(Array.from(selectedGenres));
        setStep('mood');
        break;
      case 'mood':
        moodMutation.mutate(Array.from(selectedMoods));
        setStep('artist');
        break;
      default:
        artistMutation.mutate(Array.from(artist), {
          onSuccess: () => {
            onClose();
          },
        });
        break;
    }

    toggle(true);
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
