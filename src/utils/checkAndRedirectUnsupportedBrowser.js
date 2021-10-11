import { isIE } from "react-device-detect";

export function checkAndRedirectUnsupportedBrowser() {
  if (isIE) {
    alert("IE detected!");
  }
}
