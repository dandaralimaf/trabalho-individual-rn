import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cancel: {
        color: "white",
        marginBottom: 20,
    },
    title: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#666",
        paddingVertical: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
    },
    forgot: {
        color: "white",
        textAlign: "center",
        marginTop: 15,
        textDecorationLine: "underline",
    },
    container: {
        backgroundColor: "black",
        flex: 1,
        padding: 20,
        paddingBottom: 40,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    username: {
        color: "#aaa",
    },
    bio: {
        color: "white",
        marginVertical: 5,
    },
    joined: {
        color: "#aaa",
        fontSize: 12,
    },
    stats: {
        flexDirection: "row",
        marginTop: 10,
        gap: 10,
    },
    stat: {
        color: "white",
    },
    editButton: {
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 15,
        alignSelf: "flex-start",
    },
    editText: {
        color: "white",
    },
    tweet: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    tweetHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        gap: 5,
    },
    tweetName: {
        color: "white",
        fontWeight: "bold",
    },
    tweetUsernameAndDate: {
        color: "#aaa",
        fontSize: 12,
    },
    tweetText: {
        color: "white",
        marginBottom: 8,
    },
    tweetStats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    tweetStatText: {
        color: "#aaa",
        fontSize: 12,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#666",
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        color: "white",
        paddingVertical: 5,
    },
    eyeIcon: {
        color: "white",
        paddingRight: 10,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#333",
        marginTop: 10,
    },
    footerIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    container1: {
        flex: 1,
        backgroundColor: "black",
        padding: 30,
        minHeight: 900,
        paddingBottom: 40,
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: "contain",
        alignSelf: "center",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        marginVertical: 10,
    },
    tabText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        paddingVertical: 10,
    },
    activeTabText: {
        borderBottomWidth: 2,
        borderBottomColor: "#1DA1F2",
        color: "white",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    headerName: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    topBar1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    topBarRight1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    topBarIcon1: {
        width: 24,
        height: 24,
        tintColor: "white",
    },
    tweetContent: {
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
    },
    tweetAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});