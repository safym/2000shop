// import components
import Article from "./article";
import TextAbout from "./textAbout";

const HomePage = () => {
  return (
    <div className="Content">
      <div className="HomeWrapper">
        <div className="Card">
          <Article />
        </div>
        <div className="TextWrap">
          <TextAbout />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
