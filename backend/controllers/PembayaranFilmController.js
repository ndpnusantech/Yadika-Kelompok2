import pembayaran from "../models/PembayaranFilmModel.js";

export const getPembayaran = async (req, res) => {
  try {
    const response = await pembayaran.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPembayaranById = async (req, res) => {
  try {
    const response = await pembayaran.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPembayaran = async (req, res) => {
  try {
    const response = await pembayaran.create(req.body);
    res.status(201).json({ msg: "Pembayaran created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePembayaran = async (req, res) => {
  try {
    await pembayaran.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pembayaran updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePembayaran = async (req, res) => {
  try {
    await pembayaran.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pembayaran deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
