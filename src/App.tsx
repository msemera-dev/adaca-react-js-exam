import './App.css';
import TableComponent from './components/table/TableComponent';
import ColumnAdderModal from './components/modal/ColumnAdderModal';
import { Box } from '@mui/material';
import useColumnHandler from './hooks/useColumnHandler';

function App() {
  const { tableHeaders } = useColumnHandler();
  return (
    <div className="App">
      <Box>
        <ColumnAdderModal />
        <TableComponent tableHeaders={tableHeaders} />
      </Box>
    </div>
  );
}

export default App;
