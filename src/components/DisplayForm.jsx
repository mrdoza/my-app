import "./DisplayForm.css";

function Body(props) {
  return (
    <div className="border-2 shadow-lg m-5 p-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <div className="space-y-2">
        <p className="text-lg"><span className="font-semibold">Name:</span> {props.formData.name}</p>
        <p className="text-lg"><span className="font-semibold">Email:</span> {props.formData.email}</p>
        <p className="text-lg"><span className="font-semibold">Phone:</span> {props.formData.phone}</p>
        <p className="text-lg"><span className="font-semibold">City:</span> {props.formData.city}</p>
        <p className="text-lg"><span className="font-semibold">State:</span> {props.formData.state}</p>
        <p className="text-lg"><span className="font-semibold">Zip:</span> {props.formData.zip}</p>
      </div>
    </div>
  );
}

export default Body;
