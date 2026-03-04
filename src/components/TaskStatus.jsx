export default function TaskStatus({tasks,onComplete}){

  return (
    <div>
      <h2 className="font-semibold mb-4">Task Status</h2>

      <div className="bg-white rounded-lg shadow p-4 space-y-3">

        {tasks.length===0 && (
          <p className="text-gray-500 text-sm text-center">
            No resolved tasks yet.
          </p>
        )}

        {tasks.map(task=>(
          <div key={task.id} className="border rounded p-3">
            <h3 className="font-semibold text-sm">
              {task.title}
            </h3>

            <button
              onClick={()=>onComplete(task)}
              className="btn btn-success btn-xs mt-2"
            >
              Complete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}