
import './Bio.css'

function Bio({name,job_name,description}) {
  return (
    <>
      <div className="bio">
        <div className="name">{name}</div>
        <div className="job">{job_name}</div>
      </div>

      <div className="description">{description}</div>
    </>
  );
}

export default Bio;
