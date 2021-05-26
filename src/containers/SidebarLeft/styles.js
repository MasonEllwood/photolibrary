const styles = (theme) => ({
    drawer: {
        width: 90,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 90,
        backgroundColor: '#231F32',
        borderBottom: 0,
        borderTop: 0,
        borderLeft: 0,
        borderWidth: '2px',
        borderImage: 'radial-gradient(rgb(134 122 143), rgb(35 32 50)) 1',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
        // height: '90px',
    },
    logo: {
        // maxWidth: '50px',
        maxHeight: '80px',
        // padding: '5px',
    },
    iconButton: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
    },
});

export default styles;
