



const Seatdata = (props) => {



    const { customClass, ...desProps } = { ...props };


    return <>
        <div className={`seatdata__main ${customClass ? customClass : ""}`}>
            {props.children}
        </div>

    </>


}


export default Seatdata;