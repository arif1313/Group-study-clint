
import { Carousel } from 'react-responsive-carousel';
import './caro.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";


const Carosol = () => {
    return (
        <div>
             <Carousel className=''>
                <div>
                    <img className='h-96' src='https://th.bing.com/th/id/OIP.9MJ0COBRAxHEonRdRrKU1gHaE8?pid=ImgDet&rs=1' />
                  
                </div>
                <div>
                    <img className='h-96'  src='https://th.bing.com/th/id/R.985b38c56bc1a595226062a2bb80e5e4?rik=cyDWZ9NmMAd8nA&pid=ImgRaw&r=0&sres=1&sresct=1' />
                   
                </div>
                <div>
                <img className='h-96' src='https://th.bing.com/th/id/OIP.VfuhcfsRN3tUd85ZB8R71AHaE8?pid=ImgDet&rs=1' />
                 
                </div>
                <div>
                <img className='h-96' src='https://th.bing.com/th/id/R.91ba30f74ca35ad258b7620af5bc6cdd?rik=vso%2fYNSj1H2myg&pid=ImgRaw&r=0' />
                 
                </div>
            
            </Carousel>
        </div>
    );
};

export default Carosol;