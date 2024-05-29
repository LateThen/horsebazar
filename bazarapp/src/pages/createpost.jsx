import { Helmet } from 'react-helmet-async';

import { CreatePostView } from '../sections/createpost/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Create Post | Minimal UI </title>
      </Helmet>

      <CreatePostView />
    </>
  );
}
