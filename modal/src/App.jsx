import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './App.scss';

function App() {
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  return (
    <div className="app">
      <div className="container">
        <div className="button_click">
          <button onClick={handleOpen}>Open Window</button>
        </div>
        <div className='all-modal'>
          <div className={`modal ${modal ? 'active' : ''}`}>
            <div className="modal_header">
              <h1>Welcome</h1>
              <AiOutlineClose onClick={() => setModal(false)} />
            </div>
            <div className="modal-body">
              <h4>This is window?</h4>
              <ul className="list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="button_close">
                <button onClick={() => setModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${modal ? 'active' : ''}`}
        onClick={() => setModal(false)}></div>
    </div>
  );
}

export default App;
