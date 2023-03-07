import { PrismaClient } from "@prisma/client";
import { Service } from "../Models/tables"

const prisma = new PrismaClient();

export const getUser = async (id: number) => {
  const user = await prisma.user.findMany({
    where: { id: id },
  });
  return user;
};

export const getUserEmail = async (email: string) => {
  const user = await prisma.user.findMany({
    where: { email: email },
  });
  return user;
};

export const getArea = async (id: number) => {
  const area = await prisma.area.findUnique({
    where: { id: id },
  });
  return area;
};

export const getToken = async (id: number) => {
  const user = await getUser(id);
  const token = await prisma.token.findMany({
    where: { userId: user[0].id },
  });
  return token;
};

export const getServiceToken = async (userId: number, serviceId: number) => {
  const token = await prisma.token.findFirst({
    where: {
      userId: userId,
      serviceId: serviceId,
    },
  });
  return JSON.parse(JSON.stringify(token));
};

export const getServiceId = async (id: number): Promise<number> => {
  const token = await prisma.action.findUnique({
    where: {
      id: id,
    },
  });
  return token.authId;
};

export const getReactionServiceId = async (id: number): Promise<number> => {
  const token = await prisma.reaction.findUnique({
    where: {
      id: id,
    },
  });
  return token.authId;
};

export const getUserToArea = async (id: number): Promise<number> => {
  const area = await prisma.area.findUnique({
    where: {
      id: id,
    },
  });
  return area.userId;
};

export const getReactionByAreaId = async (areaId: number) => {
  const area = await getArea(areaId);
  return JSON.parse(JSON.stringify(area.reaction));
};

export const getActionByAreaId = async (areaId: number) => {
  const area = await getArea(areaId);
  return JSON.parse(JSON.stringify(area.action));
};

export const getAreasByUserId = async (userId: number) => {
  const areas = await prisma.area.findMany({
    where: {
      userId: userId,
    },
  });

  return JSON.parse(JSON.stringify(areas));
};

export const getTokensByServiceId = async (serviceId: number) => {
  const tokens = await prisma.token.findMany({
    where: {
      serviceId: serviceId,
    },
  });

  return JSON.parse(JSON.stringify(tokens));
};

export const getUserIdsByServiceId = async (serviceId: number) => {
  const tokens = await prisma.token.findMany({
    where: {
      serviceId: serviceId,
    },
    select: {
      userId: true,
    },
  });

  return tokens.map((token) => token.userId);
};

export const getServicesByIds = async (id: number[]): Promise<Service[]> => {
  const services: Service[] = await prisma.service.findMany({
    where: {
      id: { in: id }
    }
  });

  return JSON.parse(JSON.stringify(services));
}