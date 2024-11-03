/* eslint-disable react/prop-types */

const Heading = ({title, subTitle}) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-4xl font-thin ">{title}</h1>
            <p className="text-gray-500">{subTitle}</p>
        </div>
    );
};

export default Heading;