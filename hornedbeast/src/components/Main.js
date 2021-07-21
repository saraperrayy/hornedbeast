import React from 'react';

import HornedBeast from './HornedBeast';
import Bird from '../img/parrot.jpeg';
import Bee from '../img/bee.jpg';
import { animalData } from '../data';

function Main() {
    return (
      <>
        {/* <HornedBeast 
          title="Parrot" 
          imgurl={Bird} 
          desc="Indeed, parrots learn well. They can not only speak words but associate them with objects or situations. They can use tools and solve problems. Some scientists even believe they have the logic of a four-year-old, proving this with different experiments. Parrots are also very playful birds. In case you didn’t know it yet, playing is a sign of intelligence."
        />
        <HornedBeast 
          title="Bee" 
          imgurl={Bee} 
        /> */}
        {animalData.map((data, key) => {
          return (
            <div key={key} >
              <HornedBeast
                key={key}
                image_url={data.image_url}
                title={data.title}
                description={data.description}
              />
            </div>
          )
          // <div key={key} ></div>
          // <HornedBeast image_url={image_url} title={title} description={description} />
        })}
      </>
      );
    }

export default Main;
