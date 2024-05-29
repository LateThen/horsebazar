import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { ColorPicker } from '../../components/color-utils';

// ----------------------------------------------------------------------

export const SORT_OPTIONS = [
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const GENDER_OPTIONS = ['Male', 'Female', 'Non-binary'];
export const CATEGORY_OPTIONS = ['Racing', 'Pet', 'For consumption'];
export const RATING_OPTIONS = [];
export const PRICE_OPTIONS = [
  { value: 'below', label: 'Below $10k' },
  { value: 'between', label: 'Between $10k - $50k' },
  { value: 'above', label: 'Above $50k' },
];
export const COLOR_OPTIONS = [
  '#2B1A0E',
  '#523521',
  '#9C5F36',
  '#DDB591',
  '#D9C29C',
  '#DAD9DF',
];

// ----------------------------------------------------------------------

export default function ProductFilters({ openFilter, onOpenFilter, onCloseFilter }) {
  const renderGender = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Gender</Typography>
      <FormGroup>
        {GENDER_OPTIONS.map((item) => (
          <FormControlLabel key={item} control={<Checkbox />} label={item} />
        ))}
      </FormGroup>
    </Stack>
  );

  const renderCategory = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Category</Typography>
      <RadioGroup>
        {CATEGORY_OPTIONS.map((item) => (
          <FormControlLabel key={item} value={item} control={<Checkbox />} label={item} />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderColors = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Colors</Typography>
      <ColorPicker
        name="colors"
        selected={[]}
        colors={COLOR_OPTIONS}
        onSelectColor={(color) => [].includes(color)}
        sx={{ maxWidth: 38 * 6 }}
      />
    </Stack>
  );

  const renderPrice = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Price</Typography>
      <RadioGroup>
        {PRICE_OPTIONS.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Rating</Typography>
      <RadioGroup>
        {RATING_OPTIONS.map((item, index) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                disableRipple
                color="default"
                icon={<Rating readOnly value={4 - index} />}
                checkedIcon={<Rating readOnly value={4 - index} />}
                sx={{
                  '&:hover': { bgcolor: 'transparent' },
                }}
              />
            }
            label="& Up"
            sx={{
              my: 0.5,
              borderRadius: 1,
              '&:hover': { opacity: 0.48 },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderGender}

            {renderCategory}

            {renderColors}

            {renderPrice}

          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
