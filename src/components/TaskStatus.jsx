export default function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Task Status</h2>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-500">
            Select a ticket to add to Task Status
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="border rounded-lg p-3 mb-3 flex justify-between items-center"
            >
              <p className="text-sm font-medium">{task.title}</p>

              <button
                onClick={() => onComplete(task)}
                className="btn btn-success btn-sm text-white"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>
      <h2 className="text-lg font-semibold mb-3">Resolved Tasks</h2>

      <div className="bg-white rounded-lg shadow p-4">
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-500">
            No resolved tasks yet.
          </p>
        ) : (
          resolved.map((task) => (
            <div
              key={task.id}
              className="border rounded-lg p-3 mb-3"
            >
              <p className="text-sm font-medium text-green-600">
                ✔ {task.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}