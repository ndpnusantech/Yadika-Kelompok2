import FavFilm from "../models/FavFilmModel.js";

export const getFavFilm = async (req, res) => {
  try {
    const response = await FavFilm.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFavFilmById = async (req, res) => {
  try {
    const response = await FavFilm.findOne({
      where: {
        id_FavFilm: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createFavFilm = async (req, res) => {
  try {
    const response = await FavFilm.create(req.body);
    res.status(201).json({ msg: "Favorite film created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFavFilm = async (req, res) => {
  try {
    await FavFilm.update(req.body, {
      where: {
        id_FavFilm: req.params.id,
      },
    });
    res.status(200).json({ msg: "Favorite film updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFavFilm = async (req, res) => {
  try {
    await FavFilm.destroy({
      where: {
        id_FavFilm: req.params.id,
      },
    });
    res.status(200).json({ msg: "Favorite film deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
