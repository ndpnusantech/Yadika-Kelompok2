import gendre_film from "../models/GendreModel.js";

export const getGendre = async (req, res) => {
  try {
    const response = await gendre_film.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getGendreById = async (req, res) => {
  try {
    const response = await gendre_film.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createGendre = async (req, res) => {
  try {
    const response = await gendre_film.create(req.body);
    res.status(201).json({ msg: "Gendre created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateGendre = async (req, res) => {
  try {
    await gendre_film.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Gendre updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteGendre = async (req, res) => {
  try {
    await gendre_film.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Gendre deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
