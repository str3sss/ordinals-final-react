import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Select from './components/Select';
import Table from './components/Table';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="main">
          <div className="container">
            <div className="main__head">
              <h1>Ordinals Rankings</h1>
              <div className="main__head-cta">
                <SearchBox />
                <Select />
              </div>
            </div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
