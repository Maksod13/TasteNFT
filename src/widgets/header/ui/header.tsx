import React, { useState } from "react";
import { Button } from "../../../shared/ui/button";
import { SearchInput } from "../../../features/input";
import { Logo } from "../../../shared/ui/logo";
import { ProfileButton } from "../../../features/profile/profileButton";
import { Wallet } from "../../../features/wallet";
import "./header.scss";

export const HeaderComponent = () => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const handleOpenWallet = () => {
    setIsWalletOpen(true);
  };

  const handleCloseWallet = () => {
    setIsWalletOpen(false);
  };

  return (
    <header className="Header">
      <div className="header__inner container">
        <Logo src="../images/TasteNFT_logo.png" alt="Logo" />
        <SearchInput onSearch={() => console.log("Search")} />
        <Button
          children="Connect wallet"
          classname="header__connect--button"
          onClick={handleOpenWallet}
        />
        <ProfileButton />
      </div>
      {isWalletOpen && <Wallet onClose={handleCloseWallet} />}
      {isWalletOpen && <div className="blurOverlay" />}
    </header>
  );
};
