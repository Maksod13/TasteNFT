import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <Logo src="../images/TasteNFT_logo.png" alt="Logo" />
        </Link>
        <SearchInput onSearch={() => console.log("Search")} />
        <Button
          classname="header__connect--button"
          onClick={handleOpenWallet}
        >
          Connect wallet
        </Button>
        <ProfileButton />
      </div>
      {isWalletOpen && <Wallet onClose={handleCloseWallet} />}
      {isWalletOpen && <div className="blurOverlay" />}
    </header>
  );
};
