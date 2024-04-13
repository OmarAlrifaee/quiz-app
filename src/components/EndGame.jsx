import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function EndGame({ score, data, hundleRestart }) {
  return (
    <div className="End-Game d-flex flex-column justify-content-center align-items-center">
      <div className="text-white fw-bold text-center">
        {score === data.length && (
          <span className="win text-uppercase text-warning d-block text-center">
            you win
          </span>
        )}
        You Answered <span className="text-danger">{score}</span> <br />
        Right Quistuions from {data.length}
      </div>
      <div className="d-flex align-items-center justify-content-center gap-5 mt-5">
        <button
          className=" btn btn-primary rounded p-2 text-white fs-2 fw-bold d-block"
          onClick={hundleRestart}
        >
          Restart
        </button>
        <Link
          to={"/answers"}
          className="btn btn-primary rounded p-2  text-white fs-2 fw-bold d-block"
        >
          See Answers
        </Link>
      </div>
    </div>
  );
}
