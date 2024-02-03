const express = require("express");
const router = express.Router();

const pool = require("../database");

// Seccion de categorias principales o experiencia
router.get("/", async(req,res)=>{
	const datos = await pool.query(`SELECT*FROM categorias`)
	Datos = datos.rows;
	res.render("./paginas/experiencia/categorias", {Datos});
});

// Seccion de sub categorias 
router.get("/:text", async(req,res)=>{
	const {text} = req.params;
	const datos = await pool.query(`SELECT sub_categorias.id, sub_categorias.nombre, sub_categorias.categorias_id, categorias.nombre AS nombre_categorias
					  FROM sub_categorias
					  JOIN categorias ON sub_categorias.categorias_id = categorias.id;`);
	const Datos = datos.rows;
	res.render("./paginas/experiencia/sub_categorias", {Datos,text});
})

// Seccion de secciones o proyectos individuales
router.get("/:text1/:text2", async(req,res)=>{
	const {text1} = req.params;
	const {text2} = req.params;
	const datos = await pool.query(`SELECT acciones.id, acciones.titulo, acciones.descripcion, acciones.sub_categorias_id, sub_categorias.nombre AS sub_categorias_nombre
					  FROM acciones
					  JOIN sub_categorias ON acciones.sub_categorias_id = sub_categorias.id;`);
	const Datos = datos.rows;
	
	res.render("./paginas/experiencia/secciones", {Datos,text1,text2});
})

// seccion individual
router.get("/:text1/:text2/:id", async(req,res)=>{
	const {id} = req.params;
	const datos = await pool.query(`SELECT*FROM acciones WHERE id = $1`,[id]);
	const Datos = datos.rows[0];
	res.render("./paginas/experiencia/secciones_individuales", {Datos})
})


module.exports = router;