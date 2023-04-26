import React from 'react';
import {
    Avatar,
    Box, Button,
    Divider,
    IconButton,
    Input,
    Link,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
    Typography
} from "@mui/material";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', mt: '1rem'}}>
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', ml: '2rem'}}>
                    <Typography sx={{minWidth: 100}}>
                        <Link href="/products" underline="none">
                            Products
                        </Link>
                    </Typography>
                    <Typography sx={{minWidth: 100}}>
                        <Link href="/" underline="none">
                            Create New Product
                        </Link>
                    </Typography>
                    <Typography sx={{minWidth: 100}}>
                        <Link href="/orders" underline="none">
                            Orders
                        </Link>
                    </Typography>
                    <Typography sx={{minWidth: 100}}>
                        <Link href="/orders" underline="none">
                            Create New Orders
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', mr: '2rem'}}>
                    <Box>
                        <Input
                            color="primary"
                            placeholder="Search"
                            variant="outlined"
                        />
                    </Box>
                    <Button sx={{mr: '2rem', ml: '2rem'}} variant="contained">Search</Button>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar/> My account
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>

                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>

                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>

                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default Navbar;