import { FC } from "react"

type ModalProps = {
    isOpen: boolean,
    close:() => void,
    children?: React.ReactNode,
}

const Modal:FC<ModalProps> = ({isOpen, close, children}) => {

    return (
        <>
            {isOpen &&
                <div id="Overlay" className="fixed w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-10" onClick={() => close()}>
                    <div id="ModalBase" className="relative" onClick={e => {e.stopPropagation();}}>
                        <div className="close-btn absolute top-1 right-1">
                            <button className="font-bold text-gray-500 rounded-full h-10 w-10 flex items-center justify-center" onClick={() => close()}>✕</button>
                        </div>
                        { children }
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;