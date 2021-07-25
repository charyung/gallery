require("dotenv").config();

module.exports = {
    reactStrictMode: true,
    env: {
        CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
    }
};
