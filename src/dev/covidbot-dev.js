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

      const CHATBOT_ICON_PATH =
        "https://aibot.neurosoph.com:5000/Chatbot_Icon_01-Green.png";

      var htmlMarkup = `
  <div class="chatbot-container">
    <div id="chatbot-logos-container">
          <div class="chatbot-welcome-text">
            <div class="chatbot-inner-bubble">
              <div style="display:flex;">
              <div tabindex=0 role="button" aria-label="Covid-19 Chatbot Icon" class="chatbot-welcome-image-container chatbot-logo">
              <img aria-hidden="true" src="${CHATBOT_ICON_PATH}"/>
              </div>
              <div class="close-welcome-message"><i
                class="material-icons">close</i></div>
              </div>
                <h5 aria-hidden="true" tabindex=-1 class="chatbot-logo" id="chatbot-welcome-popup">Have a COVID-19 vaccine question?</h5>
                </div>
          </div>
        </div>

        <div class="chatbot-widget" id="chatbot-widget">
          <div class="chatbot-header">
            <!--Add the name of the bot here -->
            <span aria-label="Vaccine chat Window" id="chatbot-logo-tagline" tabindex=0 style="color: white; margin-left: 5px"
              >Vaccine chat</span>
            <div style="float:right;display:flex;">
              <span data-tooltipid="tooltip-dec-font" role="button" tabindex=0 aria-label="Decrease Chatbot Font Size" class="chatbot-action-btns" id="chatbot-decrease-font">
              A<span>-</span>
              </span>
              <div id="tooltip-dec-font" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: 40px auto auto 255px;">Decrease font</div>
              <span data-tooltipid="tooltip-inc-font" role="button" tabindex=0 aria-label="Increase Chatbot Font Size" class="chatbot-action-btns" id="chatbot-increase-font">
              A<span>+</span>
            </span>
            <div id="tooltip-inc-font" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: 40px auto auto 290px;">Increase font</div>

            <span tabindex=0 aria-label="Reset Chatbot" title="Reset Chabot" class="chatbot-action-btns chatbot-hide-elem" id="chatbot-reset-bot">
              <i
                title="Reset bot"
                class="fas fa-history chatbot-reset-bot"
                style="margin-top: 3px"
              ></i>
            </span>

            <span aria-label="Chatbot Help Shortcuts" data-tooltipid="tooltip-help" style="margin-top: 5px;" tabindex=0 aria-expanded="false" role="button" class="chatbot-action-btns" id="chatbot-setting-container">
              <i class="material-icons">help</i>
            </span>
            <div id="tooltip-help" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: 40px auto auto 318px;">Chatbot shortcuts</div>
              <div tabindex=-1 class="chatbot-settings chatbot-hide-elem" id="chatbot-settings">
                <div>
                  <ul style="list-style: none;padding-left: 10px;">
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 id="first-shortcut" class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Close/reopen window:</span>
                        <span class="chatbot-settings-value">Alt + o</span>
                      </span>
                    </li>
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Increase font:</span>
                        <span class="chatbot-settings-value">Alt + <span id="increase-font-icon" aria-label="up arrow" class="material-icons">trending_flat</span></span>
                      </span>
                    </li>
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Decrease font:</span>
                        <span class="chatbot-settings-value">Alt + <span id="decrease-font-icon" aria-label="down arrow" class="material-icons">trending_flat</span></span>
                      </span>
                    </li>
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Minimize window:</span>
                        <span class="chatbot-settings-value">Alt + m </span>
                      </span>
                    </li>
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Close window:</span>
                        <span class="chatbot-settings-value">Alt + c </span>
                      </span>
                    </li>
                    ${
                      isWebSpeechSupported()
                        ? '<li class="chatbot-shortcut-list"><span tabindex=0 class="chatbot-shortcuts-info"><span class="chatbot-settings-label">Turn off/Turn on Mic:</span><span class="chatbot-settings-value">Alt + r </span></span></li>'
                        : ""
                    }
                    <li class="chatbot-shortcut-list">
                      <span tabindex=0 id="last-shortcut" class="chatbot-shortcuts-info">
                        <span class="chatbot-settings-label">Close/Reopen help:</span>
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
              data-tooltipid="tooltip-minimize"
              aria-label="Minnimize Chatbot"
              class="chatbot-action-btns"
              style="margin-top: 0px;padding-top:0px"
              id="minimize"
            >
              <i class="material-icons">minimize</i>
            </span>
            <div id="tooltip-minimize" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: 41px auto auto 350px;">Minimize chatbot</div>
            <span
            role="button"
            aria-label="Close Chatbot"
            data-tooltipid="tooltip-close"
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
            <div id="tooltip-close" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: 40px auto auto 374.72px;">Close chatbot</div>
            </div>
            <div>
              <span
                title="Vaccine chat"
                class="chatbot-sub-tagline"
                >Ask a COVID-19 vaccine question
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
            <input
              maxlength="120"
              type="text"
              id="chatbot-keypad"
              disabled
              tabindex=0
              class="chatbot-user-input browser-default"
              placeholder="Ask a COVID-19 vaccine question"
              autocomplete="off"
            />

            <div class="chatbot-popup">
              <span role="button"
                data-tooltipid="tooltip-voice"
                tabindex=0
                aria-label="Turn on Microphone"
                id="chatbot-mic-btn-off"><span class="material-icons" style="font-size: 38px;margin-top: 16px;color: #388557;font-weight: bold;">mic</span></span>
              <span class="chatbot-popuptext" id="chatbot-myPopup">Go on i'm Listening!</span>
              <div
                id="chatbot-mic-btn-on"
                tabindex=0
                aria-label="Turn off Microphone"
                role="button" >
                <span class="material-icons chatbot-hide-elem" style="font-size: 38px;margin-top: 10px;color: #e82719;font-weight: bold;">mic</span>
              </div>
              </div>
            <div id="tooltip-voice" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: -29px auto auto 327.72px;">Chat with your voice</div>
              <span aria-label="Send"
              role="button"
              data-tooltipid="tooltip-send-msg"
              tabindex=0
              id="chatbot-send-btn">
              <span class="material-icons" style="margin-top: 14px;font-size: 34px;color: #388557;">send</span></span>
            <div id="tooltip-send-msg" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="inset: -29px auto auto 357.72px;">Send message</div>
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

      .tooltip{
        position: absolute;
        background: #555856;
        padding: 5px;
        border-radius: 5px;
        color: white;
        font-size: 14px;
      }

      .chatbot-logo img{
        width:70px;
        margin-left: 35px;
      }
      .center-chatbot-logo{
        margin-left: 20px !important;
        margin-right: 10px;
      }
      .chatbot-sub-tagline{
        color: white;
        margin-left: 5px;
        font-size: small;
        font-style: italic;
        display: block;
        white-space: pre;
      }
      .chatbot-inner-bubble:after {
          content: ' ';
          position: absolute;
          width: 0;
          height: 0;
          left: auto;
          right: 38px;
          bottom: -20px;
          border: 12px solid;
          border-color: #ebf3ee #ebf3ee transparent transparent;
          z-index: 2;
      }
      .chatbot-welcome-image-container{
        display: flex;
        flex-grow: 2;
        align-items: center;
        justify-content: center;
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
    }
    .close-welcome-message{
      cursor:pointer;
      display:flex;
      margin-top:10px;
    }

    .close-welcome-message i{
      font-size: 38px;
      font-weight: 1000;
    }
    .chatbot-welcome-text {
        max-width: 210px;
        background: #ebf3ee;
        color: #388557;
        border-radius: 12px;
        padding: 8px 0;
        position: absolute;
        z-index: 999;
        bottom: 20%;
        left: -76%;
        margin-left: -80px;
        font-size: 16px;
        padding: 6px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0.25rem 0.5rem rgb(1 1 1 / 50%);
        animation:fadeWelcomeText1 0.5s 1;
        -webkit-animation:fadeWelcomeText1 0.5s 1;
        animation-fill-mode: forwards;
        animation-delay:5s;
        -webkit-animation-delay:5s; /* Safari and Chrome */
        -webkit-animation-fill-mode: forwards;
        border-radius: 40px;
        border: 6px solid #97c2a9;
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
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      left: auto;
      right: 30px;
      bottom: -39px;
      border: 20px solid;
      border-color: #97c2a9 #97c2a9 transparent transparent;
      border-bottom-right-radius: 10px;
    }
    .chatbot-welcome-text.shift{
      left:0%;
    }
    #chatbot-welcome-popup{
      margin: 8px;
      margin-right: 10px;
      color: #388557;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  .chatbot-bot-msg overflow-scroll {
    height: 250px;
    overflow-y: scroll;
  }
  .fa-paper-plane:before {
    content: "\\f1d8";
    color: #388557;
  }

  .chatbot-widget {
    display: flex;
    flex-direction: column;
    max-height: 590px;
    width: 480px;
    right: 15px;
    height: 72%;
    bottom: 5%;
    position: fixed;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 2px 10px 1px #b5b5b5;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    z-index: 999;
    font-weight: 400;
    background: #f7f8f9;
    display:none;
  }

  .chatbot-header {
    height: 60px;
    background-color: #388557;
    border-radius: 10px 10px 0px 0px;
    padding: 5px;
    font-size: 20px;
  }

  .chatbot-canvas {
    width:100%;
    padding: 5px;
    padding-top: 0px;
    margin-top: 5px;
    border-radius: 1px;
    overflow-y: scroll;
    transition: 0.2s;
    height: calc(100% - 140px);
  }

  .chatbot-msgs{
    margin-top: 10px;
  }

  div.chatbot-canvas::-webkit-scrollbar,
  div.chatbot-settings::-webkit-scrollbar,
  div.chatbot-bot-msg::-webkit-scrollbar {
    width: 4px;
    /* remove scrollbar space /
      background: transparent;
      / optional: just make scrollbar invisible */
  }

  /* Track */

  div.chatbot-canvas::-webkit-scrollbar-track,
  div.chatbot-settings::-webkit-scrollbar-track,
  div.chatbot-bot-msg::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 20px;
  }

  /* Handle */

  div.chatbot-canvas::-webkit-scrollbar-thumb,
  div.chatbot-settings::-webkit-scrollbar-thumb,
  div.chatbot-bot-msg::-webkit-scrollbar-thumb {
    background: #388557;
    border-radius: 5px;
  }

  /* Handle on hover */

  div.chatbot-canvas::-webkit-scrollbar-thumb:hover,
  div.chatbot-settings::-webkit-scrollbar-thumb:hover,
  div.chatbot-bot-msg::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  #chatbot-close,
  #minimize {
    cursor: pointer;
  }

  .chatbot-clearfix {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .chatbot-bot-msg {
    float: left;
    margin-top: 5px;
    background: #ffffff;
    box-shadow: 2px 5px 5px 1px #efeef5;
    border: 1px solid #ffffff;
    margin-left: 0.5em;
    padding: 0.6em 1em;
    border-radius: 1.5em;
    max-width: 90%;
    min-width: 25%;
    font-size: 16px;
    word-wrap: break-word;
    box-sizing: border-box;
    /* max-height: 250px;
    overflow-y: auto;*/
  }

  .chatbot-user-msg {
    animation: animateElement linear 0.2s;
    animation-iteration-count: 1;
    margin-top: 5px;
    word-wrap: break-word;
    padding: 0.6em 1em;
    float: right;
    margin-right: 0.5em;
    background: #388557;
    border: 1px solid #388557;
    color: #fff;
    border-radius: 1.5em;
    margin-bottom: 0.15em;
    font-size: 16px;
    max-width: 55%;
    min-width: 25%;
    line-height: 1.5em;
    box-sizing: border-box;
  }

  .chatbot-msg-card {
    padding-right: 15px;
  }

  .chatbot-suggestions {
    padding: 5px;
    width: 100%;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 2px 5px 5px 1px #dbdade;
  }

  .chatbot-keypad {
    display: flex;
    align-items:center;
    height: 45px;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }

  .chatbot-keypad > * {
      padding-right: 5px;
  }

  .chatbot-user-input {
    background: #f1f0f0;
    width: 100%;
    margin-left: 4%;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 1px #b5b5b5;
    border: 0;
    padding-left: 15px;
    height: 35px;
  }

  .chatbot-keypad input:focus {
    outline: none;
  }

  .chatbot-buttons-menu {
    padding: 5px;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .chatbot-list {
    padding: 5px;
    max-width: 100%;
  }

  .chatbot-menu-chips {
    border: 3px solid;
    display: inline-block;
    padding: .4em 1em;
    text-decoration: none;
    transition: all .4s ease;
    line-height: 1.4;
    margin-right: 3px;
    text-align: center;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 14px;
    box-shadow: 0 0.25rem 0.5rem rgb(1 1 1 / 25%);
    font-weight: 550;
    background-color: #388557;
    border-color: transparent;
    color: #fff;
    border-radius: 7px;
  }

  .chatbot-menu-chips:hover {
    box-shadow: 4px 6px 15px 1px rgba(33, 63, 88, 0.25);
  }

  @keyframes animateElement {
    0% {
      opacity: 0;
      transform: translate(0px, 10px);
    }

    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  .chatbot-img {
    width: 100%;
    padding: 2%;
  }

  #chatbot-logos-container {
    position: fixed;
    bottom: 55px;
    right: 16px;
    width: 100px;
    height: 12%;
    transition: 0.35s;
    transform: translate(400%);
    z-index: 999;
  }

  .chatbot-button-suggestions {
    background-color: transparent;
    box-shadow: none;
  }

  .jc-bs3-container {
    width: 30%;
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
    background: #388557;
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
    border-color: #388557 transparent transparent transparent;
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
    display: none;
  }

  .chatbot-activate-mini {
    color: #2ab6e9;
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
    background: #388557;
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
    display:flex;
    flex-direction: column;
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
    margin-right: 7px;
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
    font-size: 14px;
    height: 35px;
  }
  .yes-no-btn{
    padding: 8px;
    padding-left: 22px;
    padding-right: 22px;
  }
  .chatbot-bot-msg a {
    color: #388557;
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
  .chatbot-settings-label{
    font-weight:bold;
  }

  .chatbot-logo{
    cursor:pointer;
  }

  .limit-reached{
        box-shadow: 0px 0px 10px 2px #d89595;
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

      /* Configuration Variables */
      var crypto = window.crypto || window.msCrypto;
      var chatBotOpened = false;
      var micOn = false;
      var minimumFontSize = 12;
      var maximumFontSize = 22;
      var isClosed = false;
      var sessionStarted = false;
      let idPayload = null;
      var enableTextBotIcon = false;
      var fontSize = 16;
      var isNewSession = false;
      var firstMessageSent = false;
      var noUserInput = false;
      var msg = "";
      var botUserHistory = "";
      const BOT_USER_HISTORY = "user-bot-history";
      const CHATBOT_SESSION_ID = "chatbot-session-id";
      const CHATBOT_TAB_COUNT = "chatbot-tab-count";
      const INPUT_CHAR_LIMIT = 119;
      // const API_END_POINT =
      //   "https://chatbot.neurosoph.io:15005/webhooks/rest/webhook";
      const API_END_POINT =
        "https://aibot.neurosoph.com:5000/webhooks/rest/webhook";
      // const API_END_POINT =
      //   "https://561df67b866f.ngrok.io/webhooks/rest/webhook";

      $(document).ready(function () {
        $(".chatbot-welcome-image-container.chatbot-logo").focus();
        if (localStorage.getItem(CHATBOT_TAB_COUNT)) {
          localStorage.setItem(
            CHATBOT_TAB_COUNT,
            parseInt(localStorage.getItem(CHATBOT_TAB_COUNT)) + 1
          );
        } else {
          localStorage.setItem(CHATBOT_TAB_COUNT, 1);
        }

        if (getBotUserHistory()) {
          loadHistoryToChatbot(getBotUserHistory());
        }
        if (getBotSessionId()) {
          idPayload = getBotSessionId();
        } else {
          idPayload = getUid();
          setBotSessionId(idPayload);
        }
      });

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

      function getBotUserHistory() {
        let lSBotUserHistory = localStorage.getItem(BOT_USER_HISTORY);
        let sSBotUserHistory = sessionStorage.getItem(BOT_USER_HISTORY);
        if (lSBotUserHistory) {
          sessionStorage.setItem(BOT_USER_HISTORY, lSBotUserHistory);
          return lSBotUserHistory;
        } else if (sSBotUserHistory) {
          localStorage.setItem(BOT_USER_HISTORY, sSBotUserHistory);
          return sSBotUserHistory;
        }
        return null;
      }

      function getBotSessionId() {
        let lSChatBotSessionId = localStorage.getItem(CHATBOT_SESSION_ID);
        let sSChatBotSessionId = sessionStorage.getItem(CHATBOT_SESSION_ID);
        if (lSChatBotSessionId) {
          sessionStorage.setItem(CHATBOT_SESSION_ID, lSChatBotSessionId);
          return lSChatBotSessionId;
        } else if (sSChatBotSessionId) {
          localStorage.setItem(CHATBOT_SESSION_ID, sSChatBotSessionId);
          return sSChatBotSessionId;
        }
        return null;
      }

      function setBotSessionId(id) {
        localStorage.setItem(CHATBOT_SESSION_ID, id);
        sessionStorage.setItem(CHATBOT_SESSION_ID, id);
      }

      function setBotUserHistory() {
        localStorage.setItem(BOT_USER_HISTORY, $(".chatbot-msgs").html());
        sessionStorage.setItem(BOT_USER_HISTORY, $(".chatbot-msgs").html());
      }

      function loadHistoryToChatbot(history) {
        $(".chatbot-msgs").html(history);
        sessionStarted = true;
        $("#chatbot-keypad").attr("disabled", false);
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

          /* Show/hide voice tooltip on hover */
          $("#chatbot-mic-btn-off").hover(showTooltip, hideTooltip);

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

        var userResponse =
          `<p class="chatbot-user-msg" style="font-size:${fontSize}px" tabindex=0>` +
          val +
          ' </p><div class="chatbot-clearfix"></div>';
        userResponse = DOMPurify.sanitize(userResponse);
        setBotUserHistory();
        $(userResponse).appendTo(".chatbot-msgs").show("slow");
        $(".chatbot-user-input").val("");
        $(".chatbot-suggestions").remove();
        noUserInput = false;
        var botResponse =
          `<div class="chatbot-bot-msg" tabindex=0 aria-label="waiting for chatbot response" id="typing" style="font-size:${fontSize}px;border:0px;background:transparent;box-shadow:none">` +
          `<div id="chatbot-loading-msg">
                  <span class="chatbot-loading-dot"></span>
                  <span class="chatbot-loading-dot"></span>
                  <span class="chatbot-loading-dot"></span>
                  </div>` +
          '</div><div class="chatbot-clearfix"></div>';
        addBotResponse(botResponse, false);

        scrollToBottomOfResults();
        $(".chatbot-user-msg").last().nextAll(".chatbot-bot-msg:first").focus();
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
            var firstMessage = $("#chatbot-msgs").eq(0).children().length;
            if (firstMessage == 0) {
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

      /* Enable User Input */
      function enableUserInput() {
        setTimeout(function () {
          toggleUserInput(false);
          //   $(".chatbot-user-input").focus();
        }, 1500);
      }

      /* Add the bot response to the window */
      function addBotResponse(markup, store = true) {
        markup = DOMPurify.sanitize(markup, { ADD_ATTR: ["target"] });
        $(markup).appendTo(".chatbot-msgs").hide().fadeIn(50);
        setTimeout(() => {
          if (store) {
            setBotUserHistory();
          }
        }, 50);
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
            var markup =
              `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
              msg +
              '</p><div class="chatbot-clearfix"></div>';
            addBotResponse(markup);
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
                  var markup =
                    `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
                    data.text +
                    '</p><div class="chatbot-clearfix"></div>';
                  addBotResponse(markup);
                } else if (type == "bullet_points") {
                  var bulletPoints = data.bullet_points;
                  var markup = data.text + "<ul>";
                  bulletPoints.forEach((point) => {
                    markup += `<li>${point}</li>`;
                  });
                  markup += `</ul>`;
                  var botResponse =
                    `<div class="chatbot-bot-msg style="font-size:${fontSize}px;" overflow-scroll" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  addBotResponse(botResponse);
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
                  var botResponse =
                    `<div class="chatbot-bot-msg overflow-scroll" style="font-size:${fontSize}px;" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  addBotResponse(botResponse);
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
                      var anchorLink = `<a class="chatbot-links" href="${link}" >${textToReplace}</a>`;
                      linkData = linkData.replace(delimeter, anchorLink);
                    }
                  }

                  markup +=
                    linkData + '</p><div class="chatbot-clearfix"></div>';

                  addBotResponse(markup);
                } else if (type == "hyper_bullets") {
                  var hyperPoints = data.hyper_bullets;
                  var markup = data.text + "<ul>";
                  hyperPoints.forEach((point) => {
                    //   markup += `<li>${point}</li>`;
                    for (var prop in point) {
                      var link = point[prop][0];
                      var text = point[prop][1];
                      markup += `<li><a class="chatbot-links" href="${link}" >${text}</a></li>`;
                    }
                  });
                  markup += `</ul>`;
                  var botResponse =
                    `<div class="chatbot-bot-msg style="font-size:${fontSize}px;" overflow-scroll" tabindex=0>` +
                    markup +
                    '</div><div class="chatbot-clearfix"></div>';
                  addBotResponse(botResponse);
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
                  markup += `<a class="chatbot-links" href="${delimeter}" >${
                    val[i].text.split(delimeter)[1]
                  }</a> `;
                  markup += '</p><div class="chatbot-clearfix"></div>';
                  addBotResponse(markup);
                } else {
                  var markup =
                    `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
                    val[i].text +
                    '</p><div class="chatbot-clearfix"></div>';
                  addBotResponse(markup);
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
            $(".chatbot-user-msg")
              .last()
              .nextAll(".chatbot-bot-msg:first")
              .focus();
          }
        }, 500);
      }

      /* Send Messgae to Rasa Server */
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
        var expandedState = $("#chatbot-setting-container").attr(
          "aria-expanded"
        );
        expandedState = expandedState == "true" ? false : true;
        $("#chatbot-setting-container").attr("aria-expanded", expandedState);
        if ($(".chatbot-settings").hasClass("chatbot-hide-elem")) {
          $(".chatbot-settings").removeClass("chatbot-hide-elem");
        } else {
          $(".chatbot-settings").addClass("chatbot-hide-elem");
        }
      }

      /* Hide Chatbot */
      function hideChatBot() {
        chatBotOpened = false;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "none" });
        }, 150);
        handleChatBotHiding();
        $(".chatbot-settings").addClass("chatbot-hide-elem");
      }

      /* Show Chatbot */
      function showChatBot() {
        chatBotOpened = true;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "block" });
        }, 50);
        handleChatBotHiding();
      }

      /* Pre-checkss for Hiding Chatbot */
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
          // $(
          //   ' <div class="chatbot-msg-card"> <div class="chatbot-button-suggestions chatbot-suggestions"><div class="' +
          //     type +
          //     '"></div></div></diV>'
          // )
          //   .appendTo(".chatbot-msgs")
          //   .hide()
          //   .fadeIn(1000);
          // Loop through suggestions
          var markup = ``;
          for (let i = 0; i < suggLength; i++) {
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

            // $(markup).appendTo("." + type);
          }
          markup = ` <div class="chatbot-msg-card"> <div class="chatbot-button-suggestions chatbot-suggestions"><div class="${type}">${markup}</div></div></diV>`;
          $.when($(markup).appendTo(".chatbot-msgs").hide().fadeIn(50)).done(
            function () {
              setBotUserHistory();
            }
          );

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

      /* Increse Font Size */
      function increaseFontSize() {
        if (fontSize < maximumFontSize) {
          fontSize += 2;
          updateFontSize();
        }
      }

      /* Decrease Font Size */
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
          scrollToBottomOfResults();
        }, 50);
      }

      function clearHistory() {
        localStorage.removeItem(CHATBOT_SESSION_ID);
        localStorage.removeItem(BOT_USER_HISTORY);
        localStorage.removeItem(CHATBOT_TAB_COUNT);

        // sessionStorage.removeItem(CHATBOT_SESSION_ID);
        // sessionStorage.removeItem(BOT_USER_HISTORY);
        // sessionStorage.removeItem(CHATBOT_TAB_COUNT);
      }

      function showTooltip(e) {
        // $(".toolip").each(el => {
        //   el.addClass("chatbot-hide-elem");
        // });
        let id = this.dataset.tooltipid;
        setTimeout(() => {
          $(`#${id}`).removeClass("chatbot-hide-elem");
        }, 100);
      }

      function hideTooltip(e) {
        let id = this.dataset.tooltipid;
        setTimeout(() => {
          $(`#${id}`).addClass("chatbot-hide-elem");
        }, 100);
      }

      /* *** EVENT Listeners *** */
      $(window).on("beforeunload", function (e) {
        if (localStorage.getItem(CHATBOT_TAB_COUNT)) {
          let chatbotTabId = parseInt(localStorage.getItem(CHATBOT_TAB_COUNT));
          if (chatbotTabId == 1) {
            clearHistory();
          } else localStorage.setItem(CHATBOT_TAB_COUNT, chatbotTabId - 1);
        }
      });

      $("#chatbot-keypad").on("cut copy paste", function (e) {
        e.preventDefault();
      });

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

      /* Show increase font size tooltip on hover */
      $("#chatbot-increase-font").hover(showTooltip, hideTooltip);

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

      /* Show decrease font size tooltip on hover */
      $("#chatbot-decrease-font").hover(showTooltip, hideTooltip);

      /* Close Welcome Message */
      $(".close-welcome-message").click(function () {
        $("#chatbot-welcome-popup").addClass("chatbot-hide-elem");
        $(".close-welcome-message").addClass("chatbot-hide-elem");
        $(".chatbot-welcome-text").addClass("shift");
        $(".chatbot-logo img").addClass("center-chatbot-logo");
      });

      $(".close-welcome-message").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          $("#chatbot-welcome-popup").addClass("chatbot-hide-elem");
          $(".close-welcome-message").addClass("chatbot-hide-elem");
          $(".chatbot-welcome-text").addClass("shift");
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

      /* Show send message tooltip on hover */
      $("#chatbot-send-btn").hover(showTooltip, hideTooltip);

      /* Toggle chatbot */
      $(".chatbot-logo").click(function () {
        launchChatbot();
      });

      $(".chatbot-logo").keypress(function (e) {
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
      $("#chatbot-setting-container").hover(showTooltip, hideTooltip);

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

      /* Show minimize tooltip on hover */
      $("#minimize").hover(showTooltip, hideTooltip);

      /* Close Chatbot */
      $("#chatbot-close").click(function () {
        closeChatbot();
        clearHistory();
      });

      $("#chatbot-close").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          hideChatBot();
        }
      });

      /* Show close tooltip on hover */
      $("#chatbot-close").hover(showTooltip, hideTooltip);

      /* Prevent "/" in user input  */
      $("#chatbot-keypad").on("keydown", function (e) {
        if ($("#chatbot-keypad").val() === "" && e.keyCode == 191) {
          e.preventDefault();
        }
      });

      $("#chatbot-keypad").on("keyup", function (e) {
        if ($("#chatbot-keypad").val().length > INPUT_CHAR_LIMIT) {
          $("#chatbot-keypad").addClass("limit-reached");
        } else {
          $("#chatbot-keypad").removeClass("limit-reached");
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
          if (chatBotOpened) {
            $("#minimize").click();
          } else {
            $(".chatbot-logo").click();
          }
        }
        if (e.altKey && e.keyCode == 77) {
          if (chatBotOpened) {
            $("#minimize").click();
          }
        }
        if (e.altKey && e.keyCode == 67) {
          if (chatBotOpened) {
            $("#chatbot-close").click();
          }
        }

        if (isWebSpeechSupported()) {
          if (e.altKey && e.keyCode == 82) {
            if (micOn) {
              $("#chatbot-mic-btn-on").click();
            } else {
              $("#chatbot-mic-btn-off").click();
            }
          }
        }

        if (e.altKey && e.keyCode == 38) {
          if (fontSize < maximumFontSize) {
            fontSize += 2;
            updateFontSize();
          }
        }

        if (e.altKey && e.keyCode == 40) {
          if (fontSize > minimumFontSize) {
            fontSize -= 2;
            updateFontSize();
          }
        }

        if (e.altKey && e.keyCode == 73) {
          handleSettings();
        }
      }
      document.addEventListener("keyup", doc_keyUp, false);
      $(window).blur(function (e) {
        // if ($("#chatbot-widget").is(":visible")) hideChatBot();
      });
      $(window).focus(function (e) {
        let chatbotCanvas = $(".chatbot-msgs").html();
        if (
          chatbotCanvas.length > 0 &&
          localStorage.getItem(BOT_USER_HISTORY) == null
        ) {
          sessionStarted = false;
          clearHistory();
        }
        let chatbotHistory = getBotUserHistory();
        if (chatbotHistory) {
          if (chatbotHistory.length > chatbotCanvas.length) {
            loadHistoryToChatbot(chatbotHistory);
            scrollToBottomOfResults();
          }
        } else {
          if (chatbotCanvas.length > 0) {
            sessionStarted = false;
          }
        }
      });
    }
  );
}
