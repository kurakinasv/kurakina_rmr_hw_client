import { FC } from 'react';
import { LoaderWrapper, StyledLoader } from './Loader.styles';

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <StyledLoader />
    </LoaderWrapper>
  );
};

export default Loader;
