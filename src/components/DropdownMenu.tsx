import React from 'react';
import styled from 'styled-components';

const Menu = styled.div<{ open: boolean }>`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: ${({ open }) => (open ? 1 : 0)};
  padding: 1px;
  position: absolute;
  right: 0;
  top: ${({ open }) => (open ? '50px' : '40px')};
  transition: top 0.3s ease, opacity 0.3s ease;
  width: 160px;
  z-index: 1000;
`;

const MenuItem = styled.button`
  background: none;
  border-radius: 8px;
  border: none;
  color: #2D3748;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #E2E8F0;
  }
`;

interface DropdownMenuProps {
  open: boolean;
  onLogout: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ open, onLogout }) => {
  const menuItems = [
    {
      id: 1,
      label: 'Logout',
      onClick: onLogout,
    },
    // {
    //   id: 2,
    //   label: 'Settings',
    //   onClick: () => console.log('Settings clicked'),
    // },
    // {
    //   id: 3,
    //   label: 'Profile',
    //   onClick: () => console.log('Profile clicked'),
    // },
  ];

  return (
    <Menu open={open}>
      {menuItems.map((item) => (
        <MenuItem key={item.id} onClick={item.onClick}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
