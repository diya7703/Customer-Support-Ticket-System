import vector1 from "../img/vector1.png";
import vector2 from "../img/vector2.png";
export default function Banner({inProgressCount,resolvedCount}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-purple-600 text-white rounded-xl p-8 text-center " 
      style={{
         backgroundImage: `url(${vector1}),url(${vector2})`,
         }}>
        <p>In-Progress</p>
        <h2 className="text-5xl font-bold">{inProgressCount}</h2>
      </div>

      <div className="bg-[#1b9f3c] text-white rounded-xl p-8 text-center" style={{
         backgroundImage: `url(${vector1}),url(${vector2})`,
         }}>
        <p>Resolved</p>
        <h2 className="text-5xl font-bold">{resolvedCount}</h2>
      </div>
    </div>
  );
}
