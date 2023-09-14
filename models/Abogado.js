import mongoose from 'mongoose';

const abogadoSchema = mongoose.Schema({
    correo : {
        type: String,
        required: true,
    },
    contraseña : {
        type: String,
        required: true
    },
    administrador: {
        type: Boolean,
        default: false
    }
});

const Abogado = mongoose.model('Abogado', abogadoSchema);

export default Abogado;