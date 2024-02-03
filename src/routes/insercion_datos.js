const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/",(req,res)=>{
	res.render("./paginas/insercion_datos");
});

router.post("/tecnologias",async(req,res)=>{
	const {nombre,tipo,rango} = req.body;
	const datos = {
		nombre,
		tipo,
		rango
	}
	await pool.query(`INSERT INTO tecnologias (id,nombre,tipo,rango) VALUES (DEFAULT,$1,$2,$3)`,[...Object.values(datos)]);
	res.redirect("/insercion");
});

router.post("/categorias",async(req,res)=>{
	const {nombre} = req.body;
	const datos = {
		nombre,
	}
	await pool.query(`INSERT INTO categorias (id,nombre) VALUES (DEFAULT,$1)`,[...Object.values(datos)]);
	res.redirect("/insercion");
});

router.post("/sub_categorias",async(req,res)=>{
	const {nombre, categorias_id} = req.body;
	const datos = {
		nombre,
		categorias_id
	}
	console.log(datos)
	await pool.query(`INSERT INTO sub_categorias (id,nombre,categorias_id) VALUES (DEFAULT,$1,$2)`,[...Object.values(datos)]);
	res.redirect("/insercion");
});

router.post("/acciones",async(req,res)=>{
	const {titulo,descripcion,contenido,categorias_id,sub_categorias_id,link_presentacion,fecha_inicio,fecha_fin,fecha_subido} = req.body;
	const datos = {
		 titulo,
		 descripcion,
		 contenido,
		 categorias_id,
		 sub_categorias_id,
		 link_presentacion,
		 fecha_inicio,
		 fecha_fin,
		 fecha_subido
	}
	await pool.query(`INSERT INTO acciones (id,titulo,descripcion,contenido,categorias_id,sub_categorias_id,link_presentacion,fecha_inicio,fecha_fin,fecha_subido) VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9)`,[...Object.values(datos)]);
	res.redirect("/insercion");
});

router.post("/acciones_tecnologias",async(req,res)=>{
	const {acciones_id,tecnologias_id} = req.body;
	const datos = {
		acciones_id,
		tecnologias_id
	}
	await pool.query(`INSERT INTO tecnologias_acciones (acciones_id,tecnologias_id) VALUES ($1,$2)`,[...Object.values(datos)]);
	res.redirect("/insercion");
});




router.post("/delete",async(req,res)=>{
	const {id,tabla} = req.body;
	const datos = {
		id,
		tabla
	}
	await pool.query(`DELETE FROM ${datos.tabla} WHERE id = ${datos.id}`);
	res.redirect("/insercion");
});


module.exports = router;