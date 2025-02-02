import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches, addFavorite } from '../redux/actions/footballActions';
import { Box, Spinner, Text, Stack, Input, Select, Button } from '@chakra-ui/react';

const FootballMatches = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches, favorites } = useSelector(state => state.football);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterTeam, setFilterTeam] = useState('');

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const filteredMatches = footballMatches.filter(match => {
    return (
      (match.team1.includes(searchTerm) || match.team2.includes(searchTerm) || match.venue.includes(searchTerm) || match.date.includes(searchTerm)) &&
      (filterTeam === '' || match.team1 === filterTeam || match.team2 === filterTeam)
    );
  });

  const handleAddFavorite = (match) => {
    dispatch(addFavorite(match));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>Error loading matches.</Text>;
  }

  return (
    <Box>
      <Input
        placeholder="Search matches"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <Select
        placeholder="Filter by team"
        value={filterTeam}
        onChange={(e) => setFilterTeam(e.target.value)}
        mb={4}
      >
        {[...new Set(footballMatches.flatMap(match => [match.team1, match.team2]))].map(team => (
          <option key={team} value={team}>{team}</option>
        ))}
      </Select>
      <Stack spacing={4}>
        {filteredMatches.map(match => (
          <Box key={match.id} p={5} shadow="md" borderWidth="1px">
            <Text>{match.team1} vs {match.team2}</Text>
            <Text>Date: {match.date}</Text>
            <Text>Venue: {match.venue}</Text>
            <Text>Outcome: {match.outcome}</Text>
            <Button onClick={() => handleAddFavorite(match)}>Add to Favorites</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FootballMatches;
