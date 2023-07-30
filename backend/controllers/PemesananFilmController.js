import pemesanan from "../models/PemesananFilmModel.js";

export const getPemesanan = async (req, res) => {
  try {
    const response = await pemesanan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPemesananById = async (req, res) => {
  try {
    const response = await pemesanan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPemesanan = async (req, res) => {
  try {
    const response = await pemesanan.create(req.body);
    res.status(201).json({ msg: "Pemesanan created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePemesanan = async (req, res) => {
  try {
    await pemesanan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pemesanan updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePemesanan = async (req, res) => {
  try {
    await pemesanan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pemesanan deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
