import { Calendar } from 'react-calendar';

import Grid from '@mui/material/Grid';

const CalendarR = () => {
  return (
    <Grid item xs={12}>
      <Grid
        margin="0 !important"
        width={"100%"}
        justifyContent={'center'}
        alignItems={'center'}
        container
        column={12}
        spacing={2}
      >
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default CalendarR;
