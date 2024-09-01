function Body(props) {
  return (
    <div className="border-2 shadow-lg m-8 p-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <div className="space-y-2">
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {props.comData.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> {props.comData.email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> {props.comData.phone}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Location:</span> {props.comData.city},{" "}
          {props.comData.state}
        </p>
      </div>
      <div className="divider my-4"></div>
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      {props.comData.eduData.map((edu, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg">
            <span className="font-semibold">School:</span> {edu.school}
          </p>
          <p className="text-lg">
            <span className="font-semibold">From:</span> {edu.from}
          </p>
          <p className="text-lg">
            <span className="font-semibold">To:</span> {edu.to}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Degree:</span> {edu.degree}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Body;
