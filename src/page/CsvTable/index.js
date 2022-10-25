import { useEffect, useState } from "react";
import Table from '../../components/Table';
import { getAllInformationCsvs } from "../../services/csv.service";

const CsvTable = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const csvs = await getAllInformationCsvs();
            setData(csvs.data);

        }
        fetchData();
    }, [])
    if (!data) return "loading";
    return (
        <div>
            <h1>All Data Csvs</h1>
            <Table data={data} />
        </div>
    )
}

export default CsvTable;