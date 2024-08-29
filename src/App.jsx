import { createSignal, createEffect } from "solid-js";
import Body from "./components/DisplayForm";
import Header from "./components/Header";
import Info from "./components/BasicInfo";
import styles from "./App.module.css";

function App() {
  const [formData, setFormData] = createSignal({});

  return (
    <>
      <div class={styles.header}>
        <Header />
      </div>
      <div class={styles.App}>
        <div>
          <Info setFormData={setFormData} />
        </div>
        <div>
          <Body formData={formData()} />
        </div>
      </div>
    </>
  );
}

export default App;
