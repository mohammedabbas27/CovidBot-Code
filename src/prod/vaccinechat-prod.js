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

      const CHATBOT_ICON_PATH = "https://www.mass.gov/media/2246916/download";
      var isChatbotIconMini = false;
      var CHATBOT_MINI_ICON_STATE = "chatbot-mini-icon-state";

      if (getChatbotIconState()) {
        isChatbotIconMini = true;
        // switchChatbotIcons();
      }
      var htmlMarkup = `
        <div class="chatbot-container">
        <div tabindex="0" role="button" id="chatbot-logo-mini" aria-label="Open vaccine chat window to ask a COVID-19 vaccine question" class="chatbot-logo-mini ${
          isChatbotIconMini ? "" : "chatbot-hide-elem"
        }">
            <img alt="" src="http://chatbot.neurosoph.com/chatbot/State-2-Icon_Mobile_01.png"/>
          </div>
          <div id="chatbot-logos-container ${
            !isChatbotIconMini ? "" : "chatbot-hide-elem"
          }">
                <div class="chatbot-welcome-text">
                  <div class="chatbot-inner-bubble">
                    <div style="display:flex;justify-content:center;">
                    <div tabindex=0 role="button" aria-label="Open vaccine chat window to ask a COVID-19 vaccine question" class="chatbot-welcome-image-container chatbot-logo">
                    <img aria-hidden="true" alt="" src="${CHATBOT_ICON_PATH}"/>
                    </div>
                    <div tabindex=0 role="button" aria-label="Close chat popup message" class="close-welcome-message"><i
                      class="material-icons">close</i></div>
                    </div>
                      <h5 tabindex=0 tabindex=-1 class="chatbot-logo" id="chatbot-welcome-popup">Have a COVID-19 vaccine question?</h5>
                      </div>
                </div>
              </div>
              <div class="chatbot-widget" id="chatbot-widget">
                <div class="chatbot-header">
                  <!--Add the name of the bot here -->
                  <span aria-label="Vaccine chat window" class="chatbot-logo-tagline" id="chatbot-logo-tagline" tabindex=0
                    >Vaccine Chat</span>
                  <div style="float:right;display:flex;">
                    <div data-tooltipid="tooltip-dec-font" role="button" tabindex=0 aria-label="Decrease chat font size" class="chatbot-action-btns" id="chatbot-decrease-font">
                    A<span aria-hidden="true">-</span>
                    </div>
                    <div id="tooltip-dec-font" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: 50px;left: 220px;" aria-hidden="true">Decrease chat font size</div>
                    <div data-tooltipid="tooltip-inc-font" role="button" tabindex=0 aria-label="Increase chat font size" class="chatbot-action-btns" id="chatbot-increase-font">
                    A<span aria-hidden="true">+</span>
                  </div>
                  <div id="tooltip-inc-font" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: 50px;left: 260px;" aria-hidden="true">Increase chat font size</div>

                  <div aria-label="Chat help shortcuts" data-tooltipid="tooltip-help" style="margin-top: 5px;" tabindex=0 aria-expanded="false" role="button" class="chatbot-action-btns" id="chatbot-setting-container" aria-describedby="chatbot-shortcuts-intsuctions">
                    <i class="material-icons">help</i>
                  </div>
                  <div aria-hidden="true" id="chatbot-shortcuts-intsuctions" class="visuallyHidden">
                      To browse the shortcut list, use TAB and SHIFT + TAB. You can leave the list with ESC anytime.
                  </div>
                  <div id="tooltip-help" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: 50px;left: 295px;" aria-hidden="true">Chatbot help shortcuts</div>
                    <div tabindex=-1 class="chatbot-settings chatbot-hide-elem" id="chatbot-settings">
                      <div>
                        <ul style="list-style: none;padding-left: 10px;">
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 id="first-shortcut" class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Open window:</span>
                              <span class="chatbot-settings-value">Alt + o</span>
                            </span>
                          </li>
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Increase font:</span>
                              <span class="chatbot-settings-value">Alt + <span class="visuallyHidden">up arrow</span> <span id="increase-font-icon" aria-hidden="true" class="material-icons"><span aria-hidden="true">trending_flat</span></span></span>
                            </span>
                          </li>
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Decrease font:</span>
                              <span class="chatbot-settings-value">Alt + <span class="visuallyHidden">down arrow</span><span id="decrease-font-icon" aria-hidden="true" class="material-icons"><span aria-hidden="true">trending_flat</span></span></span>
                            </span>
                          </li>
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Minimize window:</span>
                              <span class="chatbot-settings-value">Alt + m </span>
                            </span>
                          </li>
                          ${
                            isWebSpeechSupported()
                              ? '<li class="chatbot-shortcut-list"><span tabindex=0 class="chatbot-shortcuts-info"><span class="chatbot-settings-label">Turn off/Turn on Mic:</span><span class="chatbot-settings-value">Alt + r </span></span></li>'
                              : ""
                          }
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 id="second-last-shortcut" class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Close window:</span>
                              <span class="chatbot-settings-value">Alt + c </span>
                            </span>
                          </li>
                          <li class="chatbot-shortcut-list">
                            <span tabindex=0 id="last-shortcut" class="chatbot-shortcuts-info">
                              <span class="chatbot-settings-label">Close/Reopen help:</span>
                              <span class="chatbot-settings-value">Alt + i </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                    role="button"
                    tabindex=0
                    data-tooltipid="tooltip-minimize"
                    aria-label="Minimize chat"
                    class="chatbot-action-btns"
                    style="margin-top: 0px;padding-top:0px"
                    id="minimize"
                  >
                    <i class="material-icons">minimize</i>
                  </div>
                  <div id="tooltip-minimize" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: 50px;left: 370px;" aria-hidden="true">Minimize chat</div>
                  <div
                  role="button"
                  aria-label="Close Chat"
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
                  </div>
                  <div id="tooltip-close" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: 50px;left: 395px;" aria-hidden="true">End chat</div>
                  </div>
                  <div>
                    <span class="chatbot-sub-tagline">Ask a COVID-19 vaccine question</span>
                  </div>
                </div>
                <!--Chatbot contents goes here -->

                <div class="chatbot-canvas" id="chatbot-canvas">
                  <div class="chatbot-clearfix" aria-hidden="true"></div>
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

                    <span role="button"
                      data-tooltipid="tooltip-voice"
                      tabindex=0
                      aria-label="Turn on microphone"
                      class="chatbot-mic-btn"
                      id="chatbot-mic-btn"><span class="material-icons" style="font-size: 38px;margin-top: 16px;font-weight: bold;">mic</span></span>
                  <div id="tooltip-voice" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: -40px;left: 327px;" aria-hidden="true">Turn on microphone</div>
                    <span aria-label="Send message"
                    role="button"
                    data-tooltipid="tooltip-send-msg"
                    tabindex=0
                    id="chatbot-send-btn">
                    <span class="material-icons" style="margin-top: 14px;font-size: 34px;color: #388557;">send</span></span>
                    <div id="tooltip-send-msg" role="tooltip" tabindex="-1" class="tooltip chatbot-hide-elem" style="top: -40px;left: 370.72px;" aria-hidden="true">Send message</div>
                </div>
              </div>
              <!--bot widget -->
            </div>
        `;

      var cssMarkup = `
      .chatbot-mic-btn span{
        color:#388557;
      }
      .chatbot-mic-btn.mic-on span{
        color:#e82719;
      }
      .chatbot-links{
        text-decoration: underline;
        -webkit-text-decoration-color: #388557;
        text-decoration-color: #388557; 
        text-decoration-thickness: 20%; 
        transition:none;
        border: 2px solid transparent;
      }
      .chatbot-logo-mini{
        bottom: 0;
        position: fixed;
        right: -7px;
        z-index: 90;
        cursor: pointer;
        border: 2px solid transparent;
      }

      .chatbot-logo-mini img{
        height: 85px;
        max-width: 83%;
      }
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
              align-items: center;
              justify-content: center;
            }

            .chatbot-container *{
              outline:none;
            } 
            .chatbot-container *:focus{
              /*border: 2px solid #0078d7 !important;
              box-shadow: 0px 0px 0px 3px white, 0px 0px 0px 5px #0078d7;*/
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
            margin-left: 15px;
            border: 2px solid transparent;
            height: 100%;
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
            bottom: -42px;
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
        #chatbot-close{
          border:2px solid transparent;
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
          border: 2px solid transparent;
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
          border: 2px solid transparent;
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

        /*.chatbot-keypad input:focus {
          outline: none;
        }*/

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
          line-height: 1.4;
          margin-right: 7px;
          text-align: center;
          margin-bottom: 8px;
          cursor: pointer;
          font-size: 14px;
          box-shadow: 0 0.25rem 0.5rem rgb(1 1 1 / 25%);
          font-weight: 550;
          background-color: #388557;
          border-color: transparent;
          color: #fff;
          border-radius: 7px;
          text-align: left;
          border: 2px solid transparent;
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
          z-index: 899;
        }

        .chatbot-button-suggestions {
          background-color: transparent;
          box-shadow: none;
        }

        .jc-bs3-container {
          width: 30%;
        }

        #chatbot-send-btn:hover,
        #chatbot-mic-btn:hover {
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

        #chatbot-logo-tagline:focus, .chatbot-action-btns:focus, #chatbot-close:focus{
          border-color: transparent !important;
          outline: 1px solid white;
          outline-offset: 1px;
        }

        div#chatbot-loading-msg {
          position: relative;
          margin-left: auto;
          margin-right: auto;
        }
        .chatbot-links:focus, .chatbot-buttons-menu:focus, .chatbot-menu-chips:focus, .chatbot-user-msg:focus, #typing:focus, .chatbot-bot-msg:focus, div#chatbot-loading-msg:focus{
          border-color: transparent !important;
          box-shadow: 0px 0px 0px 2px white, 0px 0px 0px 4px #0078d7;
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
          border: 2px solid transparent;
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
          overflow-x: hidden;
          top: 65px;
        }

        #chatbot-logo-tagline{
          border: 2px solid transparent;
          color: white;
          margin-left: 5px
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
          border: 2px solid transparent;
        }


        .chatbot-settings-value {
          display:flex;
          padding-left: 5px;
          font-style: italic;
        }

        #chatbot-reset-bot i::before {
          color: white;
        }

        #chatbot-mic-btn,
        #chatbot-send-btn {
          font-size: 30px;
          padding-left: 3px;
          border: 2px solid transparent;
        }

        .chatbot-reset-bot {
          padding-left: 3px;
        }

        #chatbot-keypad {
          font-size: 14px;
          height: 35px;
          border: 2px solid transparent;
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
          margin-left: 50px;
          border: 2px solid transparent;
        }

        .limit-reached{
              box-shadow: 0px 0px 10px 2px #d89595;
         }

         @media (max-width: 540px){
          .close-welcome-message i{
            font-size:25px;
          }
          #chatbot-welcome-popup{
            font-size: 1.1rem;
          }
          .chatbot-welcome-text{
            max-width: 166px;
            bottom: -27%;
            left: -27%;
          }

          .chatbot-logo img{
            width:50px;
          }

          .chatbot-welcome-text.shift{
            left: 51%;
          }

          .chatbot-action-btns{
            margin-right: 0px;
          }
          #chatbot-logo-tagline{
            font-size: 16px;
          }
          .chatbot-logo-mini{
            right:-4px;
          }
          .chatbot-inner-bubble:after{
            right: 32px;
            bottom: -18px;
            border: 10px solid;
            border-color: #ebf3ee #ebf3ee transparent transparent;
          }
          .chatbot-welcome-text::after{
            right: 29px;
            bottom: -26px;
            border: 13px solid;
            border-color: #97c2a9 #97c2a9 transparent transparent;
          }
         }

         .chatbot-keypad *:focus, .chatbot-shortcuts-info *:focus, .chatbot-inner-bubble *:focus {
            outline: none !important;
            border-color: #0078d7 !important;
          }

          #chatbot-skip-link:not(:focus){
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            width: 240px;
          }
          #chatbot-skip-link:focus{
            display: block;
            margin: 0 auto;
            width: 240px;
            text-align: center;
          }
        `;
      $(document).focus(function (e) {});
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
      var isTouch = "ontouchstart" in window;
      const API_END_POINT =
        "https://chatbot.neurosoph.io:15005/webhooks/rest/webhook";

      var isChatbotOpen = false;
      var CHATBOT_WINDOW_OPEN_STATE = "chatbot-window-open-state";
      var CHATBOT_WINDOW_FONT_SIZE = "chatbot-window-font-size";

      $(document).ready(function () {
        var skipLinkMarkup = `<a href="#" tabindex="0" id="chatbot-skip-link" aria-label="skip to chatbot">Skip to chatbot</a>`;
        var fragment = document.createElement("div");
        fragment.innerHTML = skipLinkMarkup;
        try {
          $(".ma__header__hamburger").append(fragment);
          $("#chatbot-skip-link").click(function (e) {
            focusOnChatbotIcon();
          });

          $("#chatbot-skip-link").keypress((e) => {
            if (e.keyCode == 13 || e.keyCode == 32) {
              e.preventDefault();
              focusOnChatbotIcon();
            }
          });
        } catch (error) {}

        updateFontSizeFromState();

        if (getTabId()) {
          var tid = parseInt(getTabId()) + 1;
          setTabId(tid);
        } else {
          setTabId(1);
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
        if (getChatbotWindowState()) {
          launchChatbot();
        }
      });

      /* Animate the chatbot from right to left */
      if (!isChatbotIconMini) {
        document.querySelector("#chatbot-logos-container").style.transform =
          "translate(-20%)";
        setTimeout(() => {
          document.querySelector("#chatbot-logos-container").style.transform =
            "translate(20%)";
        }, 400);
      }

      msg =
        "Sorry, the chat is offline. Please try again later. You can also call <a href='tel:2-1-1'>2-1-1</a> to speak with a person about the vaccine, or try <a href='https://search.mass.gov/'>searching on mass.gov</a>";

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

      function getTabId() {
        let lSTabId = localStorage.getItem(CHATBOT_TAB_COUNT);
        let sSTabId = sessionStorage.getItem(CHATBOT_TAB_COUNT);
        if (lSTabId) {
          sessionStorage.setItem(CHATBOT_TAB_COUNT, lSTabId);
          return lSTabId;
        } else if (sSTabId) {
          localStorage.setItem(CHATBOT_TAB_COUNT, sSTabId);
          return sSTabId;
        }
        return null;
      }

      function setTabId(id) {
        localStorage.setItem(CHATBOT_TAB_COUNT, id);
        sessionStorage.setItem(CHATBOT_TAB_COUNT, id);
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

      function updateFontSizeFromState() {
        var fontSizeState = getChatbotFontSizeState();
        if (fontSizeState) {
          fontSize = fontSizeState;
        }
      }

      function loadHistoryToChatbot(history) {
        $(".chatbot-msgs").html(history);
        sessionStarted = true;
        $("#chatbot-keypad").attr("disabled", false);
      }

      /* Check if web speech api is suported by the browser if not disable(hide) the microphone */

      if (isWebSpeechSupported()) {
        // speech recognition API supported
        /* Toggle the mic on and off based on the user input */
        function toggleMic() {
          $("#chatbot-mic-btn").toggleClass("mic-on");
          if ($("#chatbot-mic-btn").hasClass("mic-on")) {
            $("#tooltip-voice").text("Speak now");
            $("#tooltip-voice").css({ left: "364px" });
            $("#chatbot-mic-btn").attr("aria-label", "Turn off microphone");
          } else {
            $("#tooltip-voice").text("Turn on microphone");
            $("#tooltip-voice").css({ left: "327px" });
            $("#chatbot-mic-btn").attr("aria-label", "Turn on microphone");
          }
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
            toggleMic();
            $("#tooltip-voice-on").removeClass("chatbot-hide-elem");
          });
          /* Send the message of the user upon the end of voice recognition */
          recognition.addEventListener("end", function () {
            toggleMic();
            sendMessage();
            micOn = false;
            $("#tooltip-voice-on").addClass("chatbot-hide-elem");
          });

          /* Disable(hide) the chatbot if there is any error  */
          recognition.addEventListener("error", function (e) {
            if (e.error === "not-allowed") {
              $("#chatbot-mic-btn").toggleClass("mic-on");
            }
            if (e.error != "no-speech") {
              $("#chatbot-mic-btn").toggleClass("mic-on");
            }
            setTimeout(() => {
              $("#chatbot-mic-btn").focus();
            }, 150);
          });

          /*  Turn on/off the voice recognition */
          $("#chatbot-mic-btn").click(function () {
            if (!$("#chatbot-mic-btn").hasClass("mic-on")) {
              recognition.start();
            } else {
              recognition.stop();
            }
          });

          $("#chatbot-mic-btn").keypress(function (e) {
            if (e.keyCode == 13 || e.keyCode == 32) {
              e.preventDefault();
              if (!$("#chatbot-mic-btn").hasClass("mic-on")) {
                recognition.start();
              } else {
                recognition.stop();
                setTimeout(() => {
                  $("#chatbot-mic-btn").focus();
                }, 150);
              }
            }
          });

          /* Show/hide voice tooltip on hover */
          $("#chatbot-mic-btn").hover(showTooltip, hideTooltip);
          $("#chatbot-mic-btn").focusin(showTooltip);
          $("#chatbot-mic-btn").focusout(hideTooltip);

          /* Stop listening the user */
          function stopListening() {
            recognition.stop();
          }
        } catch (exception) {
          $("#chatbot-mic-btn").toggleClass("chatbot-hide-elem");
        }
      } else {
        $("#chatbot-mic-btn").toggleClass("chatbot-hide-elem");
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
        setBotUserHistory();
        updateFontSizeState(fontSize);
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
        toggleUserInput(true);

        var userResponse =
          `<p class="chatbot-user-msg" style="font-size:${fontSize}px" tabindex=0>` +
          val +
          ' </p><div class="chatbot-clearfix" aria-hidden="true"></div>';
        userResponse = DOMPurify.sanitize(userResponse);
        setBotUserHistory();
        $(userResponse).appendTo(".chatbot-msgs").show("slow");
        $(".chatbot-user-input").val("");
        noUserInput = false;
        var botResponse =
          `<div class="chatbot-bot-msg" role="alert" aria-label="waiting for chatbot response" id="typing" style="font-size:${fontSize}px;border:0px;">` +
          `<div id="chatbot-loading-msg">
                        <span class="chatbot-loading-dot"></span>
                        <span class="chatbot-loading-dot"></span>
                        <span class="chatbot-loading-dot"></span>
                        </div>` +
          '</div><div class="chatbot-clearfix" aria-hidden="true"></div>';
        addBotResponse(botResponse, false);
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
        }, 1500);
      }

      /* Add the bot response to the window */
      function addBotResponse(markup, store = true) {
        markup = DOMPurify.sanitize(markup, { ADD_ATTR: ["target"] });
        $(markup).appendTo(".chatbot-msgs").hide().fadeIn(0);
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
            msg =
              "Sorry, the chat is offline. Please try again later. You can also call <a href='tel:2-1-1'>2-1-1</a> to speak with a person about the vaccine, or try <a href='https://search.mass.gov/'>searching on mass.gov</a>";
            var markup =
              `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
              msg +
              '</p><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
                    '</p><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
                    '</div><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
                    '</div><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
                    linkData +
                    '</p><div class="chatbot-clearfix" aria-hidden="true"></div>';

                  addBotResponse(markup);
                } else if (type == "hyper_bullets") {
                  var hyperPoints = data.hyper_bullets;
                  var markup = data.text + "<ul>";
                  hyperPoints.forEach((point) => {
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
                    '</div><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
                  markup +=
                    '</p><div class="chatbot-clearfix" aria-hidden="true"></div>';
                  addBotResponse(markup);
                } else {
                  var markup =
                    `<p class="chatbot-bot-msg" style="font-size:${fontSize}px;" tabindex=0>` +
                    val[i].text +
                    '</p><div class="chatbot-clearfix" aria-hidden="true"></div>';
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
            setTimeout(() => {
              $(".chatbot-user-msg")
                .last()
                .nextAll(".chatbot-bot-msg:first")
                .focus();
            }, 250);
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
        isChatbotOpen = false;
        updateChatbotWindowState(isChatbotOpen);
        chatBotOpened = false;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "none" });
          handleChatBotHiding();
        }, 100);
        $(".chatbot-settings").addClass("chatbot-hide-elem");
        // setTimeout(() => {
        //   if (isChatbotIconMini) {
        //     $(".chatbot-logo-mini").focus();
        //   } else {
        //     $(".chatbot-welcome-image-container.chatbot-logo").focus();
        //   }
        // }, 150);
        $("body").focus();
      }

      /* Show Chatbot */
      function showChatBot() {
        isChatbotOpen = true;
        updateChatbotWindowState(isChatbotOpen);
        chatBotOpened = true;
        setTimeout(() => {
          $("#chatbot-widget").css({ display: "block" });
        }, 50);
        handleChatBotHiding();
      }

      function updateChatbotIconState(state) {
        localStorage.setItem(CHATBOT_MINI_ICON_STATE, state);
        sessionStorage.setItem(CHATBOT_MINI_ICON_STATE, state);
      }

      function getChatbotIconState() {
        let lSChatbotMiniIconState = localStorage.getItem(
          CHATBOT_MINI_ICON_STATE
        );
        let sSChatbotMiniIconState = sessionStorage.getItem(
          CHATBOT_MINI_ICON_STATE
        );
        if (lSChatbotMiniIconState != null) {
          return lSChatbotMiniIconState == "true";
        } else if (sSChatbotMiniIconState != null) {
          localStorage.setItem(
            CHATBOT_MINI_ICON_STATE,
            sSChatbotMiniIconState == "true"
          );
          return sSChatbotMiniIconState == "true";
        }
        return null;
      }

      /* Pre-checkss for Hiding Chatbot */
      function handleChatBotHiding() {
        if (isChatbotIconMini) {
          $(".chatbot-logo-mini").toggleClass("chatbot-hide-elem");
        } else {
          $("#chatbot-logos-container").toggleClass("chatbot-hide-elem");
        }

        if ($(".chatbot-show-elem").length > 0) {
          stopListening();
        }
      }

      /* Suggestions */
      function addSuggestion(textToAdd, type) {
        setTimeout(function () {
          var suggestions = textToAdd;
          var suggLength = textToAdd.length;
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
              "</div><div/>";
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

      function updateFontSizeState(size) {
        localStorage.setItem(CHATBOT_WINDOW_FONT_SIZE, size);
        sessionStorage.setItem(CHATBOT_WINDOW_FONT_SIZE, size);
      }

      function getChatbotFontSizeState() {
        let lSChatbotWindowFontSize = parseInt(
          localStorage.getItem(CHATBOT_WINDOW_FONT_SIZE)
        );
        let sSChatbotWindowFontSize = parseInt(
          sessionStorage.getItem(CHATBOT_WINDOW_FONT_SIZE)
        );
        if (lSChatbotWindowFontSize) {
          return lSChatbotWindowFontSize;
        } else if (sSChatbotWindowFontSize) {
          localStorage.setItem(
            CHATBOT_WINDOW_FONT_SIZE,
            sSChatbotWindowFontSize
          );
          return sSChatbotWindowFontSize;
        }
        return null;
      }

      function updateChatbotWindowState(state) {
        localStorage.setItem(CHATBOT_WINDOW_OPEN_STATE, state);
        sessionStorage.setItem(CHATBOT_WINDOW_OPEN_STATE, state);
      }

      function getChatbotWindowState() {
        let tabCount = parseInt(localStorage.getItem(CHATBOT_TAB_COUNT));
        let lSChatbotWindowOpenState = localStorage.getItem(
          CHATBOT_WINDOW_OPEN_STATE
        );
        let sSChatbotWindowOpenState = sessionStorage.getItem(
          CHATBOT_WINDOW_OPEN_STATE
        );
        if (lSChatbotWindowOpenState != null) {
          return lSChatbotWindowOpenState == "true";
        } else if (
          sSChatbotWindowOpenState != null &&
          (tabCount <= 1 || isNaN(tabCount))
        ) {
          localStorage.setItem(
            CHATBOT_WINDOW_OPEN_STATE,
            sSChatbotWindowOpenState == "true"
          );
          return sSChatbotWindowOpenState == "true";
        }
        return null;
      }

      function launchChatbot() {
        if ($("#chatbot-msgs").text().length == 0) {
          sessionStarted = true;
          isNewSession = true;
          send("/greet", "message");
          firstMessageSent = true;
          $("#chatbot-msgs").empty();
          $(".chatbot-user-input").val("");
        }
        showChatBot();
        setTimeout(() => {
          scrollToBottomOfResults();
          $("#chatbot-logo-tagline").focus();
        }, 400);
      }

      function clearLocalStorage() {
        localStorage.removeItem(CHATBOT_SESSION_ID);
        localStorage.removeItem(BOT_USER_HISTORY);
      }

      function clearSessionHistory() {
        sessionStorage.removeItem(CHATBOT_SESSION_ID);
        sessionStorage.removeItem(BOT_USER_HISTORY);
      }

      function showTooltip(e) {
        if (!isTouch) {
          let id = this.dataset.tooltipid;
          setTimeout(() => {
            $(`#${id}`).removeClass("chatbot-hide-elem");
          }, 100);
        }
      }

      function hideTooltip(e) {
        if (!isTouch) {
          let id = this.dataset.tooltipid;
          setTimeout(() => {
            $(`#${id}`).addClass("chatbot-hide-elem");
          }, 100);
        }
      }

      function switchChatbotIcons() {
        $("#chatbot-logos-container").toggleClass("chatbot-hide-elem");
        $(".chatbot-logo-mini").toggleClass("chatbot-hide-elem");
      }

      function focusOnChatbotIcon() {
        setTimeout(() => {
          if (isChatbotIconMini) {
            $(".chatbot-logo-mini").focus();
          } else {
            $(".chatbot-welcome-image-container.chatbot-logo").focus();
          }
        }, 400);
      }

      /* *** EVENT Listeners *** */
      $(window).on("beforeunload", function (e) {
        if (getTabId()) {
          let chatbotTabId = parseInt(getTabId());
          if (chatbotTabId == 1) {
            clearLocalStorage();
            localStorage.removeItem(CHATBOT_TAB_COUNT);
            sessionStorage.removeItem(CHATBOT_TAB_COUNT);
            localStorage.removeItem(CHATBOT_MINI_ICON_STATE);
            localStorage.removeItem(CHATBOT_WINDOW_OPEN_STATE);
            localStorage.removeItem(CHATBOT_WINDOW_FONT_SIZE);
          } else {
            setTabId(chatbotTabId - 1);
          }
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
          // $("#dummy-shortcut").focus();
          e.preventDefault();
          $("#last-shortcut").focus();
        }
      });

      $("#last-shortcut").keydown(function (e) {
        if (e.keyCode == 9) {
          e.preventDefault();
          $("#first-shortcut").focus();
          // handleSettings();
        }
      });

      $("#chatbot-widget").keydown(function (e) {
        if (e.keyCode == 27) {
          if (!$("#chatbot-settings").hasClass("chatbot-hide-elem")) {
            handleSettings();
            setTimeout(() => {
              $("#chatbot-setting-container").focus();
            }, 150);
            return;
          }
          hideChatBot();
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
      $("#chatbot-increase-font").focusin(showTooltip);
      $("#chatbot-increase-font").focusout(hideTooltip);

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
      $("#chatbot-decrease-font").focusin(showTooltip);
      $("#chatbot-decrease-font").focusout(hideTooltip);

      /* Close Welcome Message */
      $(".close-welcome-message").click(function () {
        isChatbotIconMini = true;
        updateChatbotIconState(isChatbotIconMini);
        switchChatbotIcons();
        focusOnChatbotIcon();
      });

      $(".close-welcome-message").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          isChatbotIconMini = true;
          updateChatbotIconState(isChatbotIconMini);
          switchChatbotIcons();
          focusOnChatbotIcon();
        }
      });

      /* Send Button */
      $("#chatbot-send-btn").keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          sendData(e);
        }
        if (e.keyCode == 9) {
          e.preventDefault();
          $("#chatbot-logo-tagline").focus();
        }
      });

      $("#chatbot-send-btn").click(sendData);

      /* Show send message tooltip on hover */
      $("#chatbot-send-btn").hover(showTooltip, hideTooltip);
      $("#chatbot-send-btn").focusin(showTooltip);
      $("#chatbot-send-btn").focusout(hideTooltip);

      /* Toggle chatbot */
      $(".chatbot-logo,.chatbot-logo-mini").click(function () {
        launchChatbot();
      });

      $(".chatbot-logo,.chatbot-logo-mini").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          launchChatbot();
        }
      });

      /* Toggle Settings */
      $("#chatbot-setting-container").on("click", handleSettings);

      $("#chatbot-setting-container").keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          e.preventDefault();
          handleSettings();
        }
      });
      $("#chatbot-setting-container").hover(showTooltip, hideTooltip);
      $("#chatbot-setting-container").focusin(showTooltip);
      $("#chatbot-setting-container").focusout(hideTooltip);

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
      $("#minimize").focusin(showTooltip);
      $("#minimize").focusout(hideTooltip);

      /* Close Chatbot */
      $("#chatbot-close").click(function () {
        isChatbotOpen = false;
        updateChatbotWindowState(isChatbotOpen);
        closeChatbot();
        clearLocalStorage();
        sessionStorage.removeItem(BOT_USER_HISTORY);
      });

      $("#chatbot-close").keypress(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
          e.preventDefault();
          isChatbotOpen = false;
          updateChatbotWindowState(isChatbotOpen);
          closeChatbot();
          clearLocalStorage();
          sessionStorage.removeItem(BOT_USER_HISTORY);
        }
      });

      /* Show close tooltip on hover */
      $("#chatbot-close").hover(showTooltip, hideTooltip);
      $("#chatbot-close").focusin(showTooltip);
      $("#chatbot-close").focusout(hideTooltip);

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
      });

      var specifiedElement = document.getElementById("chatbot-settings");

      //I'm using "click" but it works with any event
      $("#chatbot-widget").on("click", function (event) {
        var isClickInside = specifiedElement.contains(event.target);

        if (!isClickInside) {
          //the click was outside the specifiedElement, do something
          if (event.target.closest("#chatbot-setting-container")) {
            return;
          }
          if (!specifiedElement.classList.contains("chatbot-hide-elem")) {
            specifiedElement.classList.add("chatbot-hide-elem");
          }
        }
      });

      // define a handler
      function doc_keyUp(e) {
        // this would test for whichever key is 40 and the ctrl key at the same time
        if (e.altKey && e.keyCode == 79) {
          if (!chatBotOpened) {
            launchChatbot();
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
              $("#chatbot-mic-btn").click();
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
      $(window).blur(function (e) {});
      $(window).focus(function (e) {
        let a = getChatbotWindowState();
        updateFontSizeFromState();
        if (getChatbotIconState() && !isChatbotIconMini) {
          isChatbotIconMini = true;
          switchChatbotIcons();
        }
        if (getChatbotWindowState()) {
          if (!isChatbotOpen) {
            showChatBot();
            setTimeout(() => {
              scrollToBottomOfResults();
            }, 50);
          }
        } else {
          if (isChatbotOpen) {
            hideChatBot();
          }
        }
        let chatbotCanvas = $(".chatbot-msgs").html();
        if (getBotSessionId()) {
          idPayload = getBotSessionId();
        } else {
          idPayload = getUid();
          setBotSessionId(idPayload);
        }
        if (
          chatbotCanvas.length > 0 &&
          localStorage.getItem(BOT_USER_HISTORY) == null
        ) {
          sessionStarted = false;
          $("#chatbot-msgs").empty();
          return;
        }
        let chatbotHistory = getBotUserHistory();
        if (chatbotHistory) {
          if (chatbotHistory.length > 0) {
            loadHistoryToChatbot(chatbotHistory);
            scrollToBottomOfResults();
          }
        } else {
          if (chatbotCanvas.length > 0) {
            sessionStarted = false;
            $("#chatbot-msgs").empty();
          }
        }
      });
    }
  );
}
