import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const insertToken = async (accessToken: string, refreshToken: string, serviceId: number, userId: number): Promise<void> => {
  const existingToken = await prisma.token.findFirst({
    where: {
      userId: userId,
      serviceId: serviceId,
    },
  });

  if (existingToken) {
    if (existingToken.accessToken !== accessToken) {
      await prisma.token.update({
        where: {
          id: existingToken.id,
        },
        data: {
          accessToken: accessToken,
          refrechToken: refreshToken,
        },
      });
    }
  } else {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        tokens: {
          create: {
            accessToken: accessToken,
            refrechToken: refreshToken,
            serviceId: serviceId,
          },
        },
      },
    });
  }
}