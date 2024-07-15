import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const CharacterCard = ({ character }) => {
	return (
		<Card>
			<CardMedia
				component="img"
				height="180"
				image={character.image}
				alt={character.name}
			/>
			<CardContent>
				<Typography variant="h6" component="div">
					{character.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{character.status} - {character.species}
				</Typography>
			</CardContent>
		</Card>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		species: PropTypes.string.isRequired,
	}).isRequired,
};

export default CharacterCard;
