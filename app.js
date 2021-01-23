var firebaseConfig = {
    apiKey: "AIzaSyDd40JWiDh-BFoAiZ22lbowuOEkWotGdwI",
    authDomain: "fir-blog-8618a.firebaseapp.com",
    projectId: "fir-blog-8618a",
    storageBucket: "fir-blog-8618a.appspot.com",
    messagingSenderId: "313161977163",
    appId: "1:313161977163:web:9fee9830ba7edfdeca2cce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let postCollection = document.querySelector("#posts-collection");

  const db = firebase.firestore();
  
  function createPost(title, time, content) {
    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4");
  
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let small = document.createElement("small");
  
    h2.textContent = title;
    small.textContent = time;
    p.textContent = content;
  
    div.appendChild(h2);
    div.appendChild(small);
    div.appendChild(p);
  
    postCollection.appendChild(div);
  }
  
  // Get Posts
  function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
          createPost(
            docs.data().postName,
            docs.data().createdAt,
            docs.data().postContent
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();