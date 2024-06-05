import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as ReactLink } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import { fCurrency } from "../../utils/format-number";
import { ColorPreview } from "../../components/color-utils"

// ----------------------------------------------------------------------

export default function MyPostCard({ product }) {
  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        height: "100%",
        objectFit: "cover",
        width: "100%",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            pl: 1,
            pt: 1,
            flexGrow: 1,
          }}
        >
          <Stack
            spacing={2}
            sx={{ pl: 2, textAlign: { xs: "center", md: "left" } }}
          >
            <Link color="inherit" variant="subtitle2" noWrap underline="hover">
              {product.name}
            </Link>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <ColorPreview colors={product.colors} />
              {renderPrice}
            </Stack>
          </Stack>
          <Stack
            sx={{
              p: 2,
              textAlign: { xs: "center", md: "left" },
              justifyContent: "center",
            }}
          >
            <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden", textWrap: "nowrap", maxWidth: {xs: "350px", sm: "250px", md: "250px", lg: "350px"}, maxHeight: "100px" }}>
              Description here. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt eaque aspernatur voluptatum recusandae
              quisquam, quia harum molestiae optio pariatur fugit nihil tempore
              illo delectus quo perferendis, veniam, voluptatibus molestias
              architecto.Description here. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt eaque aspernatur voluptatum recusandae
              quisquam, quia harum molestiae optio pariatur fugit nihil tempore
              illo delectus quo perferendis, veniam, voluptatibus molestias
              architecto.
            </Typography>
          </Stack>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          sx={{ p: 2, alignItems: "center", width: { xs: "100%", md: "30vh" }}}
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              width: { xs: "100%", md: "auto" },
              '&:hover': {
                backgroundColor: "darkred", // Change to a darker red on hover
              },
            }}
            startIcon={<DeleteIcon sx={{ fontSize: 16 }} />}
          >
            Odstranit inzerát
          </Button>
        </Stack>

        <Box
          component={ReactLink}
          to="/"
          sx={{
            order: { xs: 0, md: 1 },
            flexGrow: 1,
            display: "flex",
            alignSelf: "stretch",
            alignItems: "center",
            height: { xs: "auto", md: "20vh" },  // Adjust the height as needed
          }}
        >
          {renderImg}
        </Box>
      </Stack>
    </Card>
  );
}

MyPostCard.propTypes = {
  product: PropTypes.object,
};