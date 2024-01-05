

const ResourceCard = ({resource}) => {
    const {title, description} = resource;
    return (
        <div>
            <div className="card h-56 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ResourceCard;