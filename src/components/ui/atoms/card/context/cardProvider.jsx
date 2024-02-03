import { createContext, useContext, useMemo } from 'react';

import styled from 'styled-components';

import { useToggle } from '@hooks/useToggle';

const CardContext = createContext();

const CardProvider = ({ cardData, userInfo, setRequestType, children }) => {
  const [isEdit, setIsEdit] = useToggle();

  // Todo: providerValue가 렌더링 될 때 마다 새로 생성되고 있음을 경고해주고 있어서 useMemo훅으로 감싸주었음 (기록필요)
  const providerValue = useMemo(
    () => ({ cardData, userInfo, setRequestType, isEdit, setIsEdit }),
    [cardData, userInfo, setRequestType, isEdit, setIsEdit],
  );

  return (
    <CardContext.Provider value={providerValue}>
      <StCardContainer>{children}</StCardContainer>
    </CardContext.Provider>
  );
};

export default CardProvider;

export const useCardProvider = () => {
  const context = useContext(CardContext);

  if (context === undefined) throw new Error('useCardProvider 는 CardProvider안에서만 사용되어야 합니다.');

  return context;
};

const StCardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  margin-top: 16px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.Grayscale[10]};

  box-shadow: ${({ theme }) => theme.shadow[10]};
`;