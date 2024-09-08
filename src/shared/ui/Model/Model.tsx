import { Box, IconButton, Modal } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface ModelProps{
    isOpen:boolean
    setIsOpen: (isOpen:boolean) => void
    children?: React.ReactNode;
}

const Model:React.FC<ModelProps> = ({isOpen,setIsOpen, children }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg p-6 rounded-lg overflow-y-auto custom-scrollbar">
          <Box className="absolute top-0 right-0 m-1">
            <IconButton
              aria-label="закрыть"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-700"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Modal>
  )
}

export default Model