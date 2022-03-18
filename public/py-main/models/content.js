// models/Content.js
class Content extends Base {
    // Expected schema of the Content record
    get schema() {
      return {
        id: Joi.string(),
        createdAt: Joi.string().isoDate(),
        title: Joi.string().allow('').allow(null).default(''),
        author: Joi.string(),
        approved: Joi.bool().default(false),
        approver: Joi.string(),
        posted_on: Joi.string().isoDate(),
        approved_on: Joi.string().isoDate(),
        content_type: Joi.string(),
        body: Joi.string.allow('').allow(null).default(''),
        video_link: Joi.string().uri().default(),
        topics: Joi.array().items(Joi.string())
      };
    }
  
    // Collection name found in firestore
    static collectionName() { return 'content'; }
  
    // Saves new user to Firestore with the same ID used with Firebase auth
    async create() {
      if (!this.id) {
        throw new Error('Content must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async register(userParams) {
      
    }
  
    static async updateProfile(userParams) {
      
    }
  
    static async deleteContentById(id) {
      ...
    }
  
  };