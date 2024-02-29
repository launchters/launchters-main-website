import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

SearchResultsEmptyOrLoading.propTypes = {
  searchQuery: PropTypes.string,
  isLoading: PropTypes.bool,
};

type Props = {
  searchQuery: string;
  isLoading: boolean;
};

// ----------------------------------------------------------------------

function SearchResultsEmptyOrLoading({ searchQuery, isLoading }: Props) {
  const notFoundTemplate = searchQuery && (
    <>
      No hay resultados encontrados para:{" "}
      <strong>&quot;{searchQuery}&quot;</strong>.
    </>
  );
  const loadingTemplate = <>Cargando...</>;
  const noContentTemplate = <>No hay ningún registro todavía.</>;

  return (
    <Paper>
      <Typography gutterBottom variant="body2" align="center">
        {isLoading && loadingTemplate}
        {!isLoading && searchQuery && notFoundTemplate}
        {!isLoading && !searchQuery && noContentTemplate}
      </Typography>
    </Paper>
  );
}
export default SearchResultsEmptyOrLoading;
