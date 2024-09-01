import { createSignal } from "solid-js";

function Edu(props) {
  const [entries, setEntries] = createSignal([{ id: 1 }]);

  const addEntry = () => {
    setEntries([...entries(), { id: entries().length + 1 }]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const eduData = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((acc, el) => {
        const [field, id] = el.name.split("-");
        if (!acc[id]) acc[id] = {};
        acc[id][field] = el.value;
        return acc;
      }, {});

    props.setEduData(Object.values(eduData));
  };

  return (
    <>
      <h3 class="mt-5 font-bold underline">Education</h3>
      <form onSubmit={submitForm}>
        {entries().map((entry) => (
          <div key={entry.id}>
            <label htmlFor={`school-${entry.id}`}>
              School:
              <br />
              <input
                class="input input-primary input-sm"
                type="text"
                name={`school-${entry.id}`}
              />
            </label>
            <br />
            <label htmlFor={`from-${entry.id}`}>
              From:
              <br />
              <input
                class="input input-primary input-sm"
                type="month"
                name={`from-${entry.id}`}
              />
            </label>
            <br />
            <label htmlFor={`to-${entry.id}`}>
              To:
              <br />
              <input
                class="input input-primary input-sm"
                type="month"
                name={`to-${entry.id}`}
              />
            </label>
            <br />
            <label htmlFor={`degree-${entry.id}`}>
              Degree:
              <br />
              <input
                class="input input-primary input-sm"
                type="text"
                name={`degree-${entry.id}`}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="submit" class="btn btn-sm btn-outline btn-primary mt-3">
          Submit/Edit
        </button>
        <br />
        <button
          type="button"
          onClick={addEntry}
          class="btn btn-sm btn-outline btn-secondary mt-3"
        >
          Add Another
        </button>
      </form>
    </>
  );
}

export default Edu;
