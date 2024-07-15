import PropTypes from "prop-types";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ page, totalPages, onPageChange }) => {
	return (
		<MuiPagination
			count={totalPages}
			page={page}
			onChange={(event, value) => onPageChange(value)}
			color="primary"
			sx={{ mt: 3 }}
		/>
	);
};

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
