const express = require('express');

const EstudanteController = require('./controllers/EstudanteController');
const ResponsavelController = require('./controllers/ResponsavelController');
const CursoController = require('./controllers/CursoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const HorarioController = require('./controllers/HorarioController');
const RegistroController = require('./controllers/RegistroController');
const OcorrenciaController = require('./controllers/OcorrenciaController');
const UsuarioController = require('./controllers/UsuarioController');
const AdvertenciaController = require('./controllers/AdvertenciaController');

const router = express.Router();

router.post('/estudantes/view', EstudanteController.index);
router.post('/estudantes/insert', EstudanteController.store);
router.delete('/estudantes/delete/:id', EstudanteController.delete);

router.get('/responsavel', ResponsavelController.index);
router.post('/responsavel', ResponsavelController.store);

router.get('/cursos', CursoController.index);
router.post('/cursos', CursoController.store);
router.delete('/cursos/delete/:id', CursoController.delete);

router.get('/disciplinas', DisciplinaController.index);
router.post('/disciplinas', DisciplinaController.store);
router.delete('/disciplinas/delete/:id', DisciplinaController.delete);

router.post('/horarios', HorarioController.store);
router.delete('/horarios/delete/:id', HorarioController.delete);

router.post('/registros', RegistroController.store);
router.delete('/registros/delete/:id', RegistroController.delete);

router.post('/ocorrencias', OcorrenciaController.store);
router.delete('/ocorrencias/delete/:id', OcorrenciaController.delete);

router.post('/usuarios/view', UsuarioController.index);
router.post('/usuarios/insert', UsuarioController.store);
router.delete('/usuarios/delete/:id', UsuarioController.delete);

router.post('/advertencias', AdvertenciaController.store);
router.delete('/advertencias/delete/:id', AdvertenciaController.delete);

module.exports = router;
