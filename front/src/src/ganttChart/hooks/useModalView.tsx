import { useCallback, useState } from "react";
import Modal from "../compornents/modal";

export type UseModal = () => [
    ModalWrapper: React.FC<{ children: React.ReactNode }>,
    open: ()=> void,
    close: ()=> void,
]

type Wrapper = {
    children?: React.ReactNode
}

export const useModalView:UseModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen])

    const close = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen])

    const ModalWrapper = useCallback(
        ({ children }:Wrapper) => (
            <Modal isOpen={isOpen} close={close}>
                {children}
            </Modal>
        )
    ,[isOpen, close]);

    return [ModalWrapper, open, close];
};