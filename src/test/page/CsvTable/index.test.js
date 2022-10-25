import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { fireEvent, render } from '@testing-library/react';
import CsvTable from '../../../page/CsvTable';
const mockAxios = axios;

jest.mock('axios');

describe('CsvTable tests', () => {

    test('Snapshot CsvTable', () => {
        mockAxios.get.mockResolvedValue({
            data: {
                "header": {
                    "field1": "file",
                    "field2": "text",
                    "field3": "number",
                    "field4": "hex"
                },
                "rows": [
                    {
                        "field1": "test2.csv",
                        "field2": "jIXHZ"
                    },
                    {
                        "field1": "test2.csv",
                        "field2": "JqAra",
                        "field3": "5557",
                        "field4": "25abb7db312e50eb4cf98477dc38da88"
                    }
                ]
            }
        });

        // React.useState = jest.fn().mockReturnValue([
        //     data,
        //     (value) => {
        //         data = value;
        //     },
        // ]);
        const { container } = render(
            <BrowserRouter>
                <CsvTable />
            </BrowserRouter>,
        );
        expect(container).toMatchSnapshot();
    });
});