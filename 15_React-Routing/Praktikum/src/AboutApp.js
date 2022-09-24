import React from "react";

function AboutApp() {
  return (
    <div>
        <h4>About the App</h4>
        <p>In this App, you can add, delete, submit, and edit items.
            To edit items, simply double click on it.
            Once you are done, press the enter key to resubmit.
            This app will persist your data in the browser local storage.
            So whether you reload, close your app or reopended it, you still have access to your todos items
        </p>
    </div>
  );
}

export default AboutApp;