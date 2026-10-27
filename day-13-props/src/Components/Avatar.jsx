
import './Avatar.css'

function Avatar({img}) {
  return (
    <>
      <div className="avatar">
        <img src={img} alt="man image" />
      </div>
    </>
  );
}

export default Avatar;
