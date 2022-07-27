var casual = require("casual");

casual.define("user", function () {
    return {
        email: casual.email,
        firstName: casual.first_name,
        lastName: casual.last_name,
        age: casual.year,
        description: casual.sentences(3),
    };
});

module.exports = () => {
    const data = { users: [] };
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        data.users.push({ id: i, ...casual.user });
    }
    return data;
};
