import { Schema, model } from 'mongoose';

const ObraSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dataInicio: {
        type: Date,
        required: true
    },
    dataFim: {
        type: Date,
        required: true
    }
});

const Obra = model('Obra', ObraSchema);

export default Obra;
