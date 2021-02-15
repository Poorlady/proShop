import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 12),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("1234", 12),
  },
  {
    name: "Sarah Clarkson",
    email: "sarah@example.com",
    password: bcrypt.hashSync("1234", 12),
  },
];

export default users;
