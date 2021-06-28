import React from "react";
import { Dispatch } from "redux";

export default function handleLocationChangeClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  location: string,
  dispatch: Dispatch
): void {
  event.preventDefault();
  dispatch({ type: "CHANGE_LOCATION", payload: location });
}
