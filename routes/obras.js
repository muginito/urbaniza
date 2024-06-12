import { Router } from 'express';
const router = Router();
import Obra from '../models/obras.js';

// GET todas as obras
router.get('/', async (req, res) => {
    try {
        const obras = await Obra.find();
        res.json(obras);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST nova obra
router.post('/', async (req, res) => {
    const obra = new Obra({
        nome: req.body.nome,
        descricao: req.body.descricao,
        status: req.body.status,
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim
    });

    try {
        const novaObra = await obra.save();
        res.status(201).json(novaObra);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
