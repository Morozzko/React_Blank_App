import JSUtils from "../../../utils/functions";
import React, {FC} from "react";


type OwnPropertyType = {
    text: string
    highlight: string[] | string
    color?: string
    backgroundColor?: string
}

const HighLighter: FC<OwnPropertyType> = (props) => {


    function splitByRegex(text: string | string[], reg: string) {
        if (Array.isArray(text)) {
            let arr: any[] = []
            for (let i = 0; i < text.length; i++) {
                const array = text[i]?.split(new RegExp(`(${reg})`, 'gi'));
                arr = arr.concat(JSUtils.ArrayDecomposition(array.filter(ele => !!(ele.length))))
            }
            return arr

        } else {
            const array = text?.split(new RegExp(`(${reg})`, 'gi'));
            return array.filter(ele => !!(ele.length))
        }


    }


    if (Array.isArray(props.highlight)) {
        let acc = [props.text]
        for (let i = 0; i < props.highlight.length; i++) {
            acc = JSUtils.ArrayDecomposition(splitByRegex(acc, props.highlight[i]))
        }

        return (
            <span>
                {acc.map((part, i) => {
                    return (
                        <span key={i}
                              style={
                                  Array.isArray(props.highlight)
                                  &&
                                  props.highlight.find(ele => part.toLowerCase() == ele.toLowerCase()) ?
                                      {
                                          color: props.color ? props.color : "red",
                                          backgroundColor: props.backgroundColor && props.backgroundColor
                                      } : {}}>
                            {part}
                        </span>
                    )
                })}
            </span>
        )

    } else {
        const parts = props.text.split(new RegExp(`(${props.highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => {
                    return (
                        <span key={i}
                              style={part.toLowerCase() === props.highlight.toString().toLowerCase() ? {color: "red"} : {}}>
                            {part}
                        </span>
                    )
                })}
            </span>
        )
    }
}


export default React.memo(HighLighter)