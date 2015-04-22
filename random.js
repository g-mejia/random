//Guillermo Fernandez Escobar dni:03937344C
//Alvaro Gonzalez Mejia dni:50486924S

var express = require('express');
var path = require('path');
var app = express();


app.get('/preguntas', function(req, res){
	res.send('<!DOCTYPE html>'
		+	'<html>'
		+	'<head>'
		+		'<title>Preguntas</title>'
		+		'<meta charset="UTF-8">'
		+	'</head>'
		+	'<body>'
		+		'<form method="get" action="/respuestas">'
		+			'<input type="hidden" name="id" value="1" /><br>'
		+			'Pregunta 1: <br>'
		+			'<input type="text"'
		+				'name="America"'
		+				'value="¿Quién descubrió América?"'
		+			'/><br>'
		+			'<input type="submit"'
		+				'value="Enviar"'
		+			'/>'
		+		'</form>'
		+		'<form method="get" action="/respuestas">'
		+			'<input type="hidden" name="id" value="2" /><br>'
		+			'Pregunta 2: <br>'
		+			'<input type="text"'
		+				'name="Portugal"'
		+				'value="¿Capital de Portugal?"'
		+			'/><br>'
		+			'<input type="submit"'
		+				'value="Enviar"'
		+			'/>'
		+		'</form>'
		+	'</body>'
		+	'</html>'
	);
});


app.get('/respuestas', function(req, res) {
	if(req.query.id === "1"){
		if(req.query.America === "Cristobal Colon"){
			res.send('<!DOCTYPE html>'
				+	'<html>'
				+	'<head>'
				+		'<title>Respuesta</title>'
				+		'<meta charset="UTF-8">'
				+	'</head>'
				+	'<body>'
				+		'¡¡Respuesta correcta!! <br>'
				+		'<a href="http://localhost:8000/preguntas">Página Principal</a>'
				+	'</body>'
				+	'</html>'
			);
		}else {
			res.send('<!DOCTYPE html>'
				+	'<html>'
				+	'<head>'
				+		'<title>Respuesta</title>'
				+		'<meta charset="UTF-8">'
				+	'</head>'
				+	'<body>'
				+		'¡¡Respuesta incorrecta!!'
				+		'La respuesta correcta es: Cristobal Colon <br>'
				+		'<a href="http://localhost:8000/preguntas">Página Principal</a>'
				+	'</body>'
				+	'</html>'
			);
		}
	}else if(req.query.id === "2"){
		if(req.query.Portugal === "Lisboa"){
			res.send('<!DOCTYPE html>'
				+	'<html>'
				+	'<head>'
				+		'<title>Respuesta</title>'
				+		'<meta charset="UTF-8">'
				+	'</head>'
				+	'<body>'
				+		'¡¡Respuesta correcta!! <br>'
				+		'<a href="http://localhost:8000/preguntas">Página Principal</a>'
				+	'</body>'
				+	'</html>'
			);
		}else {
			res.send('<!DOCTYPE html>'
				+	'<html>'
				+	'<head>'
				+		'<title>Respuesta</title>'
				+		'<meta charset="UTF-8">'
				+	'</head>'
				+	'<body>'
				+		'¡¡Respuesta incorrecta!! <br>'
				+		'La respuesta correcta es: Lisboa <br>'
				+		'<a href="http://localhost:8000/preguntas">Página Principal</a>'
				+	'</body>'
				+	'</html>'
			);
		}
	}
});


app.listen(8000);
