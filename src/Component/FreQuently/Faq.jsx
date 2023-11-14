

const Faq = () => {
    return (
      <div> <h1 className="text-mainTextcolor font-bold text-center text-2xl my-12">Frequently Ask question</h1>
        <div className="bg-divColor space-y-3 p-5 rounded-md text-mainTextcolor">
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" readOnly="readOnly" /> 
  <div className="collapse-title text-xl font-medium">
    How can I take Assignment?
  </div>
  <div className="collapse-content"> 
    <p>Create a acout for taking Assingnment</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Can I create any Assignment?
  </div>
  <div className="collapse-content"> 
    <p>Yess! if you loggedIn you can create Assignment post </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
   How can I get mark ? 
  </div>
  <div className="collapse-content"> 
    <p> If Assignment creator chack your submition assignment , He mark on your performance  </p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Faq;