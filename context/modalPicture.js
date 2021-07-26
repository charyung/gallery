import { createContext } from "react";

const ModalPictureContext = createContext({
    pictureUrl: null,
    setPictureUrl: () => {}
});

export default ModalPictureContext;