import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import ExpertiseContainer from "./Expertise-container";
import Banner from "./Banner";
import data from "./data.json";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <section className="about flex">
        <h1>BLOGS AND INSIGHTS</h1>
      </section>
      <div>
        {data.map((item) => (
          <Article cardTitle={item.cardTitle} borderColor={item.borderColor} imgUrl={item.imgUrl} />
        ))}
      </div>
      <ExpertiseContainer />
      <Footer />
    </div>
  );
}

export default App;