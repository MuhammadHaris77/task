import './App.css'
import frame1 from '../src/assets/frame1.png'
import inputbutton from '../src/assets/button.png'

function App() {

  return (
    <div className='container-fluid'>
      <dv className="container text-center">
        <div className="proboster ">
          <img src={frame1} alt="" /><span className='pro'>PRO</span><span className='ro'>RO</span><span className='pro'>STER</span>
        </div>
        <div className='stay-connected '>
          <p>Stay Connected</p>
        </div>
        <br />
        <div className='comingsoon'>
          <p id='coming'>COMING SOON</p>
        </div>
        <br />
        <div className='coming-para'>
          <p>Assemble your team, elevate your game. A new era in team management is on the horizon.</p>
        </div>
        <br />
        <div className='container time '>
          <div className="row ">
            <div className="col-md-6 m-2 " id='time1'><p id='time-para1'>02</p></div>
            <div className="col-md-6 m-2 " id='time2'><p id='time-para2'>04</p></div>
            <div className="col-md-6 m-2"  id='time3'><p id='time-para3'>44</p></div>
            <div className="col-md-6 m-2"  id='time4'><p id='time-para4'>56</p></div>
          </div>
        </div>

         <br />
        <div className='input-field p-2'>
        <input className='input ' type="text"  placeholder='Enter your Email Updates'  />
        <button className='input-btn rounded-circle'>    <img src={inputbutton} class="rounded-circle" alt="..."/>
        </button>
    
        </div>

      </dv>
    </div>
  )
}

export default App
