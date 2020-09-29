import React from 'react';
import img01 from './image/1.jpg';
import img02 from './image/2.jpg';
import img03 from './image/3.jpg';
import img04 from './image/4.jpg';
import img05 from './image/5.jpg';


function Food({name, picture, message0}) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <img src={picture} alt={message0}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '햄버거',
    image: img01,
    message0: '햄버거 사진'
  },
  {
    id: 2,
    name: '연어',
    image: img02,
    message0: '연어 사진'
  },
  {
    id: 3,
    name: '닭발',
    image: img03,
    message0: '닭발 사진'
  },
  {
    id: 4,
    name: '호떡',
    image: img04,
    message0: '호떡 사진'
  },
  {
    id: 5,
    name: '스테이크',
    image: img05,
    message0: '스테이크 사진'
  },
];

function App() {
  
   return(
   <div>
     {foodILike.map(dish =>(<Food key={dish.id} name={dish.name} picture={dish.image} alt0={dish.message0}/>))}
     </div>
   );
}

export default App;
