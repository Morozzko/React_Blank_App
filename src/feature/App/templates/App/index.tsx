import React, {FC} from "react";
import {AppStyle} from "./style";
import AppRouter from "../../../Router";
import JSUtils from "../../../../utils/functions";


function getHighlightedText(text: string, highlight: string[] | string) {


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


    if (Array.isArray(highlight)) {
        let acc = [text]


        for (let i = 0; i < highlight.length; i++) {
            acc =  JSUtils.ArrayDecomposition(splitByRegex(acc, highlight[i]))

        }

        return (
            <span>
                {acc.map((part, i) => {
                    return (
                        <span key={i}
                              style={highlight.find(ele => part.toLowerCase() == ele.toLowerCase()) ? {color: "red"} : {}}>
                            {part}
                        </span>
                    )
                })}
            </span>
        )

    } else {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => {
                    return (
                        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? {color: "red"} : {}}>
                            {part}
                        </span>
                    )
                })}
            </span>
        )
    }
}

const App: FC = (props) => {

    return (
        <AppStyle>

            {
                getHighlightedText("wqdaewqe qwfe da  0 fg 1 dqw dqw qw 2 ab 3 da 4 ab 5 fg",
                    ["fg", "qw", "ab", "da"])
            }

            <AppRouter/>
        </AppStyle>
    )
}

export default App;
