/* eslint-disable no-unused-vars */
import autoAnimate from '@formkit/auto-animate';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const App = () =>{
  const [show , setshow] = useState(false);
  const parent  = useRef(null);
  useEffect(()=>{
    parent.current && autoAnimate(parent.current);
  },[parent]);
  const reveal = () =>{
    setshow(!show);
  }
  return(
   <>
    <div ref={parent}>
      <strong onClick={reveal}>
        Click Me to Open
      </strong>
      {
        show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo eum at officia distinctio repellat dolore, velit assumenda dolores obcaecati. Beatae, possimus neque soluta temporibus in perspiciatis sit voluptatem sint assumenda tempora hic architecto.</p>
      }
    </div>
   </>
  )
}
export default App;