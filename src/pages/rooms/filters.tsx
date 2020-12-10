import React, { FC, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { getFiltersStyles } from './styles';
import { IRoom, IRoomLevel, ISelectOption } from '../../types';
import Select from '../../components/common/select';

interface IProps {
  setRooms: (rooms: IRoom[]) => void;
  roomLevels: IRoomLevel[];
  options: ISelectOption[];
}

const Filters: FC<IProps> = ({ setRooms, roomLevels, options }) => {
  const [number, setNumber] = useState<number | null>(null);
  const [selectedOption, selectOption] = useState<string>('');

  const classes = getFiltersStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item md={1}>
          <Typography variant='h4'>Filters</Typography>
        </Grid>
        <Grid container item md={11}>
          <Grid item container sm={12} md={8} style={{ gap: '1rem' }} alignItems='center'>
            <TextField id='outlined-basic' label='Room number' variant='outlined' />
            <Select
              options={options}
              selectedOption={selectedOption}
              label='Room level'
              onSelectOption={selectOption}
            />
          </Grid>
          <Grid item sm={8} md={2}>
            <Button>Clear</Button>
          </Grid>
          <Grid item sm={4} md={2}>
            <Button color='primary' variant='contained'>
              Apply
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Filters;
