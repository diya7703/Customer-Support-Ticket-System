export default function TicketCard({ticket,onClick}){

  return (
    <div
      onClick={()=>onClick(ticket)}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{ticket.title}</h3>

        <span className={`badge ${
          ticket.status==="In Progress"
            ? "badge-warning"
            : "badge-success"
        }`}>
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-1">
        {ticket.description}
      </p>

      <div className="flex justify-between text-xs mt-3 text-gray-400">
        <span>#{ticket.id} {ticket.priority} PRIORITY</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
}