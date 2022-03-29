import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const SerialC = (props) => {
  const { setValue } = props;
  const { value } = props;
  const { series } = props;
  const { setSeries } = props;
  return (
    <Grid item xs={12}>
      {series === true ? (
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          container
          column={12}
          spacing={2}
        >
          <Grid item xs={10}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText='Check-in'
                endText='Check-out'
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </>
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      ) : (
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          container
          column={12}
          spacing={2}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label='Date '
              inputFormat='MM/dd/yyyy'
              value={value}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      )}

      <Grid item xs={12}>
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          container
          column={12}
        >
          <Grid item xs={11}>
            <Button
              onClick={() => setSeries(!series)}
              size='large'
              variant='outlined'
            >
              Series{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          container
          column={12}
          gap={2}
        >
          <Grid item xs={1} md={2}>
            <Button variant='outlined' size='small'>
              M
            </Button>
          </Grid>
          <Grid item xs={1} md={2}>
            <Button variant='outlined' size='small'>
              T
            </Button>
          </Grid>
          <Grid item xs={1} md={2}>
            <Button variant='outlined' size='small'>
              W
            </Button>
          </Grid>
          <Grid item xs={1} md={2}>
            <Button variant='outlined' size='small'>
              T
            </Button>
          </Grid>
          <Grid item xs={1} md={2}>
            <Button variant='outlined' size='small'>
              F
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SerialC;
