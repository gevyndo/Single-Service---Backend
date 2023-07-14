import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const getPerusahaan = async (req, res) => {
  try {
    const perusahaan = await prisma.perusahaan.findMany();
    res.status(200).json(perusahaan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getPerusahaanById = async (req,res) =>{
    try{
        const response = await prisma.perusahaan.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createPerusahaan = async (req, res) => {
  const { nama, alamat, noTelepon, kodePajak } = req.body;

  // Validate kodePajak format (3 uppercase letters)
  const kodePajakRegex = /^[A-Z]{3}$/;
  if (!kodePajakRegex.test(kodePajak)) {
    return res.status(400).json({ msg: "Invalid Kode Pajak format. Must be 3 uppercase letters." });
  }

  try {
    const perusahaan = await prisma.perusahaan.create({
      data: {
        nama,
        alamat,
        noTelepon,
        kodePajak,
      },
    });
    res.status(201).json(perusahaan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePerusahaan = async (req, res) => {
  const { id } = req.params;
  const { nama, alamat, noTelepon, kodePajak } = req.body;

  // Validate kodePajak format (3 uppercase letters)
  const kodePajakRegex = /^[A-Z]{3}$/;
  if (!kodePajakRegex.test(kodePajak)) {
    return res.status(400).json({ msg: "Invalid Kode Pajak format. Must be 3 uppercase letters." });
  }

  try {
    const perusahaan = await prisma.perusahaan.update({
      where: { id: parseInt(id) },
      data: {
        nama,
        alamat,
        noTelepon,
        kodePajak,
      },
    });
    res.status(200).json(perusahaan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deletePerusahaan = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.perusahaan.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ msg: "Perusahaan deleted successfully." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProducts = async (req,res) =>{
    try{
        const response = await prisma.product.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async (req,res) =>{
    try{
        const response = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createProduct = async (req,res) =>{
    const {name, price, stok, idPerusahaan, kodeBarang} = req.body; 
    try{
        const product = await prisma.product.create({
            data:{
                name: name,
                price: price,
                stok: stok,
                idPerusahaan: idPerusahaan,
                kodeBarang: kodeBarang
            }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const updateProduct = async (req,res) =>{
    const {name, price, stok, idPerusahaan, kodeBarang} = req.body; 
    try{
        const product = await prisma.product.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name,
                price: price,
                stok: stok,
                idPerusahaan: idPerusahaan,
                kodeBarang: kodeBarang
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


export const deleteProduct = async (req,res) =>{
    const {name, price, stok, idPerusahaan, kodeBarang} = req.body; 
    try{
        const product = await prisma.product.delete({
            where:{
                id: Number(req.params.id)
            },
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

