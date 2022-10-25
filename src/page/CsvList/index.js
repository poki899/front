import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getListCsvs } from "../../services/csv.service";

const CsvList = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const csvs = await getListCsvs();
            setData(csvs.data);

        }
        fetchData();
    }, [])
    if (!data) return "loading";
    const { files } = data;
    return (
        <div>
            <h1>List Csv</h1>
            <ul className="list-group">
                {files.map((item, key) => {
                    return <li key={key} className="list-group-item"><Link to={`/detail/${item}`} className="nav-link">
                        {item}
                    </Link></li>
                })}
            </ul>
        </div>
    )
}

export default CsvList;