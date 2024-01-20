// Em MeuComponente.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

function Navbar() {
  return(
    <div>

      <nav>
        
        <h2>
           <Link to='/'> <BiCameraMovie/> Movies Lib</Link>
        </h2>

          <input type="text" name="" id="" placeholder='busque um filme' />
          <button>
            <BiSearchAlt2 />
          </button>
        </nav>

    </div>
  )
}

export default Navbar;
