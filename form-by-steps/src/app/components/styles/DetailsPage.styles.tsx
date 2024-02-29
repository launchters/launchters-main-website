const gridContainer = {
  display: "flex",
  justifyContent: "stretch",
  px: 0,
};

const cardContent = {
  p: 3,
};

const styles = {
  card: {
    p: 0,
  },
  cardContent,
  cardActions: {
    ...cardContent,
    pt: 0,
  },
  gridContainerInsideCard: {
    ...gridContainer,
    mx: -2,
  },
  gridContainer: {
    ...gridContainer,
    mx: 0,
  },
  formInputField: {
    display: "flex",
  },
  formInputFieldGridItem: {
    display: "flex",
    width: "100%",
  },
  listItem: {
    px: 0,
    mx: 0,
  },
  center: {
    textAlign: "center",
    width: "100%",
    mx: "auto",
  },
};
export default styles;
