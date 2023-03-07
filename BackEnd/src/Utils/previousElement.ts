import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addElementPrevious = ( async (idArea: number, previousAction: any) => {
    await prisma.area.update({
        where: {
            id: idArea
        },
        data: {
            previousAction: previousAction
        }
    })
})

export const getElementPrevious = ( async (idArea: number)  => {
    const area = await prisma.area.findMany({
        where: {
            id: idArea 
        }
    })
    return area[0].previousAction;
}) 