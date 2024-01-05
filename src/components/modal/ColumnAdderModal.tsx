import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import styles from './columnAdderModalStyles.module.css'

const ColumnAdderModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <TextField className={styles.inp} id="outlined-basic" label="Insert Column Name" variant="outlined" />
          <Box>
            <Button className={styles.btn} variant="contained">Add Column</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ColumnAdderModal;