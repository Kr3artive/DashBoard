import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import DashboardDetails from "./components/DashboardDetails";
import NewestPeeps from "./components/NewestPeeps";
import Services from "./components/Services";
import Event from "./components/Event";
import Calender from "./components/Calender";

const App = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <Greetings />
          <div className="grid grid-cols-3 gap-6 h-full">
            <div className="col-span-2">
              <DashboardDetails className="h-1/3" />
              <NewestPeeps className="h-1/3" />
              <Services className="h-1/3" />
            </div>
            <div className="space-y-6 h-full">
              <Event className="h-1/2" />
              <Calender className="h-1/2" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
