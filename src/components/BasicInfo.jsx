function Info(props) {
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const city = formData.get("city");
    const state = formData.get("state");

    props.setFormData({
      name: name,
      phone: phone,
      email: email,
      city: city,
      state: state,
    });
  };

  return (
    <>
      <h3 class="font-bold underline">Basic Info</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">
            Your Name:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="city">
            City:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="text"
            name="city"
            id="city"
          />
        </div>
        <div>
          <label htmlFor="state">
            State:
            <br />
          </label>

          <input
            class="input input-primary input-sm"
            type="text"
            name="state"
            id="state"
          />
        </div>
        <button class="btn btn-outline mt-5" type="submit">
          Submit/Edit
        </button>
      </form>
    </>
  );
}

export default Info;
