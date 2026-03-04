export default function TicketCard({ ticket, onClick }) {

  return (
    <div
      onClick={() => onClick(ticket)}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{ticket.title}</h3>

        <span className={`badge ${ticket.status === "In Progress" ? "badge-warning" : "badge-success"}`}>{ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-1">
        {ticket.description}
      </p>

      <div className="flex justify-around text-xs t mt-3 text-gray-500">
        <span className="font-medium">#{ticket.id} </span>
        <span
          className={`font-semibold
    ${ticket.priority === "HIGH" ? "text-red-500" : ""}
    ${ticket.priority === "MEDIUM" ? "text-yellow-500" : ""}
    ${ticket.priority === "LOW" ? "text-green-500" : ""}
  `}
        >{ticket.priority} PRIORITY</span>
        <span className=" text-gray-500 font-medium">{ticket.customer} </span>
        <span className="text-gray-500 font-medium">{ticket.createdAt}</span>
      </div>
    </div>
  );
}