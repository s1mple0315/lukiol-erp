import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContentTitle from "./components/ContentTitle";
import ContentContainer from "./components/ContentContainer";
import ItemCard from "./components/ItemCard";
import JqueryScript from "./script";

function App() {
  const items = [1, 2, 3];

  return (
    <div className="App">
      <Header />
      <SearchBar />

      <div id="one-tab-content">
        <ContentTitle />
        <ContentContainer
          type={"active"}
          img={<img src="assets/ellipse_success.png" alt="" />}
          statusText={"Подключены"}
        >
          {items.map((item, index) => (
            <ItemCard key={index} />
          ))}
        </ContentContainer>
        <ContentContainer
          type={"inactive"}
          img={<img src="assets/ellipse_danger.png" alt="" />}
          statusText={"Не подключены"}
        >
          {items.map((item, index) => (
            <ItemCard key={index} />
          ))}
        </ContentContainer>
      </div>
      <div id="second-tab-content" style={{ display: "none" }}></div>
      <JqueryScript />
    </div>
  );
}

export default App;
