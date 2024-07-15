import PropTypes from "prop-types";
import {
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
} from "@mui/material";

const Filter = ({ filter, setFilter }) => {
	const handleNameChange = (event) => {
		setFilter({ ...filter, name: event.target.value });
	};

	const handleStatusChange = (event) => {
		setFilter({ ...filter, status: event.target.value });
	};

	return (
		<Box display="flex" justifyContent="space-between" mb={2}>
			<TextField
				label="Buscar por nombre"
				variant="outlined"
				name="name"
				value={filter.name}
				onChange={handleNameChange}
				sx={{ mr: 2 }}
			/>
			<FormControl sx={{ minWidth: 120 }}>
				<InputLabel id="status-select-label">Estado</InputLabel>
				<Select
					labelId="status-select-label"
					id="status-select"
					name="status"
					value={filter.status}
					onChange={handleStatusChange}
					label="Estado"
				>
					<MenuItem value="">Todos</MenuItem>
					<MenuItem value="Alive">Vivo</MenuItem>
					<MenuItem value="Dead">Muerto</MenuItem>
					<MenuItem value="unknown">Desconocido</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

Filter.propTypes = {
	filter: PropTypes.shape({
		name: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
	setFilter: PropTypes.func.isRequired,
};

export default Filter;
