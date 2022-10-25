const Table = ({ data }) => {
    const { header, rows } = data;
    return <table className="table">
        <thead>
            <tr>
                <th scope="col" className="text-capitalize">{header.field1}</th>
                <th scope="col" className="text-capitalize">{header.field2}</th>
                <th scope="col" className="text-capitalize">{header.field3}</th>
                <th scope="col" className="text-capitalize">{header.field4}</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((item, index) => {
                return <tr key={index}>
                    <th scope="row">{item.field1 || ''}</th>
                    <td>{item.field2 || ''}</td>
                    <td>{item.field3 || ''}</td>
                    <td>{item.field4 || ''}</td>
                </tr>
            })}

        </tbody>
    </table >
}

export default Table;