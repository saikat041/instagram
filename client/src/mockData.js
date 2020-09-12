// hard coded data to be fetched from server
const posts = [{
    id: "12345",
    userName: "saikat041",
    user: {
        userName: "saikat041",
        profileImage: "/profile.JPG"
    },
    liked: true,
    img: "test.JPG",
    psotMessage: "This is my first post",
    comments: [
        {
            id:"1",
            userName: "sahil",
            text: "Nice photo"
        },
        {
            id: "2",
            userName: "sahil",
            text: "Nice photo"
        }
    ],
}];

module.exports = { posts }