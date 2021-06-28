import React from "react";
import { Dispatch } from "redux";

export default function handleCountButtonClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  action_type: string,
  count: number,
  dispatch: Dispatch
): void {
  event.preventDefault();
  if (count || action_type.split("_")[0] === "ADD")
    dispatch({ type: action_type, payload: count });
}
