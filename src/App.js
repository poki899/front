import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CsvTable from './page/CsvTable';
import CsvList from './page/CsvList';
import CsvDetail from './page/CsvDetail';

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-danger">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            Csv information
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/list"} className="nav-link">
                            Only list Csv
                        </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<CsvTable />} />
                    <Route path="/list" element={<CsvList />} />
                    <Route path="/detail/:name" element={<CsvDetail />} />
                </Routes>
            </div>
        </div>
    );

}

export default App;
