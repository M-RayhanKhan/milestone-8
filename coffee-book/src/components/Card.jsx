/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Card = ({coffee}) => {
    const {id, name, image, category , description} = coffee;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="w-full h-[200px]">
          <img className="h-full w-full object-cover"
            src={image}
            alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Card;