import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Table from '../../components/Table';
import { getDetailCsv } from "../../services/csv.service";


const CsvDetail = () => {
    const { name } = useParams();

    const [data, setData] = useState(undefined);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const csvs = await getDetailCsv(name);
                setData(csvs.data);
            } catch (error) {
                setError(error.response.data.message)
            }
        }
        fetchData();
    }, [name])
    if (error) return <h1> {error}: {name}</h1>
    if (!data) return "loading";
    return (
        <div>
            <h1>{name}</h1>
            <Table data={data} />
        </div>
    )
}

export default CsvDetail;