import tayangFilm from "../models/TayangFilmModel.js";

export const getTayang = async (req, res) => {
  try {
    const response = await tayangFilm.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTayangById = async (req, res) => {
  try {
    const response = await tayangFilm.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTayang = async (req, res) => {
  try {
    const response = await tayangFilm.create(req.body);
    res.status(201).json({ msg: "Tayang created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTayang = async (req, res) => {
  try {
    await tayangFilm.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Tayang updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTayang = async (req, res) => {
  try {
    await tayangFilm.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Tayang deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
