import SeatFilm from "../models/SeatModel.js";

export const getSeatFilm = async (req, res) => {
  try {
    const response = await SeatFilm.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSeatFilmById = async (req, res) => {
  try {
    const response = await SeatFilm.findOne({
      where: {
        id: req.params.id,
      },
    });
    e;
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSeatFilm = async (req, res) => {
  try {
    await SeatFilm.create(req.body);
    res.status(201).json({ msg: "seats film created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSeatFilm = async (req, res) => {
  try {
    await SeatFilm.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "seats updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSeatFilm = async (req, res) => {
  try {
    await SeatFilm.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "seats deleted" });
  } catch (error) {
    console.log(error.message);
  }
};