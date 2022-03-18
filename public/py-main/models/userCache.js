/**
 * Fetches the session user from cache if it exists, or sets it if it does not
 */
const getOrSetUserFromCache = async headers => {
    const User = require('../models/User');
    const userUid = headers['x-userid'];
  
    try {
      const firebaseUserUid = await User.getUserIdFromToken(headers.authorization);
      if (!userUid || firebaseUserUid !== userUid) {
        userCache.del(`firebase-${userUid}`);
        return User.getCurrentUserByToken(headers.authorization);
      }
  
      const userFromCache = userCache.get(`firebase-${userUid}`);
      if (userFromCache) {
        return userFromCache;
      }
  
      const user = await User.getCurrentUserByToken(headers.authorization);
      userCache.set(`firebase-${userUid}`, user, FIVE_MINUTES); // Set TTL
      return user;
  
    } catch (e) {
      throw new Error('Invalid user token');
    }
  };