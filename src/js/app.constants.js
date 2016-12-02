'use strict';
angular
    .module('app.constants', [])
    .constant("constants", {
        "url": "http://localhost:8000",
        "ADMINISTRADOR":[
          {path:"#home",text:"Inicio"}, {path:"#registroClinica",text:"Registro Clinica"},{path:"#entidades",text:"Entidades"}
        ],
        "DOCTOR":[
          {path:"#home",text:"Inicio"}, {path:"#consultas",text:"Consulta"}, {path:"#diagnosticos",text:"Diagnosticos"}
        ],
        "ENFERMERO":[
          {path:"#home",text:"Inicio"}, {path:"#solicit",text:"Solicitud"}, {path:"#pacientes",text:"Pacientes"}
        ],
        "FARMACIA":[
          {path:"#home",text:"Inicio"}, {path:"#inventario",text:"Inventario"},{path:"#recetas",text:"Recetas"}
        ],
        "tipoAdministracionMedicamentoEnum": [
          { "value": 0, "text": "Oral"},
          { "value": 1, "text": "Cuteana"},
          { "value": 2, "text": "Sublingual"},
          { "value": 3, "text": "Intramuscular"}
        ],
        tipoSolicitudEnum : [
         { value : 0, text :"Atención médica" },
         { value : 1, text :"Análisis" }
       ],
       modulos : [
         {"idModulo": 1,"title":"Consulta", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"idModulo": 2,"title":"Farmacia", "price": 2500.00  , "description":"12GB Espacio en disco "},
         {"idModulo": 3,"title":"Laboratorio", "price": 2500.00 , "description":"12GB Espacio en disco "}
       ],
       getCPS : 'https://api-codigos-postales.herokuapp.com/v2/buscar',
       tipoSanguinioEnum : [
         {"id":1, "text":"O+"},
         {"id":2, "text":"O-"},
         {"id":3, "text":"A+"},
         {"id":4, "text":"A-"},
         {"id":5, "text":"B+"},
         {"id":6, "text":"B-"},
         {"id":7, "text":"AB+"},
         {"id":8, "text":"AB-"}
       ],
       sexoEnum : [
         {"id":1, "text":"Femenino"},
         {"id":2, "text":"Masculino"},
       ],
       tipoEntidadEnum : [
        { value : 0, text :"Sanatorio" },
        { value : 1, text :"Clinica" },
        { value : 2, text :"Hospital" }
      ],
    })
