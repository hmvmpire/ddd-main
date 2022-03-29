import MyButton from '../MyButton/MyButton';
import WrapperButton from '../WrapperButton/WrapperButton';
import WrapperImage from '../WrapperImage/WrapperImage';
import tableInformations from '../Room/RoomData/tableInfo';
import { useNavigate } from 'react-router-dom';



const Settings = (props) => {
    let navigate = useNavigate();
    const { customClass, handleCloseFor, ...desProps } = { ...props };

    return <>
        <div className='settings__main'>
            <WrapperImage>
                <img
                    alt='grundriss_bcm_etage'
                    src={require('../../assets/building2.png')}
                />
            </WrapperImage>
            <WrapperButton customClass={"column"}>
                {tableInformations?.map((item, index) => {
                    if (item.roomId === 0)
                        return;
                    return <MyButton key={`room-mybuttons-${index}`} customClass={"primary"} displayText={`${item.roomId} ${item.roomName}`} valueFor={item.roomId} onClickFor={(value) => {
                        navigate(`/booking/${value}`);
                        handleCloseFor();
                    }} />
                })}
            </WrapperButton>
        </div>
    </>
}

export default Settings;
