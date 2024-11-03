import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeeCard = () => {
    const [coffees, setCoffees] = useState([]);
    const { category } = useParams()
    const data = useLoaderData();

    const navigate = useNavigate()

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filterByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])

    return (
        <div>
            <h3 className="text-2xl mt-4 font-bold">category cards: <small className="font-thin">{category}</small></h3>
            <div className="grid my-4 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button onClick={() => navigate('/coffee')} className="btn btn-warning ">All</button>
        </div>
    );
};

export default CoffeeCard;