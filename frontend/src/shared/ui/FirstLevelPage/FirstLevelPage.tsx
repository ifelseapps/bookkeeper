import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/ui/Logo/Logo';
import * as Styles from './styles';

export function FirstLevelPage({ children }: PropsWithChildren) {
  return (
    <Styles.Page>
      <Styles.Header>
        <Styles.Container>
          <Logo />
          <ul>
            <li>
              <Link to="/settings/accounts">План счетов</Link>
            </li>
          </ul>
        </Styles.Container>
      </Styles.Header>
      <Styles.Container>{children}</Styles.Container>
      <Styles.Footer>
        <Styles.Container>Footer</Styles.Container>
      </Styles.Footer>
    </Styles.Page>
  );
}
