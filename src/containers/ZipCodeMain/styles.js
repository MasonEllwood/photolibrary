const styles = theme => ({
    root: {
        padding: "70px",
    },
    chevronLeft: {
        paddingRight: "15px",
    },
    backButton: {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: "normal",
        lineHeight: "normal",
        margin: "0px",
        background: 'none',
        border: '0px',
    },
    body: {
        display: "flex",
    },
    sideBar: {
        padding: "0px 50px 0px 0px"
    },
    infoMain: {
        padding: "0px 0px 0px 50px"
    },
    location: {
        color: "#ffffff",
        fontSize: "36px",
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: "normal",
        lineHeight: "normal",
        marginTop: "15px",
    },
    date: {
        color: "#ffffff",
        fontSize: "26px",
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: "normal",
        lineHeight: "normal",
    },
    weatherInfoCard: {
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        width: "409px",
        marginBottom: "40px",
    },
    cardRow: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
    },
    innerCardRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sunnyLogo: {
        width: "50px",
    },
    partlyCloudy: {
        width: "50px",
    },
    innerCardColumnWeather: {
        opacity: "0.7",
        color: "#000000",
        fontSize: "14px",
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: "normal",
        lineHeight: "normal",
        margin: "0px",
    },
    innerCardColumnTemp: {
        color: "#000000",
        fontSize: "48px",
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: "normal",
        lineHeight: "normal",
        margin: "0px",
    },
    statsCardRow: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    weatherIcon: {
        paddingRight: "10px",
    }
});

export default styles;