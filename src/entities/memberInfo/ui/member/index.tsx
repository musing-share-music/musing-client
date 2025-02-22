import styled from '@emotion/styled';

import { MemberInfo } from 'entities/memberInfo/model/types';

import { MemberCommunity } from './MemberCommunity';
import { MemberPreference } from './MemberPreference';
import { MemberReviewList } from './MemberReviewList';

export type MemberInfoProps = {
  memberInfo: MemberInfo;
};

export const MemberInfoPage = ({ memberInfo }: MemberInfoProps) => {
  return (
    <MainContents>
      {memberInfo ? <MemberPreference onConfirm={function (): void {}} memberInfoItem={memberInfo?.data} /> : null}
      {memberInfo ? <MemberCommunity boardDtos={memberInfo?.data.boardDtos} /> : null}
      {memberInfo ? <MemberReviewList replyDtos={memberInfo?.data.replyDtos} /> : null}
    </MainContents>
  );
};

const MainContents = styled.div`
  width: 100%;
  height: 2832px;
`;
