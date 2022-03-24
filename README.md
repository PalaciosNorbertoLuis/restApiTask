
# restApiTask

REST API usando Nodejs, Express, Mongodb y algunos módulos extras de Node como babel y Mongoose.

<p>Ejemplo subido a codesambox y mongo atlas.</p>

Ver <a href="https://nu9nm7.sse.codesandbox.io/api/tasks" target="_blank">demo</a>  

<h4>Para consultar todos los registros</h4>
<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>

<pre>
GET https://nu9nm7.sse.codesandbox.io/api/tasks
</pre>

<h6>Ejemplo de respusta</h6>
<pre>
  {
	"docs": [
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
		}
	],
	"totalDocs": 2,
	"offset": 0,
	"limit": 3,
	"totalPages": 1,
	"page": 1,
	"pagingCounter": 1,
	"hasPrevPage": false,
	"hasNextPage": false,
	"prevPage": null,
	"nextPage": null
}
</pre>

<h4>Para consultar un registro</h4>

<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<pre>	
<p>GET https://nu9nm7.sse.codesandbox.io/api/tasks/6239ed0151c96585e1ec1208</p>
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

<h4>Para actualizar un registro</h4>

<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<pre>	
<p>PUT https://nu9nm7.sse.codesandbox.io/api/tasks/6239ed0151c96585e1ec1208</p>
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
<p>DELETE https://nu9nm7.sse.codesandbox.io/api/tasks/6239ed0151c96585e1ec1208</p>
</pre>
<p>lo que se agrega es el ID (6239ed0151c96585e1ec1208) para eliminar el registro</p>