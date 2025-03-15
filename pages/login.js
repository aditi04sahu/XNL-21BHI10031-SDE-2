import dynamic from 'next/dynamic';

// Import LoginComponent dynamically & disable SSR
const Login = dynamic(() => import('../components/LoginComponent'), { ssr: false });

export default Login;
