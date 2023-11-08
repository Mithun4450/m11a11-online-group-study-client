

const FeatureCard = ({feature}) => {

    const {title, details, imageUrl} = feature;

    return (
        <div className="card bg-red-300 shadow-xl rounded-full p-10">
            <figure className="px-10 pt-10">
                <img src={imageUrl} alt="Image of feature" className="rounded-full w-full h-36" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                
            </div>
        </div>
    );
};

export default FeatureCard;