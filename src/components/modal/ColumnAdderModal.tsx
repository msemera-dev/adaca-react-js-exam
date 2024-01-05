import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import styles from './columnAdderModalStyles.module.css'

interface IColumnAdderModalProps {
  addTableHeader: (value: string) => void;
}

const ColumnAdderModal: FunctionComponent<IColumnAdderModalProps> = ({ addTableHeader }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [columnName, setColumnName] = useState<string>('');

  const handleBtnClick = () => {
    addTableHeader(columnName);
    handleClose();
  }

  const handleChange = (e: any) => {
    const name: string = e.target.value;
    setColumnName(name);
  }

  return (
    <div>
      <Button className={styles.btnModal} variant="contained" onClick={handleOpen}>Add Column</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContainer}>
          <Typography className={styles.modalHeader}>
            Add column to table
          </Typography>
          <TextField className={styles.inp} id="header-inp" label="Insert Column Name" variant="outlined" onChange={handleChange} />
          <Box>
            <Button className={styles.btn} variant="contained" onClick={handleBtnClick}>Add Column</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ColumnAdderModal;