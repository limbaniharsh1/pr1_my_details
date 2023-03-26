import logo from './logo.svg';
import './App.css';
import './pr1.css';
import img from './bg-myimage.png';
import Bio from './Bio';


function App() {
  return (
    <div>
      <div class="box container">
        <div class="row">
          <div class="w-50 p-1">
            <div class="w-100 b-right">
              <div class="image-box">
                <img src={img}></img>
              </div>
            </div>
          </div>
          <Bio/>
        </div>
      </div>
    </div>
  );
}

export default App;
