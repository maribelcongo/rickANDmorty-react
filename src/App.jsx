// src/App.jsx
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CharacterCard from "./components/cards/CharacterCard";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagiation/pagination";
import { Container, Grid, Typography, Box } from "@mui/material";

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [filter, setFilter] = useState({ name: "", status: "" });
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// Memoriza la función fetchCharacters
	const fetchCharacters = useCallback(
		async (page = 1) => {
			try {
				const response = await axios.get(
					"https://rickandmortyapi.com/api/character",
					{
						params: {
							page,
							name: filter.name, // Filtro por nombre
							status: filter.status, // Filtro por estado
						},
					}
				);
				setCharacters(response.data.results);
				setTotalPages(response.data.info.pages);
			} catch (error) {
				console.error("Error fetching characters:", error);
			}
		},
		[filter]
	); // Dependencia del filtro

	useEffect(() => {
		fetchCharacters(page);
	}, [page, fetchCharacters]);

	return (
		<Container>
			<Typography variant="h2" align="center" gutterBottom>
				Rick and Morty Characters
			</Typography>
			<Filter filter={filter} setFilter={setFilter} />
			<Grid container spacing={3}>
				{characters.map((character) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
						<CharacterCard character={character} />
					</Grid>
				))}
			</Grid>
			<Box display="flex" justifyContent="center" mt={3}>
				<Pagination
					page={page}
					totalPages={totalPages}
					onPageChange={setPage}
				/>
			</Box>
		</Container>
	);
};

export default App;
