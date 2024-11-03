import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const Coffees = () => {
    const coffees = useLoaderData();
    return (
        <div className="grid my-4 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
    );
};

export default Coffees;