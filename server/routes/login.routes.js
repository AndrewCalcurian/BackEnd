const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../database/models/usuarios.model');
const { verificarToken } = require('../auth/autenticacion');

const app = express();

app.get('/api/renew', verificarToken, (req,res)=>{

    let token = jwt.sign({
        usuario:req.usuario
    }, process.env.SEED, {expiresIn:process.env.EXP});

    

    res.json({
        ok:true,
        usuario:req.usuario,
        token,
    });
})

app.post('/api/test-login', (req, res)=>{
    console.log(`DEBUG: Received login request`);

    if (commons.userObject.uname && commons.userObject.upass) {
        if (!commons.userObject.tfa || !commons.userObject.tfa.secret) {
            if (req.body.uname == commons.userObject.uname && req.body.upass == commons.userObject.upass) {
                console.log(`DEBUG: Login without TFA is successful`);

                return res.send({
                    "status": 200,
                    "message": "success"
                });
            }
            console.log(`ERROR: Login without TFA is not successful`);

            return res.send({
                "status": 403,
                "message": "Invalid username or password"
            });

        } else {
            if (req.body.uname != commons.userObject.uname || req.body.upass != commons.userObject.upass) {
                console.log(`ERROR: Login with TFA is not successful`);

                return res.send({
                    "status": 403,
                    "message": "Invalid username or password"
                });
            }
            if (!req.headers['x-tfa']) {
                console.log(`WARNING: Login was partial without TFA header`);

                return res.send({
                    "status": 206,
                    "message": "Please enter the Auth Code"
                });
            }
            let isVerified = speakeasy.totp.verify({
                secret: commons.userObject.tfa.secret,
                encoding: 'base32',
                token: req.headers['x-tfa']
            });

            if (isVerified) {
                console.log(`DEBUG: Login with TFA is verified to be successful`);

                return res.send({
                    "status": 200,
                    "message": "success"
                });
            } else {
                console.log(`ERROR: Invalid AUTH code`);

                return res.send({
                    "status": 206,
                    "message": "Invalid Auth Code"
                });
            }
        }
    }

    return res.send({
        "status": 404,
        "message": "Please register to login"
    });
})

app.post('/api/login', (req,res)=>{

    let body = req.body;
    // //console.log(body)

    Usuario.findOne({Correo:body.Correo}, (err, usuarioDB)=>{
        if ( err ){
            return res.status(500).json({
                ok:false,
                err
            });
        }

        // //console.log(usuarioDB)

        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'Usuario o contraseña incorrectos'
                }
            });
        }

        if( !bcrypt.compareSync( body.Password, usuarioDB.Password )){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'Usuario o contraseña incorrectos'
                }
            });
        }
        
        let token = jwt.sign({
            usuario:usuarioDB
        }, process.env.SEED, {expiresIn:process.env.EXP});

        res.json({
            ok:true,
            usuario:usuarioDB,
            token
        });
    });

});

module.exports = app;