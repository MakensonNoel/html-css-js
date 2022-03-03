class Pyradise {
    firebaseConfig = {
	    apiKey: "AIzaSyCtZ-9WQyxVF2D0Naf6c6_LQwUPGq1goJc",
	    authDomain: "pyradise-e0e9f.firebaseapp.com",
	    projectId: "pyradise-e0e9f",
	    storageBucket: "pyradise-e0e9f.appspot.com",
	    messagingSenderId: "36758105370",
	    appId: "1:36758105370:web:b1e43961f83406afa810a3"
	};
    get topicsList()
    {
        firebase.database().ref('config/topics')
    }

    get usersList()
    {
        firebase.database.ref('config/users')
    }

    get usersByTopicList(topic)
    {
        
    }
    addTopic(strName)
    {
        newTopicRef=firebase.database().ref('config/topics');
        newTopicRef.set({
            name: strName,
            contents: 0
        })
    }
};