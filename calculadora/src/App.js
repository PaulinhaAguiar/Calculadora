import { FaPercentage, FaTimes, FaDivide, FaEquals } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { RiSubtractLine } from 'react-icons/ri';
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
            <button style={{ width: '240px' }}>
              CLEAR
            </button>
            <button style={{ width: '65px' }}>
              <FaPercentage size={15} color='#FFF' />
            </button>
            <button style={{ width: '65px' }}>
              <FaDivide size={15} color='#FFF' />
            </button>
            <button style={{ width: '65px' }}>
              <FaTimes size={15} color='#FFF' />
            </button>
          </div>

          <div className='num-btn'>
            <div className='numbers-btn'>
              <div className='btn-line'>
                <button>
                  7
                </button>
                <button>
                  8
                </button>
                <button>
                  9
                </button>
              </div>

              <div className='btn-line'>
                <button>
                  4
                </button>
                <button>
                  5
                </button>
                <button>
                  6
                </button>
              </div>

              <div className='btn-line'>
                <button>
                  1
                </button>
                <button>
                  2
                </button>
                <button>
                  3
                </button>
              </div>
            </div>

            <div className='btn-column'>
              <button style={{ width: '65px' }}>
                <RiSubtractLine size={25} color='#FFF' />
              </button>
              <button style={{ width: '65px' }}>
                <MdAdd size={25} color='#FFF' />
              </button>
            </div>
          </div>

          <div className='last-line'>
            <button className='last-line-btn'>
              0
            </button>
            <button className='last-line-btn'>
              .
            </button>
            <button style={{ width: '200px', backgroundColor: '#394962' }}>
              <FaEquals size={15} color='#FFF' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}