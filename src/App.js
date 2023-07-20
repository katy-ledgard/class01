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

  //create a copy of data
  //we want the page to change when state is changed (to the copied version of data)
  const [beastData, setBeastData] = useState(data);

  function handleBeastModal(beastParam) {
    setBeastModal(!beastModal);
    setBeastModelContent(beastParam);
  }

  function closeBeastModal() {
    setBeastModal(!beastModal);
    setBeastModelContent({});
  }

  //create function event (to run when select changes in header - see onChange event)

  function handleBeastData(event) {
    //create a variable for beast/horn number
    // value logs as string; use parsInt to turn string to number
    let beastHornNum = parseInt(event.target.value);
    console.log(beastHornNum);

    //filter array method takes one argument that is a function
    // filter will check condition on each object and make an array of the objects that match the condition (will check if the .horns/property of horns strictly equal to the beastHornNum)
    const filterBeasts = data.filter(
      (beastParam) => beastParam.horns === beastHornNum
    );

    //if the value is an empty string, set as data(all objects); if false, set as filterBeast (new arrays)

    // if (event.target.value === "") {
    //   setBeastData(data)
    // } else {
    //   setBeastData(filterBeasts)
    // }

    event.target.value === "" ? setBeastData(data) : setBeastData(filterBeasts);
  }

  return (
    <div className="App">
      <Header handleBeastData={handleBeastData} />
      <Main beastData={beastData} handleBeastModal={handleBeastModal} />
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
