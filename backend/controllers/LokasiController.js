import lokasi_film from "../models/LokasiModel.js";

export const getLokasi = async (req, res) => {
  try {
    const response = await lokasi_film.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getLokasiById = async (req, res) => {
  try {
    const response = await lokasi_film.findOne({
      where: {
        id_lokasi: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createLokasi = async (req, res) => {
  try {
    const response = await lokasi_film.create(req.body);
    res.status(201).json({ msg: "lokasi created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLokasi = async (req, res) => {
  try {
    await lokasi_film.update(req.body, {
      where: {
        id_lokasi: req.params.id,
      },
    });
    res.status(200).json({ msg: "lokasi updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLokasi = async (req, res) => {
  try {
    await lokasi_film.destroy({
      where: {
        id_lokasi: req.params.id,
      },
    });
    res.status(200).json({ msg: "lokasi deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
