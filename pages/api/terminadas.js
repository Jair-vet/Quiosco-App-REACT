import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    // Obtener Ordenes Terminadas
    const terminadas = await prisma.orden.findMany({
        where: {
            estado: true
        }
    })
    res.status(200).json(terminadas)
}
