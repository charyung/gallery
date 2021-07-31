import { useEffect, useContext, useState } from "react";
import ContentfulContext, { CONTENT_TYPES } from "../../context/contentfulClient";
import Section from "./section/section";

const SECTION_HEADERS = {
    pixel: "Pixel",
    photo: "Photography",
    digital: "Digital",
    traditional: "Traditional",
    other: "Misc."
};

export default function Frames() {
    const client = useContext(ContentfulContext);
    const [sections, setSections] = useState([]);

    const sectionData = {};

    useEffect(() => {
        client
            .getEntries({ content_type: CONTENT_TYPES.PICTURE })
            .then(entries => { 
                entries["items"].forEach(entry => {
                    const type = entry.fields.imageType;
                    if (!(type in sectionData)) {
                        sectionData[type] = [];
                    }

                    sectionData[type].push(entry);
                });
                setSections(Object
                    .keys(sectionData)
                    .map(section => <Section title={SECTION_HEADERS[section] || SECTION_HEADERS["other"]} data={sectionData[section]} key={section}/>));
            })
            .catch(err => console.log(err));
    }, [client]);

    return (<div>{sections}</div>);
}