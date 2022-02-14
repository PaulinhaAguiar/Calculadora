import { FaPercentage } from 'react-icons/fa';
import { GrFormAdd, GrFormSubtract, GrFormClose } from 'react-icons/gr';
import './styles.css';

export default function App(){
  return(
    <div className="container"> 
      <div className="calculadora">
        <div className="visor">
          <text>0</text>
        </div>

        <div className="calc-btns">
          <div className='row-btn'>
            <button>CLEAR</button>
            <button>
              <FaPercentage size={15} color='#FFF' />
            </button>
            <button>
              <FaPercentage size={15} color='#FFF' />
            </button>
            <button>
              <FaPercentage size={15} color='#FFF' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}