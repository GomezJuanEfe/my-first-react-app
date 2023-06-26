import './App.css';

function App({imgSrc}) {
  return (
    <div>
      <header className="py-mb m-ds">
        <h1>404 NOT FOUND</h1>
      </header>

      <main className="m-ds">
        <section className="main-flex">

          <div className="image">
            <img src={imgSrc}/>
          </div>

          <div className="body-main py-mb">
            <h2>I have bad news for you</h2>
            <p>The page you are looking for might be removed or is temporary unavailable</p>
            <a href="#">BACK TO HOMEPAGE</a>
          </div>

        </section>
      </main>

      <footer>
        <div>
          <p>Created by GomezJuanEfe</p>
        </div>
      </footer>
    </div>
  );
}

export default App;