import "./DisplayForm.css";

function Body(props) {
  return (
    <div class="printable border-s-2 drop-shadow-md m-5">
      <h1>About Me</h1>
      <p>Name: {props.formData.name}</p>
      <p>Email: {props.formData.email}</p>
      <p>Phone: {props.formData.phone}</p>
      <p>City: {props.formData.city}</p>
      <p>State: {props.formData.state}</p>
      <p>Zip: {props.formData.zip}</p>
    </div>
  );
}

export default Body;
