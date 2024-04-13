import { Link } from "react-router-dom";
import { data } from "./data";
import "./style/wellcome.css";
export default function WellComePage() {
  return (
    <div className="wellcome p-5">
      <h1 className="text-warning text-uppercase mx-auto text-center fw-bold">
        Quiz App
      </h1>
      <h3 className="text-white text-capitalize mx-auto text-center fw-bold mt-3 lh-lg">
        You Will Answer <span className="text-danger">{data.length}</span>{" "}
        Quastions about programming <br />
        if you are ready click the start buttton
      </h3>
      <Link
        className="btn btn-md btn-primary mx-auto fw-bold w-25 d-block mt-5"
        to={"/game"}
      >
        Lets Start
      </Link>
    </div>
  );
}
