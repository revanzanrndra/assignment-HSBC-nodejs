import express from "express";
import {
    getAllBuku, 
    getBukuById, 
    createBuku,
    updateBuku,
    deleteBuku
} from "../controllers/BukuController.js"

const router = express.Router();

router.get('/buku', getAllBuku);
router.get('/buku/:id', getBukuById);
router.post('/buku', createBuku);
router.patch('/buku/:id', updateBuku);
router.delete('/buku/:id', deleteBuku);

export default router;