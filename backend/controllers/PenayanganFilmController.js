import penayanganFilm from "../models/PenayanganFilmModel.js";

export const getPenayangan = async (req, res) => {
  try {
    const response = await penayanganFilm.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPenayanganById = async (req, res) => {
  try {
    const response = await penayanganFilm.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPenayangan = async (req, res) => {
  try {
    const response = await penayanganFilm.create(req.body);
    res.status(201).json({ msg: "Penayangan created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePenayangan = async (req, res) => {
  try {
    await penayanganFilm.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Penayangan updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePenayangan = async (req, res) => {
  try {
    await penayanganFilm.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Penayangan deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
