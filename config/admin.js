module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'longSecretKeyHere'),
    options: {
      expiresIn: '365d',  // سنة كاملة
    },
  },
});
