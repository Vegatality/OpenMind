import { useCallback, useEffect, useState } from 'react';

// 로딩과 에러 메시지를 적을 상태 저장
// getAsyncFunction에 원하는 api 호출 함수가 들어가야한다.
// 특정 이벤트 발생 없을때도 바로 받아 올 수 있다.

export const useAsync = (getAsyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState();

  const setAsyncFunction = useCallback(
    async (...args) => {
      try {
        setError(null);
        setLoading(true);

        const data = await getAsyncFunction(...args);

        setResult(data);

        return data;
      } catch (error) {
        setError(error);

        return;
      } finally {
        setLoading(false);
      }
    },
    [getAsyncFunction],
  );

  useEffect(() => {
    // 렌더링되자마자 호출되도록
    setAsyncFunction();
  }, [setAsyncFunction]);

  return [loading, error, result];
};
