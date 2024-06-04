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

export default function ShopProductCard( props ) {
 return(

  <>
  <div>Post 
    <p>Jméno postera : {props.name}</p>
    <p>Telefon: {props.phonenumber}</p>
    <p>Lokace: {props.location}</p>
    <p>Cena: {props.price}</p>
    <p>Description : {props.description}</p>
    <p>Postname: {props.postname}</p>
    <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "40%",
          }}
          className="article-img"
          src={props.photo}
        />
    <br />
  </div>
  
  
  
  
  
  
  </>
 )
 
}

