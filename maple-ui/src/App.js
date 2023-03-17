import './App.css';

// Gets the EXP required to go from stlvl to endlvl with the given "type" of character
async function getExp(stlvl,endlvl,type){
  // Alert if invalid start or end level is given
  if(stlvl === ''){
    alert("Please enter a valid start level (1 - 300)")
  }else if(endlvl === ''){
    alert("Please enter a valid end level (1 - 300)")
  }else{
    // fetch API from localhost:8080/exp/{stlvl}/{endlvl}/{type}
    await fetch('/exp/'+stlvl+'/'+endlvl+'/'+type)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      document.getElementById("output").innerHTML = data.exp;  
      }
      );
  }
}

function App() {
  return (
<div>
  <main className="h-screen w-screen bg-cover text-gray-400 bg-gray-900 body-font" style={{ backgroundImage:`url(${"mapleback2.jpg"})`}} >

    <div className="container w-full mx-auto pl-20 flex-row">

          <div className="container w-full pt-36 pr-60">
            <h2 className ="text-black text-5xl font-itim mt-0 mb-6"> Maple EXP Calculator </h2>
            <input placeholder = "Start Level" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="number" id="stlvl"/>
            <input placeholder = "End Level" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="number" id="endlvl"/>
          
          </div>

          <div className="container w-full items-start">
          
            <select className = "rounded" id = "type">
              <option value="NONE">NONE</option>
              <option value="MEGA">MEGA</option>
              <option value="TERA">TERA</option>
              <option value="HYPER">HYPER</option>
            </select>
        
            <button className=" ml-80 bg-transparent hover:scale-110 transition duration-300 ease-in-out rounded" onClick={() => getExp(document.getElementById("stlvl").value,document.getElementById("endlvl").value,document.getElementById("type").value)}> 
              <img src = "maplebutton2.png" className="h-14 w-14"  alt="buttonpng" border="0" />
            </button>
          </div>
          <div>
          <p className = "font-itim my-10 text-gray-700 text-4xl" id = "output">
          </p>
          </div>
    </div>
  </main> 
</div> 
  );
}

export default App;
