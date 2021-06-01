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
    trendingList: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 15px',
    },
    logoBack: {
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: '#80755c',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    logo: {
        width: '89%',
        borderRadius: '9px',
    },
    pricingInfo: {
        textAlign: 'right',
    },
    symbole: {
        margin: '5px 0px',
        fontWeight: '700',
        color: '#867a8f',
    },
    pricingInfoContent: {
        margin: '5px 0px',
        fontWeight: '700',
        color: '#867a8f',
    },
    pricingInfoName: {
        margin: '5px 0px',
        fontWeight: '700',
        color: '#80755c',
    },
    trending: {
        color: '#80755C',
        margin: '10px 0px 15px 15px',
        textDecoration: 'underline',
    },
});

export default styles;
