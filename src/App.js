
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toggler from "./components/Toggler";

import { TaskProvider } from "./context/task.context";
const App = () => {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <div className="secLayer">
          <Sidebar />
          <div style={{ overflow: "hidden" }}>
            <Toggler />
            <MainSection />
          </div>

        </div>
      </TaskProvider>


    </>
  );
};

export default App;
