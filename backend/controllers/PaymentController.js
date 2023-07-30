import Payment from "../models/PaymentModel.js";

export const getPayment = async (req, res) => {
  try {
    const response = await Payment.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPaymentById = async (req, res) => {
  try {
    const response = await Payment.findOne({
      where: {
        id_payment: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPayment = async (req, res) => {
  try {
    const response = await Payment.create(req.body);
    res.status(201).json({ msg: "Payment created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePayment = async (req, res) => {
  try {
    await Payment.update(req.body, {
      where: {
        id_payment: req.params.id,
      },
    });
    res.status(200).json({ msg: "Payment updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePayment = async (req, res) => {
  try {
    await FavFilm.destroy({
      where: {
        id_payment: req.params.id,
      },
    });
    res.status(200).json({ msg: "Payment deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
