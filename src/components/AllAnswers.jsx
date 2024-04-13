import { data } from "./data";
import { Link } from "react-router-dom";
import "./style/All.css";
export default function AllAnswers() {
  return (
    <div className="all-answers py-5">
      <h1 className="text-white fw-bold display-1 text-center text-capitalize">
        All Answers
      </h1>
      <div className="d-flex gap-5 align-items-center px-5 py-5 text-capitalize fw-bold">
        <div className=" text-white fs-3 lh-lg">
          Quistions:
          {data.map(({ qusition }, index) => (
            <div
              className="qusition"
              key={index}
            >
              {index + 1}- {qusition}?
            </div>
          ))}
        </div>
        <div className="text-info fs-3 lh-lg">
          Answers:
          {data.map(({ answers }, index) =>
            answers.map(
              ({ isTrue, id, text }) =>
                isTrue && (
                  <div
                    className="right-answer"
                    key={id}
                  >
                    {index + 1}- {text}
                  </div>
                )
            )
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <Link
          to={"/"}
          className="btn btn-primary rounded p-2 text-white fs-2 fw-bold d-block"
        >
          Go Home
        </Link>
        <Link
          to={"/game"}
          className="btn btn-primary rounded p-2 text-white fs-2 fw-bold d-block"
        >
          Restart
        </Link>
      </div>
    </div>
  );
}
