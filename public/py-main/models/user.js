// models/User.js
// models/User.js
class User extends Base {
    // Expected schema of the User record
    get schema() {
      return {
        $id: Joi.string(),
        createdAt: Joi.string().isoDate(),
        lastUpdated: Joi.string().isoDate(),
        displayName: Joi.string().allow('').allow(null).default(''),
        email: Joi.string().email({ minDomainSegments: 2 }).default(''),
        topics: Joi.array().items(Joi.string().valid(pyradise.topicslist)),
        emalVerified: Joi.bool().default(false),
        isAdmin: Joi.bool().default(false),
        isApprover: Joi.bool().default(false),
        isTrusted: Joi.bool().default(true)
      };
    }
  
    // Collection name found in firestore
    static collectionName() { return 'users'; }
  
    // Saves new user to Firestore with the same ID used with Firebase auth
    async create() {
      if (!this.$id) {
        throw new Error('Users must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async register(userParams) {
        if (!this.$id) {
            throw new Error('Users must have an id assigned by firebase');
          }
          const fields = this.fields;
          return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async deleteUserById(id) {
    }
}