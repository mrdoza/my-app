import { createSignal, createEffect, createMemo } from "solid-js";
import Body from "./components/DisplayForm";
import Header from "./components/Header";
import Info from "./components/BasicInfo";
import Edu from "./components/Edu";
import styles from "./App.module.css";

// eslint-disable-next-line
import Exp from "./components/Exp";

function App() {
  const [formData, setFormData] = createSignal({});
  const [eduData, setEduData] = createSignal([]);

  const comData = createMemo(() => {
    return { ...formData(), eduData: eduData() };
  });

  createEffect(() => {
    console.log(comData());
  });

  return (
    <>
      <div class={styles.header}>
        <Header />
      </div>
      <div class={styles.App}>
        <div>
          <Info setFormData={setFormData} />
          <Edu setEduData={setEduData} />
          <Exp />
        </div>
        <div>
          <Body comData={comData()} />
        </div>
      </div>
    </>
  );
}

export default App;
