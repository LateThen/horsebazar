import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
const IndexPage = lazy(() => import('../pages/app'));
const BlogPage = lazy(() => import('../pages/blog'));
const MyPostPage = lazy(() => import('../pages/mypost'));
const LoginPage = lazy(() => import('../pages/login'));
const ProductsPage = lazy(() => import('../pages/products'));
const Page404 = lazy(() => import('../pages/page-not-found'));
const CreatePost = lazy(() => import('../pages/createpost'));
const RegisterPage = lazy(() => import('../pages/register'));
const Product = lazy(() => import('../pages/Product'));


export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'mypost', element: <MyPostPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'createpost', element: <CreatePost /> },
        { path: 'horses/:id', element: <Product /> }
      ],
    },
    {

      path: 'login',
      element: <Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>,
    },
    {
      path: 'register',
      element: <Suspense fallback={<div>Loading...</div>}><RegisterPage /></Suspense>,
    },
    {

      path: '404',
      element: <Suspense fallback={<div>Loading...</div>}><Page404 /></Suspense>,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
