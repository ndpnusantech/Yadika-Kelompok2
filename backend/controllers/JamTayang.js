import jamTayang from "../models/JamTayangModel.js  ";

export const getJamTayang = async (req, res) => {
  try {
    const response = await jamTayang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getJamTayangById = async (req, res) => {
  try {
    const response = await jamTayang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createJamTayang = async (req, res) => {
  try {
    const response = await jamTayang.create(req.body);
    res.status(201).json({ msg: "jam tayang created", response });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateJamTayang = async (req, res) => {
  try {
    await jamTayang.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "jam tayang updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteJamTayang = async (req, res) => {
  try {
    await jamTayang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "jam tayang deleted" });
  } catch (error) {
    console.log(error.message);
  }
};