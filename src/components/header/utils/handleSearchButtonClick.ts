import React from "react";
import { Dispatch } from "redux";

import handleSearchBarClick from "./handleSearchBarClick";

export default function handleSearchButtonClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>,
  city: string,
  maxGuests: number,
  dispatch: Dispatch
): void {
  if (maxGuests) {
    dispatch({ type: "FILTER_STAY_DATA", payload: { city, maxGuests } });
    handleSearchBarClick(event, setIsSearchFilterShown);
  } else {
    alert("Please add more than 1 member please");
  }
}
