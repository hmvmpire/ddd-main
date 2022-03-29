import React from 'react';
import Button from '@mui/material/Button';

import { Settings } from '@mui/icons-material';
import CalendarR from './CalendarR';
import SerialC from './SerialC';

import Grid from '@mui/material/Grid';

const Menu = (props) => {
  const { setSeries } = props;
  const { handleOpen } = props;
  const { setValue } = props;
  const { value } = props;
  const { series } = props;

  return (
    <>
      <Grid item xs={4} padding="0 !important">
        <div className='whitBack'>
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
            container
            column={12}
            gap={5}
          >
            <Grid item xs={12}>
              <Grid
                justifyContent={'center'}
                alignItems={'center'}
                container
                column={12}
                spacing={2}
              >
                <Grid item xs={9}>
                  <h3>Rooms</h3>
                </Grid>
                <Grid item xs={3}>
                  <Settings onClick={handleOpen} />
                </Grid>
              </Grid>
            </Grid>

            <CalendarR />
            <SerialC
              setSeries={setSeries}
              series={series}
              setValue={setValue}
              value={value}
            />

            <Grid item xs={12}>
              <Grid
                justifyContent={'center'}
                alignItems={'center'}
                container
                column={12}
                spacing={2}
              >
                <Grid item xs={5}>
                  <Button variant='contained'>Morning</Button>
                </Grid>
                <Grid item xs={5}>
                  <Button variant='contained'>After noon</Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid
                justifyContent={'center'}
                alignItems={'center'}
                container
                column={12}
              >
                <Grid item xs={11}>
                  <Button size='large' variant='outlined'>
                    Booking{' '}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Menu;
