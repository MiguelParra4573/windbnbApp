import React from "react";

export default function handleInputChoiceClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  choice: string,
  setButtonChoice: React.Dispatch<React.SetStateAction<string>>
): void {
  event.preventDefault();
  setButtonChoice(choice);
}
