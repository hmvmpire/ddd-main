import React, { useEffect, useState } from 'react';
import Table from './Table.js';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import ModalPopUp from '../Modal/ModalPopUp.js';
import x from '../RoomData/tableInfo';
import Menu from '../SideMenu/Menu';
import MyModal from '../../MyModal/MyModal.js';
import Settings from '../../Settings/Settings.js';

const Room = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    setOpen(true)
  };
  const handleClose = () => {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    setOpen(false);
  }
  const params = useParams();
  const roomId = params.roomId ? params.roomId : 0;

  // const allOtherValuesFromHistory = params.sendedData;

  const [series, setSeries] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [rooms, setRooms] = useState(x);

  const changeReservation = (roomName, tableName) => {
    rooms.forEach((data, index) => {
      if (data.room === roomName) {
        data.tables.tableData.forEach((tableArr, TableIndex) => {
          tableArr.forEach((table, tableNoIndex) => {
            if (table.name === tableName) {
              rooms[index].tables.tableData[TableIndex][tableNoIndex].reserve =
                !rooms[index].tables.tableData[TableIndex][tableNoIndex]
                  .reserve;

              console.log(rooms);
              let arr = [...rooms];
              setRooms(arr);
            }
          });
        });
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='workRoom'>
        <div className='firstPlace'>
          <Grid container column={12} spacing={2} height="100%" margin="0" width="100%">
            <Grid item xs={8} padding="0 !important">
              <Table
                changeReserve={(roomName, tableName) => {
                  changeReservation(roomName, tableName);
                }}
                data={rooms[roomId]}
              />
            </Grid>
            <Menu
              setSeries={setSeries}
              handleOpen={handleOpen}
              setValue={setValue}
              value={value}
              series={series}
            />
          </Grid>
        </div>
        {/*<ModalPopUp setOpen={setOpen} open={open} />*/}
        {open && <MyModal closeModal={() => handleClose()} headerFor={<h1>Settings</h1>}>
          <Settings handleCloseFor={handleClose}/>
        </MyModal>}
      </div>
    </>
  );
};


export default Room;

// <img  alt="ok" src={require('./../../assets/building.jpg')} />
