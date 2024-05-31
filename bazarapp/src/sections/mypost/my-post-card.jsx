import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as ReactLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import { ColorPreview } from '../../components/color-utils';

// ----------------------------------------------------------------------

export default function MyPost({ product }) {

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

  return (
    <Card>
      <Stack direction="row">
        <Stack spacing={2} sx={{ p: 5 }} width="25vh">
          <Link color="inherit" variant="subtitle2" noWrap underline="hover">
            {product.name}
          </Link>
          <Stack direction="row" alignItems="center" justifyContent="left">
            <ColorPreview colors={product.colors} />
          </Stack>
        </Stack>
        <Stack sx={{ p: 3 }} alignItems="center" justifyContent="center" direction="row" spacing={2} width="60vh">
          <Button variant="contained" color="secondary" startIcon={<SettingsIcon sx={{ fontSize: 16 }} />}>
            Upravit inzerát
          </Button>
          <Button variant="contained" sx={{ backgroundColor: 'red' }} startIcon={<DeleteIcon sx={{ fontSize: 16 }} />}>
            Odstranit inzerát
          </Button>
        </Stack>
        <ReactLink to="/">
          {renderImg}
        </ReactLink>
      </Stack>
    </Card>
  );
}

MyPost.propTypes = {
  product: PropTypes.object,
};
