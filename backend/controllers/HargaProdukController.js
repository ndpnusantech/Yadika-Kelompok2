import  hargaProduk  from '../models/HargaProdukModel.js';

export const getHargaProduk = async(req, res ) => {
    try {
        const response = await hargaProduk.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getHargaProdukById = async(req, res ) => {
    try {
        const response = await hargaProduk.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createHargaProduk = async(req, res ) => {
    try {
        const response = await hargaProduk.create(req.body);   
        res.status(201).json({msg:"harga produk created", response})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateHargaProduk = async(req, res ) => {
    try {
         await hargaProduk.update(req.body,{
            where:{
                id: req.params.id
            }
        });   
        res.status(200).json({msg:"harga produk updated"})
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteHargaProduk = async(req, res ) => {
    try {
        await hargaProduk.destroy({
            where:{
                id: req.params.id
            }
        });   
        res.status(200).json({msg:"harga produk deleted"})
    } catch (error) {
        console.log(error.message);
    }
}