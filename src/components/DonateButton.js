import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Heart } from 'lucide-react';
import DonationModal from './DonationModal';

const DonateButton = ({ 
  variant = "contained", 
  size = "medium", 
  children = "Donate Now",
  sx = {},
  showIcon = true,
  ...props 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const defaultSx = {
    background: variant === "contained" 
      ? 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)'
      : 'transparent',
    color: variant === "contained" ? 'white' : '#f59e0b',
    fontWeight: 'bold',
    border: variant === "outlined" ? '2px solid #f59e0b' : 'none',
    '&:hover': {
      background: variant === "contained"
        ? 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
        : 'rgba(245, 158, 11, 0.1)',
      transform: 'translateY(-2px)',
      boxShadow: variant === "contained" 
        ? '0 8px 25px rgba(245, 158, 11, 0.4)'
        : 'none',
    },
    ...sx
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        sx={defaultSx}
        startIcon={showIcon ? <Heart size={16} /> : null}
        {...props}
      >
        {children}
      </Button>
      
      <DonationModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default DonateButton; 