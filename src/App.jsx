import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets";
import { toast } from "react-toastify";

export default function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.info("Task already added!");
      return;
    }

    setInProgress([...inProgress, ticket]);
    toast.success("Added to Task Status!");
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));

    setTickets(tickets.filter((t) => t.id !== ticket.id));

    setResolved([...resolved, ticket]);

    toast.success("Task Completed!");
  };

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TicketList tickets={tickets} onSelect={handleAddTask} />
        </div>

        <TaskStatus
          tasks={inProgress}
          resolved={resolved}
          onComplete={handleComplete}
        />
      </div>

      <Footer />
    </>
  );
}