require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    reactStrictMode: true,
    env: {
        CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
    },
    assetPrefix: isProd ? "/gallery" : ""
};
