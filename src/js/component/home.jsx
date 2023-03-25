import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])

	//Fetch api 
	const url = 'http://assets.breatheco.de/apis/fake/todos/user/catalina'

	//GET
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setTareas(data))
			.catch(error => console.log(error), "error")

	}, [])

	

	function actualizar (){
		//PUT
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(
		tareas 
		);

	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
		fetch(url, requestOptions)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log('error', error));
}
useEffect(()=>{actualizar()},[tareas])
	//.

	function agregarTarea() {
		if (inputValue !== "") {
			setTareas([...tareas, {label: inputValue, done: false}]);
		}
		console.log(tareas)
		setInputValue("")
		
	}

	function eliminarTarea(index) {
		setTareas(tareas.filter((task, currentindex) => {
			return index !== currentindex
		}))
		console.log(tareas)
	}

	return (
		<div>
			<h1 className="text-center mt-5">Tareas</h1>
			<div className="div1">
				<ul className="list-group">

					<li className="list-group-item">
						<input
							type="text"
							className="form-control form-control-lg"
							placeholder="Agregar tarea..."
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyPress={(e) => e.key === "Enter" ? agregarTarea() : null} />
					</li>
					{tareas.length > 0 && tareas.map((task, index) => {
						if ( task.label  !== '') {
							return <li key = {index} className="list-group-item tareaLi">
								<div>{task?.label}</div>
								<div>
									<button className="btn btn-light btn-sm"
										onClick={() => { eliminarTarea(index) }}>X</button>
								</div>
							</li>
						}
					})}
				</ul>

			</div>
			<div className="div1"><div className="cantidad">{tareas.length} tareas</div></div>
		</div>
	);
};

export default Home;

