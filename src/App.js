import "./Reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import data from "./data.json";
import { useState } from "react";
import SelectedBeast from "./Components/SelectedBeast/SelectedBeast";

function App() {
  const [beastModal, setBeastModal] = useState(false);
  const [beastModelContent, setBeastModelContent] = useState({});

  function handleBeastModal(beast) {
    setBeastModal(!beastModal);
    setBeastModelContent(beast);
  }

  function closeBeastModal() {
    setBeastModal(!beastModal);
    setBeastModelContent({});
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleBeastModal={handleBeastModal} />
      {beastModal && (
        <SelectedBeast
          beastModalContent={beastModelContent}
          closeBeastModal={closeBeastModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
