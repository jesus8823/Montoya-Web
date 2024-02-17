const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.render("./paginas/portafolio/index");
});

router.get("/proyecto_info",(req,res)=>{
	res.render("./paginas/portafolio/proyecto_info");
});

router.get("/proyecto_info2",(req,res)=>{
	res.render("./paginas/portafolio/proyecto_info2");
});

router.get("/proyecto_info3",(req,res)=>{
	res.render("./paginas/portafolio/proyecto_info3");
});

module.exports = router;