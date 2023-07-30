import StockFilm from "../models/stokModel.js";

export const getStockFilm = async (req, res) => {
  try {
    const response = await StockFilm.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStockFilmId = async (req, res) => {
  try {
    const response = await StockFilm.findOne({
      where: {
        id_stockFilm: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createStockFilm = async (req, res) => {
  try {
    const response = await StockFilm.create(req.body);
    res.status(201).json({ msg: "stock film created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStockFilm = async (req, res) => {
  try {
    await StockFilm.update(req.body, {
      where: {
        id_stockFilm: req.params.id,
      },
    });
    res.status(200).json({ msg: "stock film updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStockFilm = async (req, res) => {
  try {
    await StockFilm.destroy({
      where: {
        id_stockFilm: req.params.id,
      },
    });
    res.status(200).json({ msg: "stock film deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
