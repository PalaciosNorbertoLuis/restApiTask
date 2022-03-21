import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";

export const findAllTask = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const { limit, offset } = getPagination(page, size);

    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};

    const tasks = await Task.paginate(condition, { offset, limit });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || `error al consultar las tareas`,
    });
  }
};

export const fineOneTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: `No hay tarea con el id ${id}` });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `error al consultar la tarea ${id}`,
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "titulo requerido!" });
  }

  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
    });
    const taskSave = await newTask.save();
    res.json(taskSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `error al intentar crear una tarea`,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `error al intentar borrar la tarea`,
    });
  }
};

export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: "Se actualizo de forma correcta el registro.",
  });
};
