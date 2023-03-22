import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [tareas, setTareas] = useState([])

	function agregarTarea() {
		if (inputValue !== "") {
			setTareas([...tareas, inputValue]);
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
					{tareas.map((task, index) => {
						if ({ task } != '') {
							return <li className="list-group-item tareaLi">
								<div>{task}</div>
								<div>
									<button className="btn btn-light btn-sm"
										onClick={() => { eliminarTarea(index) }}>X</button>
								</div>
							</li>
						}
					})}



				</ul>
			</div>

		</div>
	);
};

export default Home;
