import Abogado from '../models/Abogado.js';

const ingresar =async (req, res) => {
//    const { email, password, administrador } = req.body; 

    try {
        const abogado = new Abogado(req.body);
        const abogadoGuardado = await abogado.save();

        res.json(abogadoGuardado); /* cambio a tipo Json */
    } catch (error) {
        console.log(error);
    };
};


const perfil = (req,res) => {
    res.send({msg: 'desde perfil'})
};


export { ingresar, perfil };