import { Area, getServiceUserIdByToken } from "../Models/tables";
import { allFunctionReaction } from "../Static/Callbacks/reactions";
import { enumAction } from "../Static/Elements/actions";
import { enumServices } from "../Static/Elements/services";
import { callReaction } from "../Trigger/trigger";
import { getAreasByUserId, getReactionServiceId, getServiceToken, getUserIdsByServiceId } from "../Utils/researchDB";

const callReactionIfSameId = async (hookedId: number, serviceUserId: number, area: Area): Promise<void> => {
  if (hookedId === serviceUserId) {
    const serviceOauth = await getReactionServiceId(Number(area.reaction.id));
    callReaction(
      allFunctionReaction.get(Number(area.reaction.id)),
      serviceOauth,
      area.id.toString()
    );
  }
}

export const hooksHandler = async (
  service: enumServices,
  action: enumAction,
  hookedId: number,
  getServiceUserid: getServiceUserIdByToken
): Promise<void> => {
  const usersId: number[] = await getUserIdsByServiceId(service);

  usersId.forEach(async (userId) => {
    const areas = await getAreasByUserId(userId);
    areas.forEach(async (area: Area) => {
      if (area.action.id == action && area.active == true) {
        const token = await getServiceToken(userId, service);
        const serviceUserId = await getServiceUserid(token.accessToken);
        callReactionIfSameId(hookedId, serviceUserId, area);
      }
    });
  });
}