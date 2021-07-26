import Frame from "../frame/frame";

export default function Section({ title, data }) {
    const pictures = data.map(entry => <Frame pictureData={entry.fields} key={entry.sys.id}/>);

    return (
        <>
            <h2>{title}</h2>
            <hr/>
            {pictures}
        </>
    );
}