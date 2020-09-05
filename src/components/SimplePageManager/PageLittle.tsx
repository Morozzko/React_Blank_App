import React from "react";
import {useParams} from 'react-router-dom';


type OwnPropertyType = {
    id: string
}


export default function PageLittle() {



    const {id} = useParams()
    console.log("id: ", id)
    return (
        <div>
            {id}
        </div>


    )

}
