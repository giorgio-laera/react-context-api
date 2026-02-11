import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useBudget } from "../contexts/PreferencesContext"
import axios from 'axios'
function Products (){
	const [items, setItems] = useState([]);
	const {budget}= useBudget();
	let filteredOrNo =  budget ? items.filter(oggetto=>oggetto.price <=30) : items ;
	function callApi() {

		axios.get('https://fakestoreapi.com/products').then(respose =>
			setItems(respose.data)
		)

	} console.log({ items })

	useEffect(callApi, [])
	
		return <>
			<div className='flex-container flex-wrap'>
				{filteredOrNo.map(item =>
					<div className='card' key={item.id}>
						<h2>{item.title}</h2>
						<img src={item.image} alt="" />
						<p> {item.price} $</p>
						<p>{item.description}</p>
						<Link to={`/Products/${item.id}`} className="link">Vai ai dettagli</Link>
					</div>
				)}
			</div>
		</>
	}


export default Products