import { Helmet } from 'react-helmet-async';

import { MyPostView } from '../sections/mypost/view';

// ----------------------------------------------------------------------

export default function MyPostPage() {
  return (
    <>
      <Helmet>
        <title> MyPosts | Minimal UI </title>
      </Helmet>

      <MyPostView />
    </>
  );
}
