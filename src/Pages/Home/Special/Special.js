import React from 'react';
import specialImg1 from '../../../images/special/special1.jpg';
import specialImg2 from '../../../images/special/special2.jpg'
import specialImg3 from '../../../images/special/special3.jpg'
import SpecialItem from '../SpecialItem/SpecialItem';


const Special = () => {
    const special = [
        { id: 1, name: 'Getting Married', description: 'Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.', img: specialImg2 },
        { id: 2, name: 'Location Scounting', description: 'Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.', img: specialImg1 },
        { id: 3, name: 'Summer Wedding', description: 'Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.', img: specialImg3 }
    ]
    return (
        <div className='container'>

            <div style={{ width: '95%' }} className="row mx-auto">
                {
                    special.map(specialItem => <SpecialItem
                        key={specialItem.id}
                        specialItem={specialItem}
                    ></SpecialItem>)
                }
            </div>
        </div>
    );
};

export default Special;