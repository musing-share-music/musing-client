import image1 from 'shared/assets/image/main/image1.png';
import image2 from 'shared/assets/image/main/roundimg.png';
import CommunityMusic from 'shared/ui/Main/CommunityMusic';
import GenreMusic from 'shared/ui/Main/GenreMusic';
import HotMusic from 'shared/ui/Main/HotMusic';
import LikeMusic from 'shared/ui/Main/LikeMusic';
import RecommendedMusic from 'shared/ui/Main/RecommendedMusic';

export const Main = () => {
  return (
    <>
      <GenreMusic image={image1} title="Honey" subtitle="TRPP" />
      <LikeMusic image={image1} title="인디고" subtitle="여름아! 부탁해" />
      <HotMusic image={image2} title="그린내" subtitle="실리카겔" />
      <CommunityMusic
        image={image1}
        title="Highway Tune · Greta Van Fleet"
        subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"
      ></CommunityMusic>
      <RecommendedMusic image={image1} title="hathaw9y" />
    </>
  );
};
