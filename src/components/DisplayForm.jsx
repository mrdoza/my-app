function Body(props) {
  return (
    <div className="min-w-64 border-2 shadow-lg m-5 p-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <div className="space-y-2">
        <p className="text-lg">
          <span className="font-semibold"></span> {props.comData.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold"></span> {props.comData.email}
        </p>
        <p className="text-lg">
          <span className="font-semibold"></span> {props.comData.phone}
        </p>
        <p className="text-lg">
          <span className="font-semibold"></span> {props.comData.city},{" "}
          {props.comData.state}
        </p>
      </div>
      <div className="divider my-4"></div>
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <p className="text-lg">
        <span className="font-semibold">School:</span> {props.comData.school}
      </p>
      <p className="text-lg">
        <span className="font-semibold">From:</span> {props.comData.from}
      </p>
      <p className="text-lg">
        <span className="font-semibold">To:</span> {props.comData.to}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Degree:</span> {props.comData.degree}
      </p>
    </div>
  );
}

export default Body;
