const express = require("express")
const psicologosController = require("../controllers/psicologosController")
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const routes = express.Router()

//criar um psicologo
routes.post("/psicologos", psicologosController.criarPsicologo);
//listar psicologos
routes.get("/psicologos", psicologosController.listarPsicologos);
//listar um psicologo
routes.get("/psicologos/:id", psicologosController.listarPsicologo);
//delete psicologo
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
//update psicologo
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);

//listar pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
//listar um paciente
routes.get("/pacientes/:id", pacientesController.listarPaciente);
//criar um paciente
routes.post("/pacientes", pacientesController.criarPaciente);
//atualizar um paciente
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);
//deletar um paciente
routes.delete("/pacientes/:id", pacientesController.deletarPaciente)


//litar atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimentos);
//listar um atendimento
routes.get("/atendimentos/:id", atendimentosController.encontrarAtendimento);
//criar um atendimento
routes.post("/atendimentos", atendimentosController.cadastrarAtendimentos);



routes.get("/atendimentos/:id", (req, res) => {
    console.log(req.params);
    res.send("Mostrando atendimento desejado!");
});


module.exports = routes