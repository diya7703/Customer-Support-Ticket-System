export default function Banner({inProgressCount,resolvedCount}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="gradient-purple text-white rounded-xl p-8 text-center">
        <p>In-Progress</p>
        <h2 className="text-5xl font-bold">{inProgressCount}</h2>
      </div>

      <div className="gradient-green text-white rounded-xl p-8 text-center">
        <p>Resolved</p>
        <h2 className="text-5xl font-bold">{resolvedCount}</h2>
      </div>
    </div>
  );
}
