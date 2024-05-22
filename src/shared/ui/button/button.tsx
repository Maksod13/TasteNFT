import "./button.scss"
import { FC, ReactNode, useEffect, useState } from "react"
import { MaterialSymbolsWallet } from "../../../shared/assets/icons/walletIcon"


interface IButton {
    children?:ReactNode
    classname: string
    onClick: () => void
    
}

export const Button: FC<IButton> = (props) => {
    const {
        children,
        classname,
        onClick
    } = props

    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576)
        }  
         handleResize()

            window.addEventListener("resize", handleResize)

            return () => {
                window.removeEventListener("resize" , handleResize)
            }
    } , [])

    return (
        <button type="button"
            onClick={onClick}
            className={`ibutton ${classname}`}>
            {isSmallScreen ? <MaterialSymbolsWallet /> : children}

        </button>
    )
}

