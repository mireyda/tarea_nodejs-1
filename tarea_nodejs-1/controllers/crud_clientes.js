import { conectar } from "../models/db_conectar.js";

var crud_cliente = {};

crud_cliente.obtenerTiposSangre = (req, res, next) => {
    conectar.query('SELECT * FROM tipos_sangre', (error, resultados) => {
        if (error) {
            return next(error);
        }
        req.tiposSangre = resultados;
        next();
    });
}; 

crud_cliente.leer = (req, res) => {
    conectar.query('SELECT * FROM clientes', (error, resultadosClientes) => {
        if (error) {
            throw error;
        }

        conectar.query('SELECT * FROM tipos_sangre', (error, resultadosTiposSangre) => {
            if (error) {
                throw error;
            }

            res.render('clientes/index', {
                resultado: resultadosClientes,
                tipos_sangre: resultadosTiposSangre // Asegúrate de que esta variable esté correctamente pasada
            });
        });
    });
};


crud_cliente.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_CR;
    const id_tipo_sangre = req.body.txt_TP;
    const fecha_nacimiento = req.body.txt_fn;

    if (btn_crear) {
        conectar.query('INSERT INTO clientes SET ?', {
            carne: carne,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            fecha_nacimiento: fecha_nacimiento,
            correo_electronico: correo_electronico,
            id_tipo_sangre: id_tipo_sangre
        }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
    if (btn_actualizar) {
        conectar.query('UPDATE clientes SET ? WHERE id_cliente = ?', [{
            carne: carne,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            fecha_nacimiento: fecha_nacimiento,
            correo_electronico: correo_electronico,
            id_tipo_sangre: id_tipo_sangre
        }, id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
    if (btn_borrar) {
        conectar.query('DELETE FROM clientes WHERE id_cliente = ?', [id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });

    }
};

export { crud_cliente };
