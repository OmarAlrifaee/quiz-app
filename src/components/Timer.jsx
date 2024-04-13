/* eslint-disable react/prop-types */
export default function Timer({ timer }) {
  return (
    <div
      className="timer rounded-circle p-5 my-5 mx-auto bg-primary 
    text-white text-center fs-1 fw-bold 
    d-flex justify-content-center align-items-center"
    >
      <span>{timer}</span>
    </div>
  );
}
