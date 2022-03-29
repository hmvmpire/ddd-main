


const ContentWrapper = (props) => {

    const {customClass, ...desProps} = {...props};

    return <>
        <div className={`wrapperContent__main ${customClass ? customClass : ""}`}>
            {props.children}
        </div>
    </>

}


export default ContentWrapper;