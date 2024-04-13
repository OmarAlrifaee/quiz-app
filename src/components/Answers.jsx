/* eslint-disable react/prop-types */
export default function Answers({
  isActive,
  noClick,
  hundleClick,
  data,
  currentIndex,
}) {
  // note: if i want to return from a function i can use () insted of {}
  return (
    <div>
      <h2 className=" p-5 bg-primary text-white text-capitalize text-center fw-bold fs-1">
        {data[currentIndex]?.qusition}
      </h2>
      <div className="answers mx-auto my-5 text-center text-capitalize text-white">
        {data[currentIndex].answers.map(({ text, isTrue, id }) => (
          <div
            className={`answer p-3 rounded fw-bold mt-2 w-50 mx-auto ${
              isActive(isTrue) ?? ""
            } ${(noClick && "noclick") || ""}`}
            onClick={() => hundleClick(isTrue)}
            key={id}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
