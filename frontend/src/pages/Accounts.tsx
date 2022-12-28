import React from 'react';
import { FirstLevelPage } from 'shared/ui/FirstLevelPage/FirstLevelPage';
import { Grid } from 'shared/ui/Grid';

export default function AccountsPage() {
  return (
    <FirstLevelPage>
      <div>План счетов</div>
      <br />
      <Grid />
    </FirstLevelPage>
  );
}
