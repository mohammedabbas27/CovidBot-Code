/* Load Jquery */

(function () {
  var script = document.createElement("SCRIPT");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
  script.type = "text/javascript";
  script.onload = function () {
    var $ = window.jQuery;
    $(function () {
      main();
    });
  };
  document.getElementsByTagName("head")[0].appendChild(script);
})();
function main() {
  /* Load DOMPurify Library for sanitization */

  $.getScript(
    "https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.2.6/purify.min.js",
    function () {
      /* Load Google Material Icons Stylesheet */
      $("head").append(
        '<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>'
      );

      /* Load Google Fonts(Roboto) stylesheet */
      $("head").append(
        '<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu&display=swap"rel="stylesheet"/>'
      );

      /* Load Font Awesome Kit */
      $.getScript("https://kit.fontawesome.com/5730140e2c.js", function () {});

      const CHATBOT_ICON_PATH = "https://aibot.neurosoph.com:5000/MasChat.png";

      var htmlMarkup = `
      <div class="chatbot-container">
        <div id="chatbot-logos-container" title="COVID-19 Chatbot">
              <div class="chatbot-welcome-text">
                <span class="close-welcome-message" style="display:flex;align-self:flex-end"><i role="button"
                    class="material-icons">close</i></span>
                <div>
                    <h5 id="chatbot-welcome-popup">Have a COVID-19 Vaccination Question? </h5>
                    </div>
              </div>
              <div role="button"
                    tabindex=0 class="chatbot-logo" id="chatbot-logo">
                <img class="chatbot-img" alt="COVID-19 Chatbot" src="${CHATBOT_ICON_PATH}" />
              </div>
            </div>
  
            <div class="chatbot-widget" id="chatbot-widget">
              <div class="chatbot-header">
                <!--Add the name of the bot here -->
                <span aria-label="COVID-19 Chatbot Window" id="chatbot-logo-tagline" tabindex=0 style="color: white; margin-left: 5px"
                  >COVID-19</span
                >
                <div style="float:right;display:flex;">
                  <span role="button" tabindex=0 aria-label="Decrease Chatbot Font Size" class="chatbot-action-btns" id="chatbot-decrease-font">
                  A<span>-</span>
                  <!-- <i class="material-icons">expand_more</i> -->
                </span>
                  <span role="button" tabindex=0 aria-label="Increase Chatbot Font Size" class="chatbot-action-btns" id="chatbot-increase-font">
                  A<span>+</span>
                  <!-- <i class="material-icons">expand_less</i> -->
                </span>
  
                <span tabindex=0 aria-label="Reset Chatbot" title="Reset Chabot" class="chatbot-action-btns chatbot-hide-elem" id="chatbot-reset-bot">
                  <i
                    title="Reset bot"
                    class="fas fa-history chatbot-reset-bot"
                    style="margin-top: 3px"
                  ></i>
                </span>
  
                <span aria-label="Chatbot Help Shortcuts" style="margin-top: 5px;" tabindex=0 aria-expanded="false" role="button" class="chatbot-action-btns" id="chatbot-setting-container">
                  <i class="material-icons">help</i>
                </span>
                  <div role="none" tabindex=-1 class="chatbot-settings chatbot-hide-elem" id="chatbot-settings">
                    <div>
                      <ul>
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 id="first-shortcut" class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Toggle Bot:</span>
                            <span class="chatbot-settings-value">Alt + o</span>
                          </span>
                        </li>
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Increase Font:</span>
                            <span class="chatbot-settings-value">Alt + <span id="increase-font-icon" class="material-icons">trending_flat</span></span>
                          </span>
                        </li>
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Decrease Font:</span>
                            <span class="chatbot-settings-value">Alt + <span id="decrease-font-icon" class="material-icons">trending_flat</span></span>
                          </span>
                        </li>
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Minimize Bot:</span>
                            <span class="chatbot-settings-value">Alt + m </span>
                          </span>
                        </li>
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Close Bot:</span>
                            <span class="chatbot-settings-value">Alt + c </span>
                          </span>
                        </li>
                        ${
                          isWebSpeechSupported()
                            ? '<li class="chatbot-shortcut-list"><span tabindex=0 class="chatbot-shortcuts-info"><span class="chatbot-settings-label">Toggle Mic:</span><span class="chatbot-settings-value">Alt + r </span></span></li>'
                            : ""
                        }
                        <li class="chatbot-shortcut-list">
                          <span tabindex=0 id="last-shortcut" class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Toggle Help:</span>
                            <span class="chatbot-settings-value">Alt + i </span>
                          </span>
                        </li>
                        <li class="chatbot-hide-elem">
                          <span tabindex=0 class="chatbot-shortcuts-info">
                            <span class="chatbot-settings-label">Reset Bot:</span>
                            <span class="chatbot-settings-value">Alt + q </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span
                role="button"
                  tabindex=0
                  aria-label="Minnimize Chatbot"
                  class="chatbot-action-btns"
                  style="margin-top: 0px;padding-top:0px"
                  id="minimize"
                >
                  <i class="material-icons">minimize</i>
                </span>
                <span
                role="button"
                aria-label="Close Chatbot"
                tabindex=0
                  style="
                    color: white;
                    margin-right: 5px;
                    margin-top: 5px;
                  "
                  id="chatbot-close"
                >
                  <i class="material-icons">close</i>
                </span>
                </div>
                <div>
                  <span
                    title="Chatbot"
                    style="
                      color: white;
                      margin-left: 5px;
                      font-size: small;
                      font-style: italic;
                      display: block;
                    "
                    >Chatbot
                  </span>
                </div>
              </div>
              <!--Chatbot contents goes here -->
  
              <div class="chatbot-canvas" id="chatbot-canvas">
                <div class="chatbot-clearfix"></div>
                <div class="chatbot-msgs" id="chatbot-msgs" style="margin-top: 10px"></div>
              </div>
  
              <!--user typing indicator -->
              <div class="chatbot-keypad">
              <label for="chatbot-keypad" class="visuallyHidden" >Type Message</label>
                <input
                  type="text"
                  id="chatbot-keypad"
                  disabled
                  tabindex=0
                  class="chatbot-user-input browser-default"
                  placeholder="Ask a Covid-19 Question"
                  autocomplete="off"
                />
  
                <div class="chatbot-popup">
                  <span role="button"
                    tabindex=0
                    title="Turn on Microphone"
                    id="chatbot-mic-btn-off"><i
                    class="fas fa-microphone fa-2x"
                    style="margin-left: 3px; margin-top: 5px"
                  ></i></span>
                  <span class="chatbot-popuptext" id="chatbot-myPopup">Go on i'm Listening!</span>
                  <div
                    id="chatbot-mic-btn-on"
                    tabindex=0
                    title="Turn off Microphone"
                    role=button
                  <i
                    class="fas fa-microphone-alt fa-2x chatbot-hide-elem"
                    style="margin-left: 3px; margin-top: 5px"
                  ></i>
                  </div>
  
                </div>
                <span title="Send"
                  role="button"
                  tabindex=0
                  id="chatbot-send-btn">
                  <i
                  class="fas fa-paper-plane fa-2x"
                  style="margin-left: 3px; margin-top: 5px"
                ></i>
                </span>
  
                <i
                  title="Reset bot"
                  role="button"
                  tabindex=0
                  class="fas fa-history fa-2x chatbot-reset-bot chatbot-hide-elem"
                  style="cursor: pointer; margin-left: 3px; margin-top: 5px"
                ></i>
              </div>
            </div>
            <!--bot widget -->
          </div>
      `;

      var cssMarkup = `
  
          .chatbot-shortcut-list{
            margin-bottom: 7px;
          }
  
          .chatbot-container *{
            outline:none;
          }
  
          #increase-font-icon{
            transform: rotate(270deg);
          }
          #decrease-font-icon{
            transform: rotate(90deg);
          }
          .visuallyHidden {
            border: 0;
            clip: rect(0, 0, 0, 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        .chatbot-welcome-tagline{
            margin: 8px;
            margin-top: 35px;
        }
        .chatbot-container{
            line-height: 1.6;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
        }
        .close-welcome-message{
          cursor:pointer;
        }
        .chatbot-welcome-text {
            width: 180px;
            background: linear-gradient(60deg, #388558, #444e48);
            color: #fff !important;
            border-radius: 12px;
            padding: 8px 0;
            position: absolute;
            z-index: 1;
            bottom: 114%;
            left: -50%;
            margin-left: -80px;
            font-size: 16px;
            padding: 6px;
            display: flex;
            flex-direction: column;
            animation:fadeWelcomeText 0.5s 1;
            -webkit-animation:fadeWelcomeText 0.5s 1;
            animation-fill-mode: forwards;
  
            animation-delay:5s;
            -webkit-animation-delay:5s; /* Safari and Chrome */
            -webkit-animation-fill-mode: forwards;
        }
  
        @keyframes fadeWelcomeText{
          from {opacity :1;}
          to {opacity :0;}
      }
  
      @-webkit-keyframes fadeWelcomeText{
          from {opacity :1;}
          to {opacity :0;}
      }
      .chatbot-welcome-text::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 98%;
          margin-left: -35px;
          border-width: 9px;
          border-style: solid;
          border-color: #3f654f transparent transparent transparent;
        }
        #chatbot-welcome-popup{
          margin: 8px;
          margin-right: 10px;
          color: white !important;
          font-size:18px;
        }
      .chatbot-bot-msg overflow-scroll {
        height: 250px;
        overflow-y: scroll;
      }
      .fa-paper-plane:before {
        content: "\\f1d8";
        color: #3e6950;
      }
  
      .fa-microphone:before,
      .fa-microphone-alt:before,
      .fa-history:before {
        color: #3e6950;
      }
  
      .fa-microphone-alt:before {
        color: #e82719;
      }
  
      .chatbot-widget {
        display: flex;
        flex-direction: column;
        max-height: 590px;
        width: 480px;
        right: 15px !important;
        height: 72%;
        bottom: 5% !important;
        position: fixed !important;
        border-radius: 10px 10px 10px 10px !important;
        box-shadow: 0px 2px 10px 1px #b5b5b5 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
        z-index: 999;
        font-weight: 400;
        background: #f7f8f9;
        display:none;
      }
  
      .chatbot-header {
        height: 60px;
        background: linear-gradient(60deg, #388558, #444e48);
        border-radius: 10px 10px 0px 0px !important;
        padding: 5px !important;
        font-size: 20px !important;
      }
  
      .chatbot-canvas {
        width:100%;
        padding: 5px !important;
        padding-top: 0px !important;
        margin-top: 5px !important;
        border-radius: 1px !important;
        overflow-y: scroll !important;
        transition: 0.2s !important;
        height: calc(100% - 140px);
      }
  
      .chatbot-msgs{
        margin-top: 10px;
      }
  
      div.chatbot-canvas::-webkit-scrollbar,
      div.chatbot-settings::-webkit-scrollbar,
      div.chatbot-bot-msg::-webkit-scrollbar {
        width: 4px !important;
        /* remove scrollbar space /
          background: transparent !important;
          / optional: just make scrollbar invisible */
      }
  
      /* Track */
  
      div.chatbot-canvas::-webkit-scrollbar-track,
      div.chatbot-settings::-webkit-scrollbar-track,
      div.chatbot-bot-msg::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey !important;
        border-radius: 20px !important;
      }
  
      /* Handle */
  
      div.chatbot-canvas::-webkit-scrollbar-thumb,
      div.chatbot-settings::-webkit-scrollbar-thumb,
      div.chatbot-bot-msg::-webkit-scrollbar-thumb {
        background: linear-gradient(60deg, #388558, #444e48);
        border-radius: 5px !important;
      }
  
      /* Handle on hover */
  
      div.chatbot-canvas::-webkit-scrollbar-thumb:hover,
      div.chatbot-settings::-webkit-scrollbar-thumb:hover,
      div.chatbot-bot-msg::-webkit-scrollbar-thumb:hover {
        background: #b30000 !important;
      }
  
      #chatbot-close,
      #minimize {
        cursor: pointer !important;
      }
  
      .chatbot-clearfix {
        margin-top: 2px !important;
        margin-bottom: 2px !important;
      }
  
      .chatbot-bot-msg {
        float: left !important;
        margin-top: 5px !important;
        background: #ffffff !important;
        box-shadow: 2px 5px 5px 1px #efeef5 !important;
        border: 1px solid #ffffff !important;
        margin-left: 0.5em !important;
        padding: 0.6em 1em !important;
        border-radius: 1.5em !important;
        max-width: 90% !important;
        min-width: 25% !important;
        font-size: 16px;
        word-wrap: break-word !important;
        box-sizing: border-box;
        // max-height: 250px;
        // overflow-y: auto;
      }
  
      .chatbot-user-msg {
        animation: animateElement linear 0.2s !important;
        animation-iteration-count: 1 !important;
        margin-top: 5px !important;
        word-wrap: break-word !important;
        padding: 0.6em 1em !important;
        float: right !important;
        margin-right: 0.5em !important;
        background: #388558 !important;
        border: 1px solid #388558 !important;
        color: #fff !important;
        border-radius: 1.5em !important;
        margin-bottom: 0.15em !important;
        font-size: 16px;
        max-width: 55% !important;
        min-width: 25% !important;
        line-height: 1.5em !important;
        box-sizing: border-box;
      }
  
      .chatbot-msg-card {
        padding-right: 15px !important;
      }
  
      .chatbot-suggestions {
        padding: 5px !important;
        width: 100% !important;
        border-radius: 10px !important;
        background: #ffffff !important;
        box-shadow: 2px 5px 5px 1px #dbdade !important;
      }
  
      .chatbot-keypad {
        display: flex;
        align-items:center;
        height: 45px !important;
        position: absolute !important;
        bottom: 10px !important;
        width: 100% !important;
      }
  
      .chatbot-keypad > * {
          padding-right: 5px;
      }
  
      .chatbot-user-input {
        background: #f1f0f0 !important;
        width: 100% !important;
        margin-left: 4% !important;
        border-radius: 20px !important;
        box-shadow: 0px 2px 10px 1px #b5b5b5 !important;
        border: 0 !important;
        padding-left: 15px !important;
        height: 35px !important;
      }
  
      .chatbot-keypad input:focus {
        outline: none !important;
      }
  
      .chatbot-buttons-menu {
        padding: 5px !important;
        max-width: 100% !important;
        display: flex !important;
        flex-wrap: wrap !important;
      }
  
      .chatbot-list {
        padding: 5px !important;
        max-width: 100% !important;
      }
  
      .chatbot-menu-chips {
        margin-right: 3px !important;
        display: block !important;
        background: #388558 !important;
        color: #fff !important;
        text-align: center !important;
        padding: 5px !important;
        padding-left: 7px !important;
        padding-right: 6px !important;
        margin-bottom: 5px !important;
        cursor: pointer !important;
        border-radius: 7px !important;
        font-size: 14px;
        word-wrap: break-word !important;
      }
  
      .chatbot-menu-chips:hover {
        box-shadow: 4px 6px 15px 1px rgba(33, 63, 88, 0.25);
      }
  
      @keyframes animateElement {
        0% {
          opacity: 0 !important;
          transform: translate(0px, 10px) !important;
        }
  
        100% {
          opacity: 1 !important;
          transform: translate(0px, 0px) !important;
        }
      }
  
      .chatbot-img {
        width: 100% !important;
        padding: 2% !important;
      }
  
      #chatbot-logos-container {
        position: fixed;
        bottom: 55px !important;
        right: 16px !important;
        width: 100px;
        height: 12%;
        transition: 0.35s;
        transform: translate(400%);
        z-index: 999;
      }
  
      .chatbot-logo {
        padding: 5px !important;
        width: 64%;
        cursor: pointer !important;
        position: relative;
        float: left;
      }
  
      .chatbot-button-suggestions {
        background-color: transparent !important;
        box-shadow: none !important;
      }
  
      .jc-bs3-container {
        width: 30% !important;
      }
  
      #chatbot-send-btn:hover,
      #chatbot-mic-btn-on:hover,
      #chatbot-mic-btn-off:hover {
        cursor: pointer;
      }
  
      .chatbot-popup {
        position: relative;
        display: inline-block;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
  
      /* The actual popup */
  
      .chatbot-popup .chatbot-popuptext {
        visibility: hidden;
        width: 117px;
        background: linear-gradient(60deg, #388558, #444e48);
        color: #fff;
        text-align: center;
        border-radius: 12px;
        padding: 8px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -80px;
      }
  
      /* Popup arrow */
  
      .chatbot-popup .chatbot-popuptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 69%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
  
      /* Toggle this class - hide and show the popup */
  
      .chatbot-popup .chatbot-show-elem {
        visibility: visible;
        -webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;
      }
  
      /* Add animation (fade in the popup) */
  
      @-webkit-keyframes fadeIn {
        from {
          opacity: 0;
        }
  
        to {
          opacity: 1;
        }
      }
  
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
  
        to {
          opacity: 1;
        }
      }
  
      .chatbot-popup .chatbot-show-elem {
      }
  
      .chatbot-hide-elem {
        display: none !important;
      }
  
      .chatbot-activate-mini {
        color: #2ab6e9 !important;
      }
  
      .scroll {
        overflow-y: scroll;
        height: 300px;
      }
  
      .chatbot-clearfix {
        clear: both;
      }
  
      div#chatbot-loading-msg {
        position: relative;
        margin-left: auto;
        margin-right: auto;
      }
  
      div#chatbot-loading-msg .chatbot-loading-dot {
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin-right: 3px;
        background: #388558;
        animation: chatbot-loading-msg 1.3s linear infinite;
      }
  
      div#chatbot-loading-msg .chatbot-loading-dot:nth-child(2) {
        animation-delay: -1.1s;
      }
  
      div#chatbot-loading-msg .chatbot-loading-dot:nth-child(3) {
        animation-delay: -0.9s;
      }
  
      @keyframes chatbot-loading-msg {
        0%,
        60%,
        100% {
          transform: initial;
        }
  
        30% {
          transform: translateY(-15px);
        }
      }
  
      .chatbot-shortcuts-info {
        flex-direction: row;
        margin-bottom: 10px;
      }
  
      .chatbot-shortcuts-info > * {
        float: left;
      }
  
      .chatbot-settings {
        right: 10%;
        background-color: #ffffff;
        border: 2px solid #c1ced4;
        text-align: center;
        border-radius: 12px;
        padding: 8px 0;
        position: absolute;
        z-index: 1;
        padding: 10px;
        color: #000000;
        text-align: left;
        font-size: 16px;
        max-height: 180px;
        overflow-y: scroll;
        top: 65px;
      }
  
      .chatbot-settings::before {
        content: "";
        position: absolute;
        top: -16px;
        left: 69%;
        margin-left: 44px;
        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent #c1ced4 transparent;
      }
  
      .chatbot-action-btns {
        color: white;
        margin-right: 5px;
        padding-top: 2px;
        cursor: pointer;
        visibility: visible;
        padding-left: 5px;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
      }
  
      .chatbot-hide-elem {
        visibility: hidden;
      }
  
      .chatbot-settings-label {
        font-weight: 600;
      }
  
      .chatbot-settings-value {
        display:flex;
        padding-left: 5px;
        font-style: italic;
      }
  
      #chatbot-reset-bot i::before {
        color: white;
      }
  
      #chatbot-mic-btn-on,
      #chatbot-mic-btn-off,
      #chatbot-send-btn {
        font-size: 30px;
        padding-left: 3px;
      }
  
      .chatbot-reset-bot {
        padding-left: 3px;
      }
  
      #chatbot-keypad {
        font-size: 15px;
        height: 35px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
      }
      .yes-no-btn{
        padding: 8px !important;
        padding-left: 22px !important;
        padding-right: 22px !important;
      }
      .chatbot-bot-msg a {
        color: #388558;
      }
  
      @media (max-width: 720px) {
        .chatbot-widget {
          max-width: calc(100% - 40px);
        }
      }
  
      .fa-2x {
          font-size: 32px;
      }
  
      .chatbot-bot-msg a {
          font-weight: bold;
      }
      `;

      /* Attach the chatbot-StyleSheet to the body of the page */
      var style = document.createElement("style");
      style.innerHTML = DOMPurify.sanitize(cssMarkup);
      document.body.appendChild(style);

      /* Attach the chatbot-html-markup to the body of the page */
      var div = document.createElement("div");
      div.innerHTML = DOMPurify.sanitize(htmlMarkup);
      document.body.appendChild(div);

      $(document).ready(function () {
        $("#chatbot-logo").focus();
      });

      /* Configuration Variables */
      var crypto = window.crypto || window.msCrypto;
      var chatBotOpened = false;
      var micOn = false;
      var minimumFontSize = 12;
      var maximumFontSize = 22;
      var isClosed = false;
      var sessionStarted = false;
      const idPayload = getUid();
      var enableTextBotIcon = false;
      const API_END_POINT =
        "https://aibot.neurosoph.com:5000/webhooks/rest/webhook";
      var fontSize = 16;
      var isNewSession = false;
      var firstMessageSent = false;
      var noUserInput = false;
      var msg = "";

      /* Animate the chatbot from right to left */

      document.querySelector("#chatbot-logos-container").style.transform =
        "translate(-20%)";
      setTimeout(() => {
        document.querySelector("#chatbot-logos-container").style.transform =
          "translate(20%)";
      }, 400);
      msg = "Sorry, the chatbot is offline. Please try again later.";

      /* Disable chatbot on language change */
      var observer = new MutationObserver(function (event) {
        if (
          document.documentElement.className.match("translated") &&
          $(".goog-te-menu-value span:first").text() != "English"
        ) {
          $(".chatbot-container").addClass("chatbot-hide-elem");
        } else {
          $(".chatbot-container").removeClass("chatbot-hide-elem");
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
        childList: false,
        characterData: false,
      });

      function isWebSpeechSupported() {
        var agent = window.navigator.userAgent.toLowerCase();
        return agent.indexOf("chrome") > -1 &&
          !!window.chrome &&
          !(agent.indexOf("edg/") > -1) &&
          location.protocol == "https:" &&
          ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
          ? true
          : false;
      }

      function toggleMicrophoneMessage() {
        var chatbotPopup = document.getElementById("chatbot-myPopup");
        chatbotPopup.classList.toggle("chatbot-show-elem");
      }

      /* Check if web speech api is suported by the browser if not disable(hide) the microphone */

      if (isWebSpeechSupported()) {
        // speech recognition API supported
        /* Toggle the mic on and off based on the user input */
        function toggleMic() {
          $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
          $("#chatbot-mic-btn-on").toggleClass("chatbot-hide-elem");
        }

        /* Initialize the Webspeech API */
        try {
          window.SpeechRecognition =
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition ||
            window.oSpeechRecognition ||
            window.SpeechRecognition;

          const recognition = new SpeechRecognition();
          recognition.interimResults = true;

          /* Event listener for processing the result of the voice recognition */
          recognition.addEventListener("result", (e) => {
            const transcript = Array.from(e.results)
              .map((result) => result[0])
              .map((result) => result.transcript)
              .join("");

            $(".chatbot-user-input").val(transcript);
          });

          /* Toggle Microphone upon the start of voice recognition */
          recognition.addEventListener("start", function () {
            micOn = true;
            toggleMicrophoneMessage();
            toggleMic();
          });
          /* Send the message of the user upon the end of voice recognition */
          recognition.addEventListener("end", function () {
            toggleMicrophoneMessage();
            toggleMic();
            sendMessage();
            micOn = false;
          });

          /* Disable(hide) the chatbot if there is any error  */
          recognition.addEventListener("error", function (e) {
            if (e.error != "no-speech")
              $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
          });

          /*  Turn of the voice recognition  */
          $("#chatbot-mic-btn-on").click(function () {
            recognition.stop();
          });
          $("#chatbot-mic-btn-on").keypress(function (e) {
            if (e.keyCode == 13 || e.keyCode == 32) {
              e.preventDefault();
              recognition.stop();
            }
          });

          /*  Turn on the voice recognition */
          $("#chatbot-mic-btn-off").click(function () {
            recognition.start();
          });

          $("#chatbot-mic-btn-off").keypress(function (e) {
            if (e.keyCode == 13 || e.keyCode == 32) {
              e.preventDefault();
              recognition.start();
            }
          });

          /* Stop listening the user */
          function stopListening() {
            recognition.stop();
          }
        } catch (exception) {
          $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
        }
      } else {
        $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
      }

      /* Generate a random Unique Id */
      function getUid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }

      /* Update Font Size */

      function updateFontSize() {
        $(".chatbot-bot-msg").each((i, el) =>
          el.setAttribute("style", `font-size:${fontSize}px`)
        );

        $(".chatbot-user-msg").each((i, el) =>
          el.setAttribute("style", `font-size:${fontSize}px`)
        );

        $(".chatbot-menu-chips").each((i, el) =>
          el.setAttribute("style", `font-size:${fontSize}px`)
        );
      }

      /* Update Font Settings */
      function updateFontSettings() {
        if (fontSize == minimumFontSize) {
          $("#chatbot-decrease-font").addClass("chatbot-hide-elem");
        } else {
          $("#chatbot-decrease-font").removeClass("chatbot-hide-elem");
        }

        if (fontSize == maximumFontSize) {
          document
            .querySelector("#chatbot-increase-font")
            .addClass("chatbot-hide-elem");
        } else {
          $("#chatbot-increase-font").removeClass("chatbot-hide-elem");
        }
      }

      /* Validate User Input and prepare the user request */
      function sendData(e) {
        var text = DOMPurify.sanitize($(".chatbot-user-input").val(), {
          USE_PROFILES: { html: false },
        });
        if (text == "" || $.trim(text) == "") {
          e.preventDefault();
          return false;
        } else {
          $(".chatbot-user-input").blur();
          setUserResponse(text);
          send(text, "message");
          e.preventDefault();
          return false;
        }
      }

      function toggleUserInput(value) {
        $(".chatbot-user-input").prop("disabled", value);
      }

      /* On input/text enter */
      $(".chatbot-user-input").on("keyup keypress", function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
          sendData(e);
        }
      });

      /* Set user response */
      function setUserResponse(val) {
        /*disable the user input */
        toggleUserInput(false);

        var UserResponse =
          `<p class="chatbot-user-msg" style="font-size:${fontSize}px" tabindex=0>` +
          val +
          ' </p><div class="chatbot-clearfix"></div>';
        $($(DOMPurify.sanitize(UserResponse)))
          .appendTo(".chatbot-msgs")
          .show("slow");
        $(".chatbot-user-input").val("");
        $(".chatbot-suggestions").remove();
        noUserInput = false;
        var BotResponse =
          `<div class="chatbot-bot-msg" tabindex=0 aria-label="loading for bot response" id="typing" style="font-size:${fontSize}px;border:0px !important;background:transparent !important;box-shadow:none !important">` +
          `<div id="chatbot-loading-msg">
                      <span class="chatbot-loading-dot"></span>
                      <span class="chatbot-loading-dot"></span>
                      <span class="chatbot-loading-dot"></span>
                      </div>` +
          '</div><div class="chatbot-clearfix"></div>';
        $(DOMPurify.sanitize(BotResponse))
          .appendTo(".chatbot-msgs")
          .hide()
          .fadeIn(100);
        $(".chatbot-user-msg").last().nextAll(".chatbot-bot-msg:first").focus();
        scrollToBottomOfResults();
      }

      /* Scroll to the bottom of the chats */
      function scrollToBottomOfResults() {
        var terminalResultsDiv = document.getElementById("chatbot-canvas");
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
      }

      /* Send Message back to the rasa server */
      function send(message, intent) {
        var dataTobeSent = null;
        if (intent == "action") {
          dataTobeSent = JSON.stringify({
            action: message,
            sender: idPayload,
          });
        } else {
          dataTobeSent = JSON.stringify({
            message: message,
            sender: idPayload,
          });
        }

        $.ajax({
          url: API_END_POINT,
          type: "POST",
          contentType: "application/json",
          data: dataTobeSent,
          success: function (data, textStatus) {
            var firstMessage = $("#chatbot-msgs").eq(0);
            if (!firstMessage) {
              if (data.length > 1) {
                data.pop();
              }
            }
            setBotResponse(data);
            enableUserInput();
          },
          error: function (errorMessage) {
            setBotResponse("");
            enableUserInput();
          },
        });
      }

      function enableUserInput() {
        setTimeout(function () {
          toggleUserInput(false);
          //   $(".chatbot-user-input").focus();
        }, 1500);
      }

      /* Set bot response */
      function setBotResponse(val) {
        setTimeout(function () {
          $("#typing").remove();
        }, 500);

        setTimeout(function () {
          if (val.length < 1) {
            /* if there is no response from Rasa */
            msg = "Sorry, the chatbot is offline. Please try again later.";
            var BotResponse =
              `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
              msg +
              '</p><div class="chatbot-clearfix"></div>';
            $(DOMPurify.sanitize(BotResponse))
              .appendTo(".chatbot-msgs")
              .hide()
              .fadeIn(200);
          } else {
            //if we get response from Rasa
            for (let i = 0; i < val.length; i++) {
              var data;
              //check if there is text message
              if (val[i].hasOwnProperty("custom")) {
                data = val[i].custom;
                var type = val[i].custom.type;
                if (type == "buttons") {
                  addSuggestion(data.buttons, "chatbot-list");
                } else if (type == "age") {
                  var BotResponse =
                    `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
                    data.text +
                    '</p><div class="chatbot-clearfix"></div>';
                  $(DOMPurify.sanitize(BotResponse))
                    .appendTo(".chatbot-msgs")
                    .hide()
                    .fadeIn(200);
                } else if (type == "bullet_points") {
                  var bulletPoints = data.bullet_points;
                  var markup = data.text + "<ul>";
                  bulletPoints.forEach((point) => {
                    markup += `<li>${point}</li>`;
                  });
                  markup += `</ul>`;
                  var BotResponse =
                    `<div class="chatbot-bot-msg style="font-size:${fontSize}px;" overflow-scroll" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  $(DOMPurify.sanitize(BotResponse))
                    .appendTo(".chatbot-msgs")
                    .hide()
                    .fadeIn(200);
                  addSuggestion(data.buttons, "chatbot-buttons-menu");
                } else if (type == "checkbox") {
                  var checkboxes = data.checkbox;
                  var markup = data.text + "<div><form class='diseases'>";
                  checkboxes.forEach((box) => {
                    markup += `<div style="display:flex;align-items:center">
                          <input type="checkbox" id="${box}" name="${box}" value="${box}">
                          <label style="padding-left:5px;" for="${box}"> ${box}</label></div>
                          `;
                  });
                  markup += `</form></div>`;
                  var BotResponse =
                    `<div class="chatbot-bot-msg overflow-scroll" style="font-size:${fontSize}px;" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  $(DOMPurify.sanitize(BotResponse))
                    .appendTo(".chatbot-msgs")
                    .hide()
                    .fadeIn(200);
                  var submitButton = [
                    {
                      title: "Submit",
                      checkbox: true,
                      payload: JSON.stringify({
                        count: "%count",
                      }),
                    },
                  ];
                  addSuggestion(submitButton, "chatbot-buttons-menu");
                } else if (type == "hyper_link") {
                  var links = data.links;
                  var linkData = data.text;
                  var markup = `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>`;
                  window.links = links;
                  for (let i = 0; i < links.length; i++) {
                    var delimeter = Object.keys(links[i])[0];
                    for (var prop in links[i]) {
                      var link = links[i][prop][0];
                      var textToReplace = links[i][prop][1];
                      var anchorLink = `<a href="${link}" target="_blank">${textToReplace}</a>`;
                      linkData = linkData.replace(delimeter, anchorLink);
                    }
                  }

                  markup +=
                    linkData + '</p><div class="chatbot-clearfix"></div>';
                  $(markup).appendTo(".chatbot-msgs").hide().fadeIn(200);
                } else if (type == "hyper_bullets") {
                  var hyperPoints = data.hyper_bullets;
                  var markup = data.text + "<ul>";
                  hyperPoints.forEach((point) => {
                    //   markup += `<li>${point}</li>`;
                    for (var prop in point) {
                      var text = point[prop][0];
                      var link = point[prop][1];
                      markup += `<li><a href=${link} target="_blank">${text}</a></li>`;
                    }
                  });
                  markup += `</ul>`;
                  var BotResponse =
                    `<div class="chatbot-bot-msg style="font-size:${fontSize}px;" overflow-scroll" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  $(DOMPurify.sanitize(BotResponse))
                    .appendTo(".chatbot-msgs")
                    .hide()
                    .fadeIn(200);
                  //   addSuggestion(data.buttons, "chatbot-buttons-menu");
                }
              }

              if (val[i].hasOwnProperty("text")) {
                var firstMessage = $("#chatbot-msgs").eq(0);
                if (firstMessage) {
                  if (firstMessage.text() == val[i].text) {
                    return;
                  }
                }
                var inputStr = val[i].text.split(" ");
                if (val[i].text.indexOf("https") >= 0) {
                  var markup = `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>`;
                  var delimeter = "";
                  inputStr.forEach((str) => {
                    if (str.indexOf("https") >= 0) {
                      delimeter = str;
                    }
                  });
                  markup += val[i].text.split(delimeter)[0];
                  markup += `<a href="${delimeter}" target="_blank">${
                    val[i].text.split(delimeter)[1]
                  }</a> `;
                  markup += '</p><div class="chatbot-clearfix"></div>';
                  $(markup).appendTo(".chatbot-msgs").hide().fadeIn(200);
                } else {
                  var BotResponse =
                    `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
                    val[i].text +
                    '</p><div class="chatbot-clearfix"></div>';
                  $(DOMPurify.sanitize(BotResponse))
                    .appendTo(".chatbot-msgs")
                    .hide()
                    .fadeIn(200);
                }
              }

              //check if there is button message
              if (val[i].hasOwnProperty("buttons")) {
                if (val[i].hasOwnProperty("custom")) {
                  data = JSON.parse(val[i].custom);
                  var type = Object.keys(data)[0];
                }
                addSuggestion(val[i].buttons, "chatbot-buttons-menu");
              }
            }
            scrollToBottomOfResults();
          }
        }, 500);
      }

      function sendMessage() {
        var text = DOMPurify.sanitize($(".chatbot-user-input").val());
        if (text == "" || $.trim(text) == "") {
          return false;
        } else {
          $(".chatbot-user-input").blur();
          setUserResponse(text);
          send(text, "message");
          return false;
        }
      }

      /* Check which Bot Icon to display */
      function toggleChatbotLogo() {
        if (enableTextBotIcon) {
          enableTextBotIcon = false;
        } else {
          enableTextBotIcon = true;
        }
      }

      /* Toggle Settings */
      function handleSettings() {
        $("#first-shortcut").focus();
        var expandedState = $("#chatbot-setting-container").attr(
          "aria-expanded"
        );
        expandedState = expandedState == "true" ? false : true;
        $("#chatbot-setting-container").attr("aria-expanded", expandedState);
        if ($(".chatbot-settings").hasClass("chatbot-hide-elem")) {
          $(".chatbot-settings").removeClass("chatbot-hide-elem");
          setTimeout(() => {
            $(".chatbot-settings").addClass("chatbot-show-settings");
          }, 100);
        } else {
          $(".chatbot-settings").removeClass("chatbot-show-settings");
          setTimeout(() => {
            $(".chatbot-settings").addClass("chatbot-hide-elem");
          }, 100);
        }
      }

      /* Hide Chatbot */
      function hideChatBot() {
        $(".chatbot-settings").removeClass("chatbot-show-settings");
        chatBotOpened = false;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "none" });
        }, 150);
        handleChatBotHiding();
      }

      /* Show Chatbot */
      function showChatBot() {
        chatBotOpened = true;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "block" });
        }, 50);
        handleChatBotHiding();
      }

      function handleChatBotHiding() {
        $("#chatbot-logos-container").toggle();

        if ($(".chatbot-show-elem").length > 0) {
          stopListening();
        }
      }

      /* Suggestions */

      function addSuggestion(textToAdd, type) {
        setTimeout(function () {
          var suggestions = textToAdd;
          var suggLength = textToAdd.length;
          $(
            ' <div class="chatbot-msg-card"> <div class="chatbot-button-suggestions chatbot-suggestions"><div class="' +
              type +
              '"></div></div></diV>'
          )
            .appendTo(".chatbot-msgs")
            .hide()
            .fadeIn(1000);
          // Loop through suggestions
          for (let i = 0; i < suggLength; i++) {
            var markup = ``;
            markup += `<div role="button" style="font-size:${fontSize}px" class="chatbot-menu-chips ${
              suggestions[i].payload === "/yes" ||
              suggestions[i].payload === "/no"
                ? "yes-no-btn"
                : ""
            }" tabindex="0" `;
            if (suggestions[i].checkbox) {
              markup += "checkbox=true";
            }
            markup +=
              " data-payload='" +
              suggestions[i].payload +
              "'>" +
              suggestions[i].title +
              "</div>";
            $(markup).appendTo("." + type);
          }
          scrollToBottomOfResults();
        }, 500);
      }

      /* Reset Bot */
      function resetBot() {
        $("#chatbot-msgs").empty();
        $(".chatbot-user-input").val("");
        send("/restart", "message");
      }

      /* Close Bot */
      function closeChatbot() {
        sessionStarted = false;
        Math.floor(Math.random() * 10 + 1);
        hideChatBot();
        $(".chatbot-user-input").prop("disabled", true);
        $("#chatbot-msgs").empty();
        $(".chatbot-user-input").val("");

        /* Check if mic is on */
        if ($(".chatbot-show-elem").length > 0) {
          stopListening();
        }
      }

      function increaseFontSize() {
        if (fontSize < maximumFontSize) {
          fontSize += 2;
          updateFontSize();
        }
      }

      function decreaseFontSize() {
        if (fontSize > minimumFontSize) {
          fontSize -= 2;
          updateFontSize();
        }
      }

      function launchChatbot() {
        if ($("#chatbot-msgs").text().length == 0 || !sessionStarted) {
          sessionStarted = true;
          isNewSession = true;
          send("/session_start", "message");
          firstMessageSent = true;
          $("#chatbot-msgs").empty();
          $(".chatbot-user-input").val("");
        }
        showChatBot();
        setTimeout(() => {
          $("#chatbot-logo-tagline").focus();
        }, 50);
        scrollToBottomOfResults();
      }

      /* *** EVENT Listeners *** */

      $(".chatbot-welcome-text").on(
        "animationend webkitAnimationEnd",
        function () {
          $(".chatbot-welcome-text").addClass("chatbot-hide-elem");
        }
      );

      $("#first-shortcut").keydown(function (e) {
        if (e.shiftKey && e.keyCode == 9) {
          handleSettings();
        }
      });

      $("#last-shortcut").keydown(function (e) {
        if (e.keyCode == 9) {
          handleSettings();
        }
      });

      /* Increase Font Size */
      $("#chatbot-increase-font").click((e) => {
        increaseFontSize();
      });

      $("#chatbot-increase-font").keypress((e) => {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          increaseFontSize();
        }
      });

      /* Decrease Font Size */
      $("#chatbot-decrease-font").click((e) => {
        decreaseFontSize();
      });

      $("#chatbot-decrease-font").keypress((e) => {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          decreaseFontSize();
        }
      });

      /* Close Welcome Message */
      $(".close-welcome-message").click(function () {
        $(".chatbot-welcome-text").addClass("chatbot-hide-elem");
      });

      $(".close-welcome-message").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          $(".chatbot-welcome-text").addClass("chatbot-hide-elem");
        }
      });

      /* Reset Button */
      $(".chatbot-reset-bot").click(resetBot);

      /* Send Button */
      $("#chatbot-send-btn").click(sendData);
      $("#chatbot-send-btn").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          sendData();
        }
      });

      /* Toggle chatbot */
      $("#chatbot-logo").click(function () {
        launchChatbot();
      });

      $("#chatbot-logo").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          launchChatbot();
        }
      });

      /* Toggle Settings */
      $("#chatbot-setting-container").on("click", handleSettings);

      $("#chatbot-setting-container").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          e.preventDefault();
          handleSettings();
        }
      });

      /* Minnimze Chatbot */
      $("#minimize").click(function () {
        hideChatBot();
      });

      $("#minimize").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          hideChatBot();
        }
      });

      /* Close Chatbot */
      $("#chatbot-close").click(function () {
        closeChatbot();
      });

      $("#chatbot-close").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          hideChatBot();
        }
      });

      /* Prevent user from pasting - ON HOLD AS OF NOW*/

      /* $("#chatbot-keypad").on("paste", function(e) {
          e.preventDefault();
        }); */

      /* Prevent "/" in user input  */
      $("#chatbot-keypad").on("keydown", function (e) {
        if ($("#chatbot-keypad").val() === "" && e.keyCode == 191) {
          e.preventDefault();
        }
      });

      /* On click of suggestions, get the value and send to server */
      $(document).on("click keypress", ".chatbot-menu-chips", function (e) {
        if (e.type === "keypress") {
          if (!(e.keyCode != 13 || e.keyCode != 32)) {
            return;
          }
          e.preventDefault();
        }
        var text = this.textContent;
        var payload = this.getAttribute("data-payload");
        var checkbox = this.getAttribute("checkbox");
        if (checkbox) {
          var diseaseCount = $(".diseases")
            .eq($(".diseases").length - 1)
            .find("input[type=checkbox]:checked").length;
          payload = payload.replace("%count", diseaseCount);
        }
        setUserResponse(text);
        send(payload, "message");
        $(".chatbot-suggestions").remove(); //delete the suggestions
      });

      // define a handler
      function doc_keyUp(e) {
        // this would test for whichever key is 40 and the ctrl key at the same time
        if (e.altKey && e.keyCode == 79) {
          // call your function to do the thing
          if (chatBotOpened) {
            $("#minimize").click();
          } else {
            $("#chatbot-logo").click();
          }
        }
        if (e.altKey && e.keyCode == 77) {
          // call your function to do the thing
          if (chatBotOpened) {
            $("#minimize").click();
          }
        }
        if (e.altKey && e.keyCode == 67) {
          // call your function to do the thing
          if (chatBotOpened) {
            $("#chatbot-close").click();
          }
        }

        if (isWebSpeechSupported()) {
          if (e.altKey && e.keyCode == 82) {
            // call your function to do the thing
            if (micOn) {
              $("#chatbot-mic-btn-on").click();
            } else {
              $("#chatbot-mic-btn-off").click();
            }
          }
        }

        if (e.altKey && e.keyCode == 38) {
          // call your function to do the thing
          if (fontSize < maximumFontSize) {
            fontSize += 2;
            updateFontSize();
          }
        }

        if (e.altKey && e.keyCode == 40) {
          // call your function to do the thing
          if (fontSize > minimumFontSize) {
            fontSize -= 2;
            updateFontSize();
          }
        }

        if (e.altKey && e.keyCode == 73) {
          // call your function to do the thing
          handleSettings();
        }
      }
      // register the handler ON-HOLD
      document.addEventListener("keyup", doc_keyUp, false);
    }
  );
}
