var casual = require("casual");

const currentUser = {
    id: "536309908",
    email: "Mariam.Kuhlman@Warren.info",
    firstName: "Friedrich",
    lastName: "Rutherford",
    age: "1971",
    description:
        "Omnis omnis modi harum illum id corrupti. Sed id qui quidem. Ipsam explicabo itaque laborum modi.",
    online: "3",
    createdAt: "473429532",
    numberPhone: "982-576-2150",
    username: "Keeling_Rosalind",
    address: "431 Stewart Crossroad",
};

casual.define("user", function () {
    return {
        email: casual.email,
        firstName: casual.first_name,
        lastName: casual.last_name,
        age: casual.year.toString(),
        description: casual.sentences(3),
        online: casual.integer(0, 2),
        createdAt: casual.unix_time.toString(),
        numberPhone: casual.phone,
        username: casual.username,
        address: casual.address1,
    };
});

casual.define("conversation", function () {
    return {
        id: casual.unix_time.toString(),
        friend: casual.user,
        lastMessage: {
            sender: casual.integer(0, 1).toString(),
            lastContent: casual.sentence,
            lastTime: `${casual.integer(1, 24)} ${casual.am_pm}`,
        },
    };
});

module.exports = () => {
    const data = { users: [], profile: {}, conversations: [] };

    // Create 1000 users
    for (let i = 0; i < 100; i++) {
        data.users.push({ id: casual.unix_time, ...casual.user });
    }

    data.users.push(currentUser);

    // Create 20 conversations
    for (let i = 0; i < 20; i++) {
        data.conversations.push(casual.conversation);
    }

    return data;
};
