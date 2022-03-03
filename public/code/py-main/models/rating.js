// models/User.js

class Comment extends Base {
    // Expected schema of the User record
    get schema() {
      return {
        id: Joi.string(),
        contentid: Joi.string(),
        uid: Joi.string(),
        displayName: Joi.string(),
        createdAt: Joi.string().isoDate(),
        rate: Joi.number()
      };
    }
  
    // Collection name found in firestore
    static collectionName() { return 'ratings'; }
  
    // Saves new user to Firestore with the same ID used with Firebase auth
    async create() {
      if (!this.id) {
        throw new Error('Ratings must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc(this.id).set(fields);
    }
  
    static async deleteRatingById(id) {
      
    }
  
  };

  };