import  produk  from '../models/ProdukModel.js';

export const getProduk = async(req, res ) => {
    try {
        const response = await produk.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getProdukById = async(req, res ) => {
    try {
        const response = await produk.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createProduk = async(req, res ) => {
    try {
        await produk.create(req.body);   
        res.status(201).json({msg:"produk created"})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduk = async(req, res ) => {
    try {
        await produk.update(req.body,{
            where:{
                id: req.params.id
            }
        });   
        res.status(200).json({msg:"produk updated"})
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteProduk = async(req, res ) => {
    try {
        await produk.destroy({
            where:{
                id: req.params.id
            }
        });   
        res.status(200).json({msg:"produk deleted"})
    } catch (error) {
        console.log(error.message);
    }
}