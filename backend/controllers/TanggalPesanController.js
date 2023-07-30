import tanggalPesan from "../models/TanggalPesanModel.js";

export const getPesanan = async (req, res) => {
  try {
    const response = await tanggalPesan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesananById = async (req, res) => {
  try {
    const response = await tanggalPesan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPesanan = async (req, res) => {
  try {
    const response = await tanggalPesan.create(req.body);
    res.status(201).json({ msg: "Pesanan created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePesanan = async (req, res) => {
  try {
    await tanggalPesan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesanan updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePesanan = async (req, res) => {
  try {
    await tanggalPesan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesanan deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
