import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import MyModal from "../MyModal/MyModal";
import Settings from "../Settings/Settings";


const AccountInformation = (props) => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        setOpenModal(true)
    };
    const handleClose = () => {
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        setOpenModal(false);
    }

    const { customClass, ...desProps } = { ...props };

    return <>
        <div className={`accountInformation__main  ${customClass ? customClass : ""}`}>
            {props.children}
            <div className="ai_settings" onClick={handleOpen}><FiSettings /></div>
            {openModal && <MyModal closeModal={() => handleClose()} headerFor={<h1>Settings</h1>}>
                <Settings handleCloseFor={handleClose} />
            </MyModal>}
        </div>
    </>
}

export default AccountInformation;