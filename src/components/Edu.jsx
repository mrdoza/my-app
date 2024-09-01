function Edu(props) {
  const submitForm = (e) => {
    e.preventDefault();

    const eduData = new FormData(e.target);
    const school = eduData.get("school");
    const from = eduData.get("from");
    const to = eduData.get("to");
    const degree = eduData.get("degree");

    props.setEduData({
      school: school,
      from: from,
      to: to,
      degree: degree,
    });
  };

  return (
    <>
      <h3 class="mt-5 font-bold underline">Education</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="school">
            School:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="text"
            name="school"
            id="school"
            placeholder="School"
          />
        </div>
        <div>
          <label htmlFor="from">
            From:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="date"
            name="from"
            id="from"
          />
        </div>
        <div>
          <label htmlFor="to">
            To:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="date"
            name="to"
            id="to"
          />
        </div>
        <div>
          <label htmlFor="degree">
            Degree:
            <br />
          </label>
          <input
            class="input input-primary input-sm"
            type="text"
            name="degree"
            id="degree"
          />
        </div>

        <button class="btn btn-sm btn-outline mt-5" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Edu;
