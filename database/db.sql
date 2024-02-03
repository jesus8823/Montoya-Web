CREATE TABLE tecnologias(
	id INT PRIMARY KEY,
	nombre TEXT,
	tipo TEXT,
	rango TEXT	
);

CREATE SEQUENCE tecnologias_secuencia;
ALTER TABLE tecnologias ALTER COLUMN id SET DEFAULT NEXTVAL('tecnologias_secuencia');

CREATE TABLE categorias(
	id INT PRIMARY KEY,
	nombre TEXT
);

CREATE SEQUENCE categorias_secuencia;
ALTER TABLE categorias ALTER COLUMN id SET DEFAULT NEXTVAL('categorias_secuencia');

CREATE TABLE sub_categorias(
	id INT PRIMARY KEY,
	nombre TEXT,
	categorias_id INT REFERENCES categorias(id)
);

CREATE SEQUENCE sub_categorias_secuencia;
ALTER TABLE sub_categorias ALTER COLUMN id SET DEFAULT NEXTVAL('sub_categorias_secuencia');

CREATE TABLE acciones(
	id INT PRIMARY KEY,
	titulo TEXT,
	descripcion TEXT,
	contenido TEXT,
	categorias_id INT REFERENCES categorias(id),
	sub_categorias_id INT REFERENCES sub_categorias(id),
	link_presentacion TEXT,
	fecha_inicio timestamp,
	fecha_fin timestamp,
	fecha_subido timestamp
);

CREATE SEQUENCE acciones_secuencia;
ALTER TABLE acciones ALTER COLUMN id SET DEFAULT NEXTVAL('acciones_secuencia');

CREATE TABLE tecnologias_acciones(
	tecnologias_id INT REFERENCES tecnologias(id),
	acciones_id INT REFERENCES acciones(id)
);