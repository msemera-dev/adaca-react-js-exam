import './App.css';
import TableComponent from './components/table/TableComponent';
import ColumnAdderModal from './components/modal/ColumnAdderModal';
import { Box } from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2'

function App() {
  const [tableHeaders, setTableHeaders] = useState([
    "Id",
    "First Name",
    "Last Name"
  ]);

  const addTableHeader = (columnName: string) => {
    if (columnName === '') {
      Swal.fire({
        title: 'Error',
        text: 'Text should not be empty',
        icon: 'error'
      });
      return;
    }

    if (tableHeaders.includes(columnName)) {
      Swal.fire({
        title: 'Error',
        text: 'Column already exists',
        icon: 'info'
      });
      return;
    }

    const newHeaders: string[] = [...tableHeaders, columnName];
    return setTableHeaders([...newHeaders]);
  }


  return (
    <div className="App">
      <Box>
        <ColumnAdderModal addTableHeader={addTableHeader} />
        <TableComponent tableHeaders={tableHeaders} />
      </Box>
    </div>
  );
}

export default App;
