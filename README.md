# restApiTask

REST API usando Nodejs, Express, Mongodb y algunos módulos extras de Node como babel y Mongoose.

<p>Ejemplo subido a codesambox y mongo atlas.</p>

Ver <a href="https://nu9nm7.sse.codesandbox.io/api/tasks" target="_blank">demo</a>  


<article>
	<h4>Para consultar todos los registros</h4>
	<P>Utilizar aplicaciones como PostMan, Insomnia, etc</p>
<div>
  GET https://nu9nm7.sse.codesandbox.io/api/tasks
</div>
<P>Ejemplo de respusta</p>
	
	<p>
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
	</p>
</article>
