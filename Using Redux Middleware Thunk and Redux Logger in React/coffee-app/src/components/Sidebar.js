import React from 'react';
import { Box, Select } from '@chakra-ui/react';

const Sidebar = ({ setSortOrder }) => {
  return (
    <Box p="4" shadow="md" borderWidth="1px">
      <Select onChange={(e) => setSortOrder(e.target.value)} placeholder="Sort by">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Box>
  );
};

export default Sidebar;
