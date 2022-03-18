// models/Content.js
class Comment extends Base {
    // Expected schema of the Content record
    get schema() {
      return {
        id: Joi.string(),
        contentid: Joi.string(),
        createdAt: Joi.string().isoDate(),
        body: Joi.string(),
        author: Joi.string(),
        approved: Joi.bool().default(true),
        approver: Joi.string(),
        posted_on: Joi.string().isoDate(),
        approved_on: Joi.string().isoDate(),
      };
    }
  
    // Collection name found in firestore
    static collectionName() { return 'comment'; }
  
    // Saves new comment to Firestore with the same ID used with Firebase auth
    async create() {
      if (this.id) {
        throw new Error('Comment must have an id assigned by firebase');
      }
      const fields = this.fields;
      return firestore.collection(this.collectionName).doc().set(fields);
    }

    async read(id) {
        this=firestore.collection(this.collectionName).doc(id).get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });;
        this.fields = fields;
      }
  
    }

    static async findUnapproved() {
        firestore.collection(this.collectionName).get().where("approved","==",false).then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            });
        });
      }

      static async search() {
          firestore.Query().where(fieldPath,opStr,)
      }
  };