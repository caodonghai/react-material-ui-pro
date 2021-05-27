import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Divider,
  SwipeableDrawer,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/timeLine',
    icon: UsersIcon,
    title: '时间旅行'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
];

const DashboardSidebar = ({
  onMobileChange,
  openMobile,
  onPCClose,
  openPC
}) => {
  const location = useLocation();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    if (openMobile && onMobileChange) {
      onMobileChange(false);
    }

    if (openPC && onPCClose) {
      onPCClose();
    }
  }, [location.pathname]);

  const useStyles = makeStyles({
    root: {
      '& .MuiBackdrop-root': {
        background: 'transparent',
      }
    },
  });

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <SwipeableDrawer
          anchor="left"
          onClose={() => onMobileChange(false)}
          open={openMobile}
          onOpen={() => onMobileChange(true)}
          variant="temporary"
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </SwipeableDrawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="right"
          onClose={onPCClose}
          open={openPC}
          variant="temporary"
          className={useStyles().root}
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileChange: PropTypes.func,
  openMobile: PropTypes.bool,
  onPCClose: PropTypes.func,
  openPC: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileChange: () => { },
  openMobile: false,
  onPCClose: () => { },
  openPC: false
};

export default DashboardSidebar;
