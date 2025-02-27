import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { main } from '../../assets/styles/palettes';
import getReasonablePrice from '../../services/report/getReasonablePrice';
import EmptyData from '../common/EmptyData';
import { FlexColBox } from '../common/FlexColBox';
import { FlexRowBox } from '../common/FlexRowBox';
import LoadingSpinner from '../common/LoadingSpinner';
import { useEffect, useState } from 'react';
import getUserTargetPrice from '../../services/user/getUserTargetPrice';

function ReportReasonable() {
  const { id: stringId } = useParams<{ id?: string }>();
  const id = stringId ? parseInt(stringId, 10) : null;
  const { isLoading: reasonableLoading, data: reasonableData } = useQuery({
    queryKey: ['get-Reasonable', id],
    queryFn: () => (id !== null ? getReasonablePrice(id) : Promise.reject(new Error('ID is null'))),
  });
  console.log(reasonableData);

  const [myTargetPrice, setMytargetPrice] = useState<number | null | undefined>(null);

  useEffect(() => {
    const getTargetPrice = async () => {
      try {
        const response = await getUserTargetPrice();
        if (response) {
          const mytarget = response.target_price_list.find((target) => target.ingredient_id === id);
          const mytargetPrice = mytarget?.target_price;
          setMytargetPrice(mytargetPrice);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTargetPrice();
  }, []);

  function attachParticle(word: string) {
    const lastChar = word.charAt(word.length - 1);
    const uni = lastChar.charCodeAt(0);
    const lastCharIndex = uni - 0xac00;
    const jongIndex = lastCharIndex % 28;

    // 받침이 있으면 "을", 없으면 "를" 반환
    return jongIndex ? word + '을' : word + '를';
  }

  if (reasonableLoading) {
    return <LoadingSpinner />;
  }

  if (!reasonableData) {
    return <EmptyData />;
  }

  let diff = 0;
  if (myTargetPrice) {
    diff = reasonableData.price - myTargetPrice;
  }

  return (
    <div>
      <FlexColBox
        $padding="40px 30px 60px 30px"
        $justifyContent="center"
        $alignItems="center"
        $gap="1.5vh"
        style={{ fontFamily: 'NanumSquareRoundB' }}
      >
        <MainImg src={reasonableData.img} />
        <div>{reasonableData.name}의 적정 소비 금액</div>

        {diff > 0 ? (
          <div>
            <PointText>{reasonableData.price}원</PointText>
            <FlexRowBox>
              <PointText>(목표가 대비</PointText>
              <PointText style={{ color: 'red' }}>+{diff.toLocaleString('ko-KR')}</PointText>
              <PointText>원)</PointText>
            </FlexRowBox>
          </div>
        ) : diff < 0 && diff !== reasonableData.price ? (
          <div>
            <PointText>{reasonableData.price}원</PointText>
            <FlexRowBox>
              <PointText>(목표가 대비</PointText>
              <PointText style={{ color: 'blue' }}>{diff.toLocaleString('ko-KR')}</PointText>
              <PointText>원)</PointText>
            </FlexRowBox>
          </div>
        ) : (
          <div>
            <PointText>{reasonableData.price.toLocaleString('ko-KR')}원</PointText>
          </div>
        )}
        <div>지금 많은 사람들이 {attachParticle(reasonableData.name)}</div>
        <FlexRowBox>
          <PointText style={{ fontSize: '15px' }}>{reasonableData.price.toLocaleString('ko-KR')}</PointText>
          <div>원에 사고 싶어해요.</div>
        </FlexRowBox>
      </FlexColBox>
    </div>
  );
}

export default ReportReasonable;

const PointText = styled.h2`
  color: ${main};
  word-break: keep-all;
  text-align: center;
`;

const MainImg = styled.img`
  width: 260px;
  height: 220px;
  border-radius: 10px;
  margin: 15px;
`;
