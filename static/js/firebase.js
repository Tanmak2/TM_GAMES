// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var userInfo;
var name;
var level;
var point;
var loginUserKey;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRbfbfagCEy7u5KR7UK0KJiuyNDskeN58',
  authDomain: 'doubleyun-54389.firebaseapp.com',
  databaseURL: 'https://doubleyun-54389-default-rtdb.firebaseio.com',
  projectId: 'doubleyun-54389',
  storageBucket: 'doubleyun-54389.appspot.com',
  messagingSenderId: '976437050574',
  appId: '1:976437050574:web:142e58ef48ae8a858a649f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function userSessionCheck() {
  auth.onAuthStateChanged(function (userInfo) {
    if (userInfo) {
      const dbRef = ref(database);
      get(child(dbRef, 'users/' + userInfo.uid)).then(function (snapshot) {
        if (snapshot.exists()) {
          document
            .getElementById('login_before')
            .setAttribute('class', 'login-info-off');
          document
            .getElementById('login_after')
            .setAttribute('class', 'login-info-on');
          $('#result').text(snapshot.val().name + '님! ' + '반가워요! ');
          $('#level').text(snapshot.val().level);
          $('#point').text(snapshot.val().point);
          name = snapshot.val().name;
          level = snapshot.val().level;
          point = snapshot.val().point;
          setCookie('name', name, 'max-age=3600');
          setCookie('level', level, 'max-age=3600');
          setCookie('point', point, 'max-age=3600');
          loginUserKey = snapshot.key;
          return true;
        } else {
        }
      });
    } else {
      return false;
    }
  });
}
$(document).on('click', '.logout', function () {
  auth.signOut().then(function () {
    deleteCookie('name');
    deleteCookie('level');
    deleteCookie('point');
    alert('로그아웃 되었습니다.');
    document
      .getElementById('login_before')
      .setAttribute('class', 'login-info-on');
    document
      .getElementById('login_after')
      .setAttribute('class', 'login-info-off');
  }),
    function (error) {
      if (error) {
        alert(error.message);
      }
    };
});
$(document).on('click', '.login-btn', function () {
  var userId = $('#userId').val() + '@dy.com';
  var password = $('#pwd').val();

  signInWithEmailAndPassword(auth, userId, password).then(
    function (user) {
      userInfo = user.user;
      window.location.href = '../index.html';
    },
    function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    },
  );
});
$(document).ready(function () {
  $(document).on('click', '.join-btn', function () {
    var userId = $('#userId').val() + '@dy.com';
    var email = $('#email').val();
    var password = $('#pwd').val();
    var name = $('#name').val();

    createUserWithEmailAndPassword(auth, userId, password).then(
      function (user) {
        userInfo = user.user;
        logUser();
      },
      function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      },
    );

    function logUser() {
      set(ref(database, 'users/' + userInfo.uid), {
        name: name,
        level: 1,
        point: 0,
        email: email,
      });
      alert('가입성공');
      setTimeout(() => (window.location.href = '../index.html'), 2000);
      auth.signOut();
    }
  });
});
function getCookie(name) {
  var cookie = document.cookie;
  var result = '';
  cookie = cookie.split(';');
  for (var i = 0; i < cookie.length; i++) {
    if (cookie[i].indexOf(name + '=') != -1) {
      result = cookie[i].split(name + '=')[1];
    }
  }
  return result;
}
function setCookie(name, value, options) {
  var cookie = encodeURIComponent(name) + '=' + value + ';' + options;
  document.cookie = cookie;
}
function deleteCookie(name) {
  setCookie(name, '', 'max-age = -1');
}
export { userSessionCheck, getCookie };
