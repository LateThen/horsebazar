import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as ReactLink } from 'react-router-dom';

import { fCurrency } from '../../utils/format-number';
import { ColorPreview } from '../../components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 0.3,
        height: 1,
        right: 0,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
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
      <Stack direction="row">
      <Stack spacing={2} sx={{ p: 5 }} width="25vh">

        <Link color="inherit" variant="subtitle2" noWrap underline='hover'>
          {product.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="left">
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Stack>
      </Stack>
      <Stack sx={{ p: 3 }} alignItems="center" justifyContent="center" noWrap width="60vh">
        <a>Description here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque aspernatur voluptatum recusandae quisquam, quia harum molestiae optio pariatur fugit nihil tempore illo delectus quo perferendis, veniam, voluptatibus molestias architecto.</a>
      </Stack>
      <ReactLink to="/">
        {renderImg}
      </ReactLink>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
