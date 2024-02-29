import { $TSFixMeLater } from "@models/index";

// -----------------------------------------------------------------------

/**
 * Stop enter submitting the form.
 * @param keyEvent Event triggered when the user presses a key.
 */

function preventFormSubmitOnEnter(keyEvent: $TSFixMeLater) {
  if ((keyEvent?.charCode || keyEvent?.keyCode) === 13)
    keyEvent?.preventDefault();
}
export default preventFormSubmitOnEnter;
