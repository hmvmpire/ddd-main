


const MyButton = (props) => {

    const { customClass, displayText, valueFor, onClickFor, ...desProps } = { ...props };
    const handleOnClick = (e) => onClickFor(e.target.value);

    return <>
        <button className={`mybutton ${customClass ? customClass : ""}`} value={valueFor} onClick={handleOnClick}> {displayText ? displayText : valueFor}</button>
    </>

}


export default MyButton;