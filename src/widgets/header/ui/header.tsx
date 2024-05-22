import "./header.scss"
import { Button } from "../../../shared/ui/button"
import { SearchInput } from "../../../features/input"
import { Logo } from "../../../shared/ui/logo"
import { ProfileButton } from "../../../features/profile/profileButton"

export const HeaderComponent = () => {
  return <header className="Header ">
    <div className="header__inner container">
      <Logo src="../images/TasteNFT_logo.png" alt="Logo" />
      <SearchInput onSearch={() => console.log("Search")} />
      <Button children="Connect wallet" classname="header__connect--button" onClick={() => console.log("clicked")} />
      <ProfileButton />
    </div>
  </header>
}
