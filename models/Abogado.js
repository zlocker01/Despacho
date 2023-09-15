import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const abogadoSchema = mongoose.Schema({
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true
    },
    administrador: {
        type: Boolean,
        default: false
    }
});

abogadoSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Abogado = mongoose.model('Abogado', abogadoSchema);

export default Abogado;