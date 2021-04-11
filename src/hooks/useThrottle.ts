import {useCallback} from "react";
import {throttle} from "lodash";

//const log = useThrottle((params) => console.log(params), 1000);
export const useThrottle = (callback: (params?: any) => any, delay: number) => useCallback(throttle((...args) => callback(...args), delay), [delay]);