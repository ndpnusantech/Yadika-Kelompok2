import historyTrans from "../models/HistoryTransaksiModel.js";

export const getHistoryTrans = async (req, res) => {
  try {
    const response = await historyTrans.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHistoryTransById = async (req, res) => {
  try {
    const response = await historyTrans.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createHistoryTrans = async (req, res) => {
  try {
    const response = await historyTrans.create(req.body);
    res.status(201).json({ msg: "HistoryTrans created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateHistoryTrans = async (req, res) => {
  try {
    await historyTrans.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "HistoryTrans updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHistoryTrans = async (req, res) => {
  try {
    await historyTrans.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "HistoryTrans deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
