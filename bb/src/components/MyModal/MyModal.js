import MyButton from "../MyButton/MyButton";




const MyModal = (props) => {


    const handleOnClick = () => {
        props.closeModal();
    }

    const { customClass, headerFor, footerFor, children, ...desProps } = { ...props };


    return <>
        <div className="myModal__main" >
            <div className="myModal__content">
                {<div className="myModal__header">
                    {headerFor && headerFor}
                    <MyButton customClass={"close_button"} valueFor={"X"} onClickFor={handleOnClick} />
                </div>}
                <div className="myModal__body">
                    {children}
                </div>
                {footerFor && <div className="myModal__footer">
                    {footerFor}
                </div>}
            </div>
        </div>
    </>

}


export default MyModal;