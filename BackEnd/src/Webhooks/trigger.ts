import { callSingleAction } from "../Trigger/trigger";
import { doNotCallId, webHookId } from "../Static/Elements/webhooks";

let activatedWebHookAreaId: number[] = [];

export const webHookTrigger = (areas): void => {
  areas.forEach((area) => {
    if (area.active === true) {
      const jsonAction = JSON.parse(JSON.stringify(area.action));

      if (doNotCallId.includes(+jsonAction.id)) return;
      if (
        webHookId.includes(+jsonAction.id) &&
        !activatedWebHookAreaId.includes(+area.id)
      ) {
        callSingleAction(area);
        activatedWebHookAreaId.push(area.id);
      }
    }
  });
};
