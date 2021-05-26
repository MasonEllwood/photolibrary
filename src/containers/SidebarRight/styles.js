const styles = (theme) => ({
    drawer: {
        width: 330,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 330,
        backgroundColor: '#231F32',
        borderBottom: 0,
        borderTop: 0,
        borderRight: 0,
        borderWidth: '2px',
        borderImage: 'radial-gradient(rgb(134 122 143), rgb(35 32 50)) 1',
    },
    drawerHeader: {
        padding: theme.spacing(1, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
});

export default styles;
