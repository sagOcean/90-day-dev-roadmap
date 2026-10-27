import './Stats.css'

function Stats({stats}) {
  return (
    <>
      <div className="stats">
        <div className="stat">{stats[0]}</div>
        <div className="stat">{stats[1]}</div>
        <div className="stat">{stats[2]}</div>
      </div>
    </>
  );
}

export default Stats;
