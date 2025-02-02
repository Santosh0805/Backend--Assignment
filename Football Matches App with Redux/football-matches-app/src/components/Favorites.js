import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, Stack } from '@chakra-ui/react';

const Favorites = () => {
  const favorites = useSelector(state => state.football.favorites);

  return (
    <Stack spacing={4}>
      {favorites.length === 0 && <Text>No favorite matches.</Text>}
      {favorites.map(match => (
        <Box key={match.id} p={5} shadow="md" borderWidth="1px">
          <Text>{match.team1} vs {match.team2}</Text>
          <Text>Date: {match.date}</Text>
          <Text>Venue: {match.venue}</Text>
          <Text>Outcome: {match.outcome}</Text>
        </Box>
      ))}
    </Stack>
  );
};

export default Favorites;
