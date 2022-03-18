// models/Base.js


class Base {
    constructor(args) {
      const this.validate = ajv.compile
      const results = this.validateData(args);
      Object.assign(this, results);
    }
  
    get schema() {
      throw ('You must declare a schema');
    }
  
    // Return the collection name that corresponds to Firestore
    // Method should be overwritten in child models
    get collectionName() {
      return this.constructor.collectionName();
    }
  
    // Returns the expected schema of the model
    expectedSchema() {
      // stripUnknown will remove any properties that aren't on the schema
      return Joi.object().keys(this.schema).options({ stripUnknown: true });
    }
  
    // Return validated fields
    validatedData(args) {
      const { error, value } = Joi.validate(args, this.expectedSchema());
      if (error) {
        throw new Error(error);
      }
      return value;
    }
  
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
        });
        this.fields = fields;
      }

    async update() {
        if (!this.id) {
            throw new Error('Comment must have an id assigned by firebase');
          }
          const setfields = this.fields;
          return firestore.collection(this.collectionName).doc().set(setfields);
      
    }
  
    async delete() {

    }

    static async findByTopic(topic) {
        firestore.collection(this.collectionName).get().where("topics","==",topic).then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            });
        });
      }

    static async findAll() {
      firestore.collection(this.collectionName).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
          });
      });
    }
  
  };