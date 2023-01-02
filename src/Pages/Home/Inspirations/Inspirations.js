import React from 'react';
import importImg1 from '../../../images/inspiration/inspiration1.jpg'
import importImg2 from '../../../images/inspiration/inspiration2.jpg'
import importImg3 from '../../../images/inspiration/inspiration3.jpg'
import Inspiration from '../Inspiration/Inspiration';

const Inspirations = () => {
    const inspirations = [
        { id: 1, name: 'How to choose your wedding dress accessories', date: 'February 3, 2016', description: 'Turpis massa sed elementum tempus egestas sed sed. Tristique senectus et netus et. Nibh mauris cursus mattis molestie a iaculis at.', img: importImg1 },
        { id: 2, name: 'Engagement ring trends that will stand out in the crowd', date: 'January 25, 2016', description: 'Varius quam quisque id diam vel quam elementum pulvinar. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.', img: importImg2 },
        { id: 3, name: 'Romantic garden wedding ideas we love', date: 'February 15, 2015', description: 'Ornare aenean euismod elementum nisi. Quis commodo odio aenean sed. Urna condimentum mattis pellentesque id at volutpat diam ut.', img: importImg3 }

    ]
    return (
        <div className='container my-5 py-4'>
            <h1>Inspiration for your wedding</h1>
            <p className='my-5 pb-4'>Explore our blog for insightful articles, personal reflections and
                ideas that inspire action on the topics you care about.</p>
            <div style={{ width: '95%' }} className="row mx-auto">
                {
                    inspirations.map(inspiration => <Inspiration
                        key={inspiration.id}
                        inspiration={inspiration}
                    ></Inspiration>)
                }
            </div>

        </div>
    );
};

export default Inspirations;