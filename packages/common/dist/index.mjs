import FocusLock from "react-focus-lock";

export function Modal() {
  return FocusLock;
}

if ("default" in FocusLock) {
  console.log("Focus lock imported incorrectly");
}
