import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useAuthStoreContext } from '../../../features/auth/auth.store';
import Title from '../../../ui-library/components/Title';
import { KittyImg, KittyWrapper } from './KittyScreen.styles';

const KittyScreen: FC = () => {
  const { kittySrc } = useAuthStoreContext();

  return (
    <KittyWrapper>
      <Title>Here, take a cat :з</Title>
      <KittyImg src={kittySrc} alt="kitty" title="boop" />
    </KittyWrapper>
  );
};

export default observer(KittyScreen);
