const MainComponent = () => {
  return (
    <main className="main">
      <div>
        <h1 className="title">Fun facts about React</h1>
        <ul className="fact-list">
          <li className="fact-list__item">Was first released in 2013</li>
          <li className="fact-list__item">
            Was originally created by Jordan Walke
          </li>
          <li className="fact-list__item">
            Has well over 100k stars on Github
          </li>
          <li className="fact-list__item">Is maintained by Facebook</li>
          <li className="fact-list__item">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MainComponent;
