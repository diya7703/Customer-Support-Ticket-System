import { useState } from "react";
import ticketsData from "./data/tickets";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { toast } from "react-toastify";

export default function App(){

  const [tickets,setTickets]=useState(ticketsData);
  const [inProgress,setInProgress]=useState([]);
  const [resolved,setResolved]=useState([]);

  const addTask=(ticket)=>{
    if(inProgress.find(t=>t.id===ticket.id)) return;

    setInProgress([...inProgress,ticket]);
    toast.success("Ticket added to Task Status");
  };

  const completeTask=(ticket)=>{
    setInProgress(inProgress.filter(t=>t.id!==ticket.id));
    setResolved([...resolved,ticket]);
    setTickets(tickets.filter(t=>t.id!==ticket.id));

    toast.success("Task completed successfully");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

        <Banner
          inProgressCount={inProgress.length}
          resolvedCount={resolved.length}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <TicketList
            tickets={tickets}
            onSelect={addTask}
          />

          <TaskStatus
            tasks={inProgress}
            onComplete={completeTask}
          />

        </div>

      </div>

      <Footer />
    </>
  );
}