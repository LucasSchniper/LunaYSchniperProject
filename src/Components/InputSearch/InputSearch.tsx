import { useEffect } from "react";

export interface InputSearchProps {
handleChange: ()=> void;
}

export default function InputSearch ({handleChange}:InputSearchProps){

    useEffect(() =>
{

}, []
)
    return(
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}