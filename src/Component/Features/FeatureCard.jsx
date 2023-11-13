

const FeatureCard = ({features}) => {
    const {title,description,imgUrl,members,meetingTime,location,tags }= features;

    return (
        <div>
            <div className="card h-36 bg-divColor shadow-xl image-full">
  <figure><img className="h-full w-full" src={imgUrl} alt="img" /></figure>
  <div className="card-body">
    <h2 className="text-buttonColor text-2xl font-bold text-center">{title}!</h2>
    <p className="text-divColor font-bold">{description}</p>
  
    
  </div>
</div>
        </div>
    );
};

export default FeatureCard;