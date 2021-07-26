import { useEffect, useContext, useState } from "react";
import ContentfulContext, { CONTENT_TYPES } from "../../context/contentfulClient";
import Frame from "./frame/frame";

export default function Frames() {
    const client = useContext(ContentfulContext);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        client
            .getEntries({ content_type: CONTENT_TYPES.PICTURE })
            .then(entries => { 
                console.log(entries);
                setPictures(entries["items"].map(entry => <Frame pictureData={entry.fields} key={entry.sys.id}/>));
            })
            .catch(err => console.log(err));
    }, [client]);

    return (<div>{pictures}</div>);
}