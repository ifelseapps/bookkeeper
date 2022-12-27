import React, { PropsWithChildren } from 'react';
import * as Styles from './styles';

export function FirstLevelPage({ children }: PropsWithChildren) {
  return (
    <Styles.Page>
      <Styles.Header>
        <Styles.Container>Счетовод</Styles.Container>
      </Styles.Header>
      <Styles.Container>{children}</Styles.Container>
      <Styles.Footer>
        <Styles.Container>Footer</Styles.Container>
      </Styles.Footer>
    </Styles.Page>
  );
}
