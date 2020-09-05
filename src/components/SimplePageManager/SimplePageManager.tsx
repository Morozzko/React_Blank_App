import React from "react";
import { NavLink} from "react-router-dom";


export default function SimplePageManager() {


    let arr: number[] = []

    for (let i: number = 0; i < 10; i++) {
        arr.push(i)
    }


    return (
        <div>
            {arr.map(ele => {
                return (
                    <div>
                        <NavLink to={`/simple/${ele}`}>{ele}</NavLink>
                    </div>)


            })}
        </div>
    )

}
