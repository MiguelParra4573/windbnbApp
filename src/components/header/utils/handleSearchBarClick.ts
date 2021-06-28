import React from "react";

export default function handleSearchBarClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>
): void {
  event.preventDefault();
  setIsSearchFilterShown((isSearchFilterShown) => !isSearchFilterShown);
}
