import { useRef, useLayoutEffect, useState } from "react";
import { useMeasure } from "react-use";

const useParentArea = () => {
    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();

    const ref = useRef();
    const [dimensions, setDimensions] = useState({});
    useLayoutEffect(() => {

    }, [ref]);
    return [ref, dimensions];
};