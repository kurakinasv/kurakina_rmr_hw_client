import { FC, ReactNode } from 'react';
import { Content, PopupWrapper } from './Popup.styles';

type PopupProps = {
  isOpen: boolean;
  children: string | ReactNode;
};

const Popup: FC<PopupProps> = ({ isOpen, children }) => {
  return (
    <PopupWrapper isOpen={isOpen}>
      <Content>{children}</Content>
    </PopupWrapper>
  );
};

export default Popup;
