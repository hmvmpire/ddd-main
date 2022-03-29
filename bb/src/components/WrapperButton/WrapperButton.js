


const WrapperButton = (props) => {

    const { customClass, ...desProps } = { ...props };

    return <>
        <div className={`wrapperButton__main ${customClass ? customClass : ""}`}>
            {props.children}
        </div>
    </>

}


export default WrapperButton;