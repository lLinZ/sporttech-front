import { FC } from 'react';
import { Box, darken, lighten } from '@mui/material';
// import { Footer } from './footer';

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from '../../store/user/UserStore';
import { SideBar } from './nav';
type Props = {
    children: React.ReactNode;
    noMargin?: boolean;
    container?: boolean;
}

export const Layout: FC<Props> = ({ children, container = true }) => {
    const user = useUserStore((state) => state.user);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', justifyContent: 'space-between' }}>
            <SideBar />
            {!container ? (
                <Box sx={{
                    margin: 'auto',
                    minHeight: '100vh',
                    maxHeight: '100%',
                    p: 2,
                    background: (theme) => theme.palette.mode === 'dark' ? darken(user.color, 0.9) : lighten(user.color, 0.97),
                }}>
                    {children}
                </Box>
            ) : (
                <Box sx={{
                    margin: 'auto',
                    minHeight: '100vh',
                    maxHeight: '100%',
                    p: 2,
                    background: (theme) => theme.palette.mode === 'dark' ? darken(user.color, 0.9) : lighten(user.color, 0.97),
                    width: '100%',
                }}>
                    {children}
                </Box>
            )}
            {/* <Footer /> */}
            <ToastContainer
                stacked
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={useUserStore.getState().user.theme}
                transition={Bounce}
            />
        </Box >
    )
}

