import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john.doe@user.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@user.com',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;