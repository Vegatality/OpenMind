import { useEffect, useState } from 'react';

import { postAnswer } from '@api/answers/postAnswer';
import { useAsync } from '@hooks/useAsync';

import Button from '../Button/Button';
import InputTextArea from '../input/input-text-area/InputTextArea';
import RejectReplyButton from '../reject-reply/RejectReplyButton';

const ReplyBox = ({ toggleRerenderTrigger, questionId }) => {
  const [replyValue, setReplyValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { setAsyncFunction: postAnswerAsync } = useAsync(postAnswer);
  const { setAsyncFunction: setAsyncReplyRejectFunction } = useAsync(postAnswer);

  useEffect(() => {
    if (replyValue !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [replyValue]);

  const handleReplyValue = (event) => {
    setReplyValue(event.target.value);
  };

  const handleReplySubmitClick = async () => {
    const isRejected = false;
    const res = await postAnswerAsync(questionId, replyValue, isRejected);
    toggleRerenderTrigger();

    return res;
  };

  const handleReplyRejectClick = async () => {
    const content = '거절된 질문입니다.';
    const isRejected = true;
    const res = await setAsyncReplyRejectFunction(questionId, content, isRejected);
    toggleRerenderTrigger();

    return res;
  };

  return (
    <>
      <InputTextArea onChangeHandler={handleReplyValue}>답변을 입력해주세요</InputTextArea>
      <Button theme='brown40' width='100%' disabled={isDisabled} onClickHandler={handleReplySubmitClick}>
        답변 완료
      </Button>
      <RejectReplyButton onClickHandle={handleReplyRejectClick} />
    </>
  );
};

export default ReplyBox;
