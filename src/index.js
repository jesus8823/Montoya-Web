const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const pool = require("./database.js");

//inicializaciones
const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", 
  exphbs.engine({
  defaultlauout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialDir: path.join(app.get("views"),"partials"),
  extname: ".hbs",
  helpers: require("./helpers/handlebars")
}));

app.set("view engine", ".hbs")


//use app
app.use(express.urlencoded({extended: false})); //sirve para traer desde el formulario los datos que dan los usuarios
app.use(express.json());



//public
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use(require("./routes/"));
app.use("/experiencia", require("./routes/experiencia"));
app.use("/insercion", require("./routes/insercion_datos"));


app.listen(app.get("port"),() => {
  console.log('Servidor escuchando en el puerto', app.get("port"));
});