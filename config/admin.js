module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fdccfefee7967f39f51e27e6ef4c996f'),
  },
});
