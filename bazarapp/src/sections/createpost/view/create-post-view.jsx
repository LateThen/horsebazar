import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from '../../../_mock/blog';

import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <>
    <Stack xs={5} direction="column">

    <Button variant='contained' pb-0>
      Vytvořit inzerát
    </Button>
    </Stack>
    </>
  );
}
