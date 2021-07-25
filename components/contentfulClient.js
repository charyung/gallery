import { createContext } from "react";
import * as contentful from "contentful";

const CONTENT_TYPES = {
    IMAGE: "image",
    THUMBNAIL: "thumbnail"
};

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
});

const ContentfulContext = createContext();

export default ContentfulContext;
export { client, CONTENT_TYPES };