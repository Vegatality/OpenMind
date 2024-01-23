import { css } from 'styled-components';

import { StHamburger } from '../sprite-icon/SpriteIcon';
import { useDropDownProvider } from './context/DropdownProvider';

const DropdownHamburger = () => {
  const { toggleIsOpen } = useDropDownProvider();

  return (
    <button
      type='button'
      css={css`
        padding: 0;
        display: flex;
      `}
      onClick={toggleIsOpen}
    >
      <StHamburger $size={24} $color='gray60' />
    </button>
  );
};

export default DropdownHamburger;