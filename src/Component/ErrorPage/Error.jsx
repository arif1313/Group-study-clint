
import { Link } from 'react-router-dom';
import errorImage from '../../../public/images/Error.png'

const Error = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
                <img src={errorImage} alt="" />
        Go to home page<Link  to='/' className='btn btn-primary'> Back </Link>
            </div>
        </div>
    );
};

export default Error;