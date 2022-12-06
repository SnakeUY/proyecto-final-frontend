import React from "react";

const TableType =(props)=>{
    return(
        <span className={`${props.type.toLowerCase()} type`}>{props.type}</span>
    )
}
export default TableType
