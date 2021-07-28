import { createContext } from "react";

const ModalPictureContext = createContext({
    pictureData: null,
    setPictureData: () => {}
});

export default ModalPictureContext;