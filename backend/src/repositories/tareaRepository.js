const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getTareas(usuarioId) {
    return await prisma.tarea.findMany({
        where:{
            usuarioId:usuarioId
        }
    });

}

async function deleteTarea(id,usuarioId) {
    const tareaId=parseInt(id);
    if(isNaN(tareaId)){
        throw new Error("ID de tarea invalido")
    }
    try {
        return await prisma.tarea.delete({ where: { id: tareaId } });
    } catch (error) {
        if (error.code === 'P2025') {
            throw new Error("Tarea no encontrada");
        }
        throw error;
    }
}

async function createTarea(data, usuarioId) {
    return await prisma.tarea.create({ data: { ...data, usuarioId } });

}

module.exports = {
    getTareas,
    createTarea,
    deleteTarea
}