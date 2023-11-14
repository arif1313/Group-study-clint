

const FeatureCard = ({featear}) => {
    const {title,description }= featear;

    return (
        <div>
  <div className="hero shadow-xl rounded-xl border-2 border-buttonColor">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-3xl font-bold text-mainTextcolor">{title}</h1>
      <p className="py-6 ">{description}</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default FeatureCard;