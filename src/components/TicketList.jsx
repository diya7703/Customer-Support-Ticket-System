import TicketCard from "./TicketCard";

export default function TicketList({tickets,onSelect}){

  return (
    <div className="lg:col-span-2">
      <h2 className="font-semibold mb-4">Customer Tickets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tickets.map(ticket=>(
          <TicketCard
            key={ticket.id} ticket={ticket} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
}