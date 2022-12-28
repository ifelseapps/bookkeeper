import React from 'react';
import { TbAbacus as Icon } from 'react-icons/tb';
import * as Styles from './styles';

export function Logo() {
  return (
    <Styles.LogoWrapper>
      <Icon />
      <Styles.Name>Счетовод</Styles.Name>
    </Styles.LogoWrapper>
  );
}
