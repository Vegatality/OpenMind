import { useState } from 'react';

import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import InputTextArea from '@components/ui/atoms/input/input-text-area/InputTextArea';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import { StCloseIcon, StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

const AddQuestionModal = ({ userProfile = PROFILE_SAMPLE, userName = '닉네임' }) => {
  const [questionValue, setQuestionValue] = useState('');

  const handleQuestionValue = (event) => {
    setQuestionValue(event.target.value);
  };

  return (
    <StAddQuestionModal>
      <div className='close'>
        <div className='title'>
          <StMessageIcon size={28} color='gray60' />
          <h2>질문을 작성하세요</h2>
        </div>
        <StCloseIcon size={28} color='gray60' />
      </div>
      <StExceptTitle>
        <StQuestionTo>
          To.
          <img src={userProfile} alt='프로필' />
          <span>{userName}</span>
        </StQuestionTo>
        <InputTextArea onChangeHandler={handleQuestionValue}>질문을 입력해주세요</InputTextArea>
        <Button disabled={questionValue.length === 0}>질문 보내기</Button>
      </StExceptTitle>
    </StAddQuestionModal>
  );
};

export default AddQuestionModal;

const StAddQuestionModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 612px;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 40px 40px 70px;
  gap: 40px;

  background: ${({ theme }) => theme.color.Grayscale['10']};

  box-shadow: ${({ theme }) => theme.shadow['3pt']};

  @media (max-width: 660px) {
    width: 100%;
    height: 100%;
    max-height: 568px;
    margin: 24px auto;
  }

  & h2 {
    color: ${({ theme }) => theme.color.Grayscale['60']};
    font-family: Actor;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    @media (max-width: 375px) {
      font-size: 2rem;
    }
  }

  & .title {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  & .close {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StQuestionTo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.color.Grayscale['60']};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;

  & img {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    @media (max-width: 375px) {
      width: 22px;
      height: 22px;
    }
  }
`;

const StExceptTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
