import axios from "axios";
const URL_API = `http://localhost:8082/api`;

export const getAllInformationCsvs = () => (
    axios.get(`${URL_API}/listCvsWithDetails`)
)

export const getListCsvs = () => (
    axios.get(`${URL_API}/listCsvs`)
)

export const getDetailCsv = (name) => (
    axios.get(`${URL_API}/detail/${name}`)
)