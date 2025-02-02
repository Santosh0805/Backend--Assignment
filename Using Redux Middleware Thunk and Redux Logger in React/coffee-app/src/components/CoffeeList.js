import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffees } from '../redux/coffeeActions';
import { SimpleGrid, Box, Text, Spinner } from '@chakra-ui/react';

const CoffeeList = ({ sortOrder }) => {
  const dispatch = useDispatch();
  const coffeeData = useSelector(state => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffees(sortOrder));
  }, [dispatch, sortOrder]);

  return (
    <Box p="4">
      {coffeeData.loading ? (
        <Spinner />
      ) : coffeeData.error ? (
        <Text>{coffeeData.error}</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {coffeeData.coffees.map(coffee => (
            <Box key={coffee.id} p="5" shadow="md" borderWidth="1px">
              <Text>{coffee.title}</Text>
              <Text mt="4">{coffee.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CoffeeList;
