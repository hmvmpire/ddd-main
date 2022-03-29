import CText from "../CText/CText";
import WrapperCText from "../WrapperCText/WrapperCText";



const Filter = (props) => {


    const { enableOptions, columnHeaders, filterFor, ...desProps } = { ...props };
    const handleOnClick = (ref, value, sortValue) => filterFor(ref, value, sortValue);

    return <>
        <div className="filterCp__main">
            {columnHeaders?.map((item, index) =>
                <WrapperCText id={`filter-ctext-${item}-${index}`} key={`filter-ctext-${item}-${index}`} customClass={"filterCText"}>
                    <CText filterCtext valueFor={item} onClickFor={(e, value, sortValue) => handleOnClick(e, value, sortValue)} />
                </WrapperCText>
            )}
            {enableOptions && <CText customClass={"filteroptions"} key={`filter-ctext-options`} filterCtext valueFor={"Options"} />}

        </div>
    </>

}


export default Filter;

/**
 * 
 *   const handleOnClick = (ref, value, sortValue) => {
        selectedFilter?.map(item => {
            item.current.classList.contains("up") && item.current.classList.remove("up");
            item.current.classList.contains("down") && item.current.classList.remove("down");
        });

        let itemFound = selectedFilter?.find(item => {
            return item === ref;
        })
        if (!itemFound) {
            selectedFilter = [ref];
            selectedFilter.push(ref);
        }

        if (sortValue === "desc") {
            selectedFilter[0].current.classList.add("up");
        } else if (sortValue === "asc") {
            selectedFilter[0].current.classList.add("down");
        }

        filterFor(ref, value, sortValue)
    }
 */