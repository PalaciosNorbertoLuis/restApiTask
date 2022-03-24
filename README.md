
# restApiTask

REST API usando Nodejs, Express, Mongodb y algunos módulos extras de Node como babel, Mongoose, getPagination, dontenv.

<p>Ejemplo subido a Render y mongo atlas.</p>

Ver <a href="https://apitask.onrender.com/api/tasks" target="_blank">demo</a>  

<h4>Para consultar todos los registros</h4>
<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>

<pre>
GET https://apitask.onrender.com/api/tasks
</pre>

<h6>Ejemplo de respusta</h6>
<pre>
{
	"totalItems": 5,
	"task": [
		{
			"_id": "6239ed0151c96585e1ec1208",
			"title": "Hacer un sitio web en Wix",
			"description": "trabajo",
			"done": false,
			"createdAt": "2022-03-22T15:36:33.076Z",
			"updatedAt": "2022-03-22T15:36:33.076Z"
		},
		{
			"_id": "6239f12b190752e69510105a",
			"title": "FrontEnd con Angular para API rest NodeJs",
			"description": "trabajo freelance",
			"done": false,
			"createdAt": "2022-03-22T15:54:19.809Z",
			"updatedAt": "2022-03-22T15:54:19.809Z"
		},
		{
			"_id": "6239f312190752e695101062",
			"title": "BackEnd con C# para reporte con excel",
			"description": "trabajo freelance",
			"done": false,
			"createdAt": "2022-03-22T16:02:26.364Z",
			"updatedAt": "2022-03-22T16:02:26.364Z"
		}
	],
	"totalPages": 2,
	"currentPage": 1
}
</pre>

<h4>Para consultar un registro</h4>

<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<pre>	
<p>GET https://apitask.onrender.com/api/tasks/6239ed0151c96585e1ec1208</p>
</pre>
<p>lo que se agrega es el ID (6239ed0151c96585e1ec1208) para realizar consultas de una tarea</p>

<h6>Ejemplo de respusta</h6>
<pre>
{
	"_id": "6239ed0151c96585e1ec1208",
	"title": "Hacer un sitio web en Wix",
	"description": "trabajo",
	"done": false,
	"createdAt": "2022-03-22T15:36:33.076Z",
	"updatedAt": "2022-03-22T15:36:33.076Z"
}
</pre>

<h4>Para consultar registros utilizando el paginado </h4>
<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>

<pre>
GET https://apitask.onrender.com/api/tasks?size=3&page=0
</pre>
<p>donde "size" es la cantidad de archivos a mostrar por pagina y "page" la pagina a mostrar</p>

<h6>Ejemplo de respusta</h6>
<pre>
{
	"totalItems": 5,
	"task": [
		{
			"_id": "6239ed0151c96585e1ec1208",
			"title": "Hacer un sitio web en Wix",
			"description": "trabajo",
			"done": false,
			"createdAt": "2022-03-22T15:36:33.076Z",
			"updatedAt": "2022-03-22T15:36:33.076Z"
		},
		{
			"_id": "6239f12b190752e69510105a",
			"title": "FrontEnd con Angular para API rest NodeJs",
			"description": "trabajo freelance",
			"done": false,
			"createdAt": "2022-03-22T15:54:19.809Z",
			"updatedAt": "2022-03-22T15:54:19.809Z"
		},
		{
			"_id": "6239f312190752e695101062",
			"title": "BackEnd con C# para reporte con excel",
			"description": "trabajo freelance",
			"done": false,
			"createdAt": "2022-03-22T16:02:26.364Z",
			"updatedAt": "2022-03-22T16:02:26.364Z"
		}
	],
	"totalPages": 2,
	"currentPage": 1
}
</pre>

<p>adicionalmente se puede agregar la busqueda en el titulo "title=api"</p>
<pre>
GET https://apitask.onrender.com/api/tasks?size=3&page=0&title=api
</pre>

<h6>Ejemplo de respusta</h6>
<pre>
{
	"totalItems": 1,
	"task": [
		{
			"_id": "6239f12b190752e69510105a",
			"title": "FrontEnd con Angular para API rest NodeJs",
			"description": "trabajo freelance",
			"done": false,
			"createdAt": "2022-03-22T15:54:19.809Z",
			"updatedAt": "2022-03-22T15:54:19.809Z"
		}
	],
	"totalPages": 1,
	"currentPage": 1
}
</pre>


<h4>Para actualizar un registro</h4>

<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<pre>	
<p>PUT https://apitask.onrender.com/api/tasks/6239ed0151c96585e1ec1208</p>
</pre>
<p>lo que se agrega es el ID (6239ed0151c96585e1ec1208) para realizar la modificacion</p>

<h6>ejemplo para modificar titulo</h6>
<p>se puede modificar: title, description,done(boolean)</p>
<pre>
{
    "title":"Hacer un sitio web en Worpres"
}
</pre>

<h4>Para eliminar un registro</h4>

<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<pre>	
<p>DELETE https://apitask.onrender.com/api/tasks/6239ed0151c96585e1ec1208</p>
</pre>
<p>lo que se agrega es el ID (6239ed0151c96585e1ec1208) para eliminar el registro</p>
