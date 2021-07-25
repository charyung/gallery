import { useEffect, useContext } from "react";
import ContentfulContext from "../contentfulClient";

export default function Frames() {
    const client = useContext(ContentfulContext);
    useEffect(() => {
        client
            .getEntry("6fw4Q1m37TUmrG2Beg3XV0")
            .then(entry => console.log(entry))
            .catch(err => console.log(err));
    }, [client]);

    return (<div>a</div>);
}