 $( document ).ready(function()  {
     $('.chatBox').hide();
     $('#msgNameBtn').click(function() { 
           
            var username=null;
            username=document.getElementById("msgName").value;
            password=document.getElementById("password").value;
            password=password.toLowerCase();
            var result = (MD5(password));
            //md5 keys
            if(result==compare){
                   console.log("psdskfa");
                   $('.chatBox').fadeIn(1000);
                   $('#loginBox').fadeOut(2000);

                    document.getElementById('username').innerText=username;
                    // Step 0: HTML defined, variables for elements
                    //dateObject
                    var dateObj = new Date(),
                    month = dateObj.getUTCMonth() + 1, //months from 1-12
                    day = dateObj.getUTCDate(),
                    year = dateObj.getUTCFullYear(),
                    hours =dateObj.getHours(),
                    minutes =dateObj.getMinutes();
                    if(hours<12){
                        minutes= minutes +" AM";
                        }
                    else{
                        hours=hours-12;
                        minutes=minutes+" PM";
                        }
                    var d = year + "/" + month + "/" + day +" "+ hours + ":" + minutes;
                    //work starts here
                    var messagesList = document.getElementById('messages'),
                        textInput = document.getElementById('text'),
                        setUsernameButton=document.getElementById('msgNameBtn'),
                        sendButton = document.getElementById('send'),
                        //usernameElm = document.getElementById('username'),
                        password = document.getElementById('password');
                    var config = {
                        apiKey: "AIzaSyADFRhiooTKcWzRjjOmn-0sURrtuJeReh8",
                        authDomain: "fir-chat-2a1fe.firebaseapp.com",
                        databaseURL: "https://fir-chat-2a1fe.firebaseio.com",
                        projectId: "fir-chat-2a1fe",
                        storageBucket: "fir-chat-2a1fe.appspot.com",
                        messagingSenderId: "668124991211"
                    };
                    var app = firebase.initializeApp(config),
                        database = app.database(),
                        auth = app.auth(),
                        storage = app.storage();
                        
                    var databaseRef = database.ref().child('chat');
                    sendButton.addEventListener('click', function(evt) {
                        var chat = { name: username, message: textInput.value+"\n"+d };
                        databaseRef.push().set(chat);
                        textInput.value = '';
                    });
                    
                    // Listen for when child nodes get added to the collection
                    databaseRef.on('child_added', function(snapshot) {
                        // Get the chat message from the snapshot and add it to the UI
                        var chat = snapshot.val();
                        addMessage(chat);
                    });

                    function handleFileSelect(e) {
                        var file = e.target.files[0];
                        // Get a reference to the location where we'll store our photos
                        var storageRef = storage.ref().child('chat_photos');
                        
                        // Get a reference to store file at photos/<FILENAME>.jpg
                        var photoRef = storageRef.child(file.name);
                        // Upload file to Firebase Storage
                        var uploadTask = photoRef.put(file);
                        uploadTask.on('state_changed', null, null, function() {
                        // When the image has successfully uploaded, we get its download URL
                        var downloadUrl = uploadTask.snapshot.downloadURL;
                        // Set the download URL to the message box, so that the user can send it to the database
                    //     textInput.value = downloadUrl;
                        // Set the download URL to the message box, so that the user can send it to the database
                                //textInput.value = downloadUrl;
                                    // Directly posting the picture in chat box
                                    var chat = { name: username, message: downloadUrl +"\n"+ d };
                                    databaseRef.push().set(chat);
                                    textInput.value = '';
                        });
                    }
                    file.addEventListener('change', handleFileSelect, false);
                    function addMessage(chat) {
                        var li = document.createElement('li');
                        var nameElm = document.createElement('h6');
                        nameElm.innerText = chat.name;
                        li.appendChild(nameElm);
                        li.className = 'highlight';
                        if ( chat.message.indexOf("https://firebasestorage.googleapis.com/") == 0
                        || chat.message.indexOf("https://lh3.googleusercontent.com/") == 0
                        || chat.message.indexOf("http://pbs.twimg.com/") == 0
                        || chat.message.indexOf("data:image/") == 0) {
                        var imgElm = document.createElement("img");
                        imgElm.src = chat.message;
                        li.appendChild(imgElm);
                        }
                        else {
                        var messageElm = document.createElement("span");
                        messageElm.innerText = chat.message;
                        li.appendChild(messageElm);
                        }
                        messagesList.appendChild(li);
                        li.scrollIntoView(false);
                        sendButton.scrollIntoView(false);
                    }
                            
            
            }
            else{
                alert("Wrong Password");
            }                

            });//msgNameBtn id function ends here
  });//jquery script ends here