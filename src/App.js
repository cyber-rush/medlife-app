import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toggler from "./components/Toggler";
// import MainSection from "./components/MainSection";

// 
// 

import { TaskProvider } from "./context/task.context";
const App = () => {
  return (
    <>
      <TaskProvider>

        {/* <div className="secLayer">
          
          <div style={{ overflow: "hidden" }}>
            
            <MainSection />
          </div> */}


        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="toggler">
          <Toggler />
        </div>
        <div className="mainSection">Part 4 - Main Section</div>
      </TaskProvider>


    </>
  );
};

export default App;
