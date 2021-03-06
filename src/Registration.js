// Import the functions you need from the SDKs you need

import { initializeApp } from "../node_modules/firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../node_modules/firebase/auth";
import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  child,
} from "../node_modules/firebase/database";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.development";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDDv79wQC6azE_nng2L91WKb64Uh8kfNtc",

  authDomain: "database-projecttpl.firebaseapp.com",

  databaseURL:
    "https://database-projecttpl-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "database-projecttpl",

  storageBucket: "database-projecttpl.appspot.com",

  messagingSenderId: "751654517121",

  appId: "1:751654517121:web:ead403361f6c5345b91080",
};

// Initialize Firebase

var app = initializeApp(firebaseConfig);

//Initialize variables

const authentication = getAuth(app);
const firebaseDataBase = getDatabase(app);

export function register(
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  CNP,
  card_series
) {
  //Validate input fields
  var password_validation = validate_password(password, confirm_password);
  var card_series_validation = validate_card_series(card_series);
  var cnp_validation = validate_CNP(CNP);

  if (!validate_email(email)) {
    alert("Email is not valid");
    return;
  }

  if (password_validation != 0) {
    if (password_validation == 1)
      alert(
        "The minimum number of characters for the password is 6 characters"
      );
    if (password_validation == 2) alert("The passwords are not the same");
    return;
  }

  if (!validate_field(first_name) || !validate_field(last_name)) {
    alert("The fields can't be empty");
    return;
  }

  if (card_series_validation != 0) {
    if (card_series_validation == 1) alert("Card series must have 6 digits");
    if (card_series_validation == 2)
      alert("The card series must contain only digits");
    return;
  }

  if (cnp_validation != 0) {
    if (cnp_validation == 1) alert("The CNP must contain 13 digits");
    if (cnp_validation == 2) alert("The CNP series must contain only digits");
    return;
  }

  //Move on with Authentication
  createUserWithEmailAndPassword(authentication, email, password).then(
    function () {
      //Declare user variable
      var user = authentication.currentUser;

      var reff = ref(firebaseDataBase, "users/" + user.uid);

      var subscription = {
        name: "none",
        days: 0,
        price: 0,
      };

      var user_data = {
        email: email,
        last_name: last_name,
        first_name: first_name,
        card_series: card_series,
        CNP: CNP,
        subscription: subscription,
        subscription_lenghth: 0,
        subscription_starting_date: 0,
        last_login: Date.now(),
      };

      set(reff, user_data);

      alert("User created!");
    },
    function (error) {
      //Firebase will use this to alert of the error
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message + "and has finished with error code: " + error_code);
    }
  );
}

export function login(email, password) {
  var password_validation = validate_password_login(password);

  if (!validate_email(email)) {
    alert("Email is not valid");
    return;
  }

  if (!password_validation) {
    alert("Password is not valid");
    return;
  }

  signInWithEmailAndPassword(authentication, email, password).then(
    function () {
      var user = authentication.currentUser;

      var user_data = {
        last_login: Date.now(),
      };

      var reff = ref(firebaseDataBase, "users/" + user.uid);

      update(reff, user_data);

      alert("Logged in!");
    },
    function (error) {
      //Firebase will use this to alert of the error
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message + "and has finished with error code: " + error_code);
    }
  );
}

export function createSubscriptions() {
  var reff = ref(firebaseDataBase, "subscriptions");

  var subsctiptions = {
    none: {
      name: "none",
      days: 0,
      price: 0,
    },
    monthlySubscribe: { name: "monthlySubscribe", days: 30, price: 75 },
    fifteenDaySubscription: {
      name: "fifteenDaySubscription",
      days: 15,
      price: 46,
    },
    sevenDaySubscription: {
      name: "sevenDaySubscription",
      days: 7,
      price: 27,
    },
    oneDaySubscription: {
      name: "oneDaySubscription",
      days: 1,
      price: 6,
    },
    subscriptionWithoutName: {
      name: "subscriptionWithoutName",
      days: 30,
      price: 115,
    },
    studentSubscription: {
      name: "studentSubscription",
      days: 30,
      price: 37.5,
    },
    retiredSubscription: {
      name: "retiredSubscription",
      days: 30,
      price: 37.5,
    },
  };

  set(reff, subsctiptions);

  alert("Subscriptions created");
}

export function getAllDataFromUser() {
  var returnVal;
  const ceva = ref(firebaseDataBase, "users/" + authentication.currentUser.uid);
  onValue(ceva, (snapshot) => {
    returnVal = snapshot.val();
    alert(snapshot.val().email + snapshot.val().CNP); //we have access to everything that is on the database
  });
}

export function updateSubscription(subscriptionType) {
  var user = authentication.currentUser;

  var reff = ref(firebaseDataBase, "users/" + user.uid);

  var user_data = {
    subscription: getSubscription(subscriptionType),
    subscription_lenghth: getSubscriptionDuration(subscriptionType),
    subscription_starting_date: Date.now(),
  };

  update(reff, user_data);

  alert("subscription updated!");
}

function getSubscriptionDuration(subscriptionType) {
  var returnVal;
  const ceva = ref(firebaseDataBase, "subscriptions/" + subscriptionType);
  onValue(ceva, (snapshot) => {
    returnVal = snapshot.val().days;
  });
  return returnVal;
}

//will need to be improved
async function getSubscription(subscriptionType) {
  var returnVal;
  const ceva = ref(firebaseDataBase, "subscriptions");
  await onValue(ceva, (snapshot) => {
    returnVal = snapshot.val()[subscriptionType];
  });
  return returnVal[subscriptionType];
}

function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password, confirm_password) {
  if (password.length < 6) return 1;
  if (password != confirm_password) return 2;
  return 0;
}

function validate_field(field) {
  return field != null && !/^\s*$/.test(field);
}

function validate_CNP(field) {
  if (isNaN(field)) return 1;
  if (field.length != 13) return 2;
  return 0;
}

function validate_card_series(field) {
  if (field.length != 6) return 1;
  if (isNaN(field)) return 2;
  return 0;
}

function validate_password_login(field) {
  return field.length >= 6;
}
