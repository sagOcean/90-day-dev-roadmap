import './Stats.css'

function Stats({stats}) {
  return (
    <>
      <div className="stats">
        <div className="stat">{stats.followers}</div>
        <div className="stat">{stats.following}</div>
        <div className="stat">{stats.post}</div>
      </div>
    </>
  );
}

export default Stats;
