import React, { PropsWithChildren } from 'react';
import * as Styles from './styles';

export function FirstLevelPage({ children }: PropsWithChildren) {
  return (
    <Styles.Page>
      <Styles.Header>Счетовод</Styles.Header>
      {children}
    </Styles.Page>
  );
}
