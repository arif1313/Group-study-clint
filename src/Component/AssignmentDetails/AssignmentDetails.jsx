import { keys } from "localforage";
import { useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const Singleassignment = useLoaderData();
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline}= Singleassignment;
  
    return (
        <div>
          <div>
            <img src={ImgUrl} alt="" />
          </div>
        </div>
    );
};

export default AssignmentDetails;