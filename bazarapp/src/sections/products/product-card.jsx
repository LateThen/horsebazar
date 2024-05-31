import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as ReactLink } from "react-router-dom";

import { fCurrency } from "../../utils/format-number";
import { ColorPreview } from "../../components/color-utils";

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        height: "20vh",
        objectFit: "cover",
        width: "100vh",
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
          justifyContent: { md: "center" },
          alignItems: { md: "center" },
        }}
      >
        <Box sx={{
          pl: 1,
          pt: 1,
        }}>
          <Stack
            spacing={2}
            sx={{pl: 2, flexGrow: 1, textAlign: { xs: "center", md: "left" } }}
          >
            <Link color="inherit" variant="subtitle2" noWrap underline="hover">
              {product.name}
            </Link>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start"}}
            >
              <ColorPreview colors={product.colors} />
              {renderPrice}
            </Stack>
          </Stack>
          <Stack
            sx={{
              p: 2,
              flexGrow: 1,
              textAlign: { xs: "center", md: "left" },
              justifyContent: "center",
            }}
          >
            <Typography>
              Description here. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt eaque aspernatur voluptatum recusandae
              quisquam, quia harum molestiae optio pariatur fugit nihil tempore
              illo delectus quo perferendis, veniam, voluptatibus molestias
              architecto.
            </Typography>
          </Stack>
        </Box>
        <Box
          component={ReactLink}
          to="/"
          sx={{
            width: { xs: "100%", md: "auto" },
            flexGrow: { xs: 0, md: 1 },
            height: { xs: "auto", md: "100%" },
            display: "flex",
          }}
        >
          {renderImg}
        </Box>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
