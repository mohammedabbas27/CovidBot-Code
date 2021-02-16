"use strict";

/* Load Jquery */
(function () {
  var script = document.createElement("SCRIPT");
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
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
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.2.6/purify.min.js", function () {
    /* Load Google Material Icons Stylesheet */
    $("head").append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>');
    /* Load Google Fonts(Roboto) stylesheet */

    $("head").append('<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu&display=swap"rel="stylesheet"/>');
    var CHATBOT_ICON_PATH = "https://aibot.neurosoph.com:5000/Chatbot_Icon_01-Green.png";
    var htmlMarkup = "\n  <div class=\"chatbot-container\">\n    <div id=\"chatbot-logos-container\">\n          <div class=\"chatbot-welcome-text\">\n            <div class=\"chatbot-inner-bubble\">\n              <div style=\"display:flex;\">\n              <div tabindex=0 role=\"button\" aria-label=\"Covid-19 Chatbot Icon\" class=\"chatbot-welcome-image-container chatbot-logo\">\n              <img aria-hidden=\"true\" src=\"".concat(CHATBOT_ICON_PATH, "\"/>\n              </div>\n              <div class=\"close-welcome-message\"><i\n                class=\"material-icons\">close</i></div>\n              </div>\n                <h5 aria-hidden=\"true\" tabindex=-1 class=\"chatbot-logo\" id=\"chatbot-welcome-popup\">Have a COVID-19 vaccine question?</h5>\n                </div>\n          </div>\n        </div>\n\n        <div class=\"chatbot-widget\" id=\"chatbot-widget\">\n          <div class=\"chatbot-header\">\n            <!--Add the name of the bot here -->\n            <span aria-label=\"Vaccine chat Window\" id=\"chatbot-logo-tagline\" tabindex=0 style=\"color: white; margin-left: 5px\"\n              >Vaccine chat</span>\n            <div style=\"float:right;display:flex;\">\n              <span data-tooltipid=\"tooltip-dec-font\" role=\"button\" tabindex=0 aria-label=\"Decrease Chatbot Font Size\" class=\"chatbot-action-btns\" id=\"chatbot-decrease-font\">\n              A<span>-</span>\n              </span>\n              <div id=\"tooltip-dec-font\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: 40px auto auto 255px;\">Decrease font</div>\n              <span data-tooltipid=\"tooltip-inc-font\" role=\"button\" tabindex=0 aria-label=\"Increase Chatbot Font Size\" class=\"chatbot-action-btns\" id=\"chatbot-increase-font\">\n              A<span>+</span>\n            </span>\n            <div id=\"tooltip-inc-font\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: 40px auto auto 290px;\">Increase font</div>\n\n            <span tabindex=0 aria-label=\"Reset Chatbot\" title=\"Reset Chabot\" class=\"chatbot-action-btns chatbot-hide-elem\" id=\"chatbot-reset-bot\">\n              <i\n                title=\"Reset bot\"\n                class=\"fas fa-history chatbot-reset-bot\"\n                style=\"margin-top: 3px\"\n              ></i>\n            </span>\n\n            <span aria-label=\"Chatbot Help Shortcuts\" data-tooltipid=\"tooltip-help\" style=\"margin-top: 5px;\" tabindex=0 aria-expanded=\"false\" role=\"button\" class=\"chatbot-action-btns\" id=\"chatbot-setting-container\">\n              <i class=\"material-icons\">help</i>\n            </span>\n            <div id=\"tooltip-help\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: 40px auto auto 318px;\">Chatbot shortcuts</div>\n              <div tabindex=-1 class=\"chatbot-settings chatbot-hide-elem\" id=\"chatbot-settings\">\n                <div>\n                  <ul style=\"list-style: none;padding-left: 10px;\">\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 id=\"first-shortcut\" class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Close/reopen window:</span>\n                        <span class=\"chatbot-settings-value\">Alt + o</span>\n                      </span>\n                    </li>\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Increase font:</span>\n                        <span class=\"chatbot-settings-value\">Alt + <span id=\"increase-font-icon\" aria-label=\"up arrow\" class=\"material-icons\">trending_flat</span></span>\n                      </span>\n                    </li>\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Decrease font:</span>\n                        <span class=\"chatbot-settings-value\">Alt + <span id=\"decrease-font-icon\" aria-label=\"down arrow\" class=\"material-icons\">trending_flat</span></span>\n                      </span>\n                    </li>\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Minimize window:</span>\n                        <span class=\"chatbot-settings-value\">Alt + m </span>\n                      </span>\n                    </li>\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Close window:</span>\n                        <span class=\"chatbot-settings-value\">Alt + c </span>\n                      </span>\n                    </li>\n                    ").concat(isWebSpeechSupported() ? '<li class="chatbot-shortcut-list"><span tabindex=0 class="chatbot-shortcuts-info"><span class="chatbot-settings-label">Turn off/Turn on Mic:</span><span class="chatbot-settings-value">Alt + r </span></span></li>' : "", "\n                    <li class=\"chatbot-shortcut-list\">\n                      <span tabindex=0 id=\"last-shortcut\" class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Close/Reopen help:</span>\n                        <span class=\"chatbot-settings-value\">Alt + i </span>\n                      </span>\n                    </li>\n                    <li class=\"chatbot-hide-elem\">\n                      <span tabindex=0 class=\"chatbot-shortcuts-info\">\n                        <span class=\"chatbot-settings-label\">Reset Bot:</span>\n                        <span class=\"chatbot-settings-value\">Alt + q </span>\n                      </span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n              <span\n              role=\"button\"\n              tabindex=0\n              data-tooltipid=\"tooltip-minimize\"\n              aria-label=\"Minnimize Chatbot\"\n              class=\"chatbot-action-btns\"\n              style=\"margin-top: 0px;padding-top:0px\"\n              id=\"minimize\"\n            >\n              <i class=\"material-icons\">minimize</i>\n            </span>\n            <div id=\"tooltip-minimize\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: 41px auto auto 350px;\">Minimize chatbot</div>\n            <span\n            role=\"button\"\n            aria-label=\"Close Chatbot\"\n            data-tooltipid=\"tooltip-close\"\n            tabindex=0\n              style=\"\n                color: white;\n                margin-right: 5px;\n                margin-top: 5px;\n              \"\n              id=\"chatbot-close\"\n            >\n              <i class=\"material-icons\">close</i>\n            </span>\n            <div id=\"tooltip-close\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: 40px auto auto 374.72px;\">Close chatbot</div>\n            </div>\n            <div>\n              <span\n                title=\"Vaccine chat\"\n                class=\"chatbot-sub-tagline\"\n                >Ask a COVID-19 vaccine question\n              </span>\n            </div>\n          </div>\n          <!--Chatbot contents goes here -->\n\n          <div class=\"chatbot-canvas\" id=\"chatbot-canvas\">\n            <div class=\"chatbot-clearfix\"></div>\n            <div class=\"chatbot-msgs\" id=\"chatbot-msgs\" style=\"margin-top: 10px\"></div>\n          </div>\n\n          <!--user typing indicator -->\n          <div class=\"chatbot-keypad\">\n            <input\n              maxlength=\"120\"\n              type=\"text\"\n              id=\"chatbot-keypad\"\n              disabled\n              tabindex=0\n              class=\"chatbot-user-input browser-default\"\n              placeholder=\"Ask a COVID-19 vaccine question\"\n              autocomplete=\"off\"\n            />\n\n            <div class=\"chatbot-popup\">\n              <span role=\"button\"\n                data-tooltipid=\"tooltip-voice\"\n                tabindex=0\n                aria-label=\"Turn on Microphone\"\n                id=\"chatbot-mic-btn-off\"><span class=\"material-icons\" style=\"font-size: 38px;margin-top: 16px;color: #388557;font-weight: bold;\">mic</span></span>\n              <span class=\"chatbot-popuptext\" id=\"chatbot-myPopup\">Go on i'm Listening!</span>\n              <div\n                id=\"chatbot-mic-btn-on\"\n                tabindex=0\n                aria-label=\"Turn off Microphone\"\n                role=\"button\" >\n                <span class=\"material-icons chatbot-hide-elem\" style=\"font-size: 38px;margin-top: 10px;color: #e82719;font-weight: bold;\">mic</span>\n              </div>\n              </div>\n            <div id=\"tooltip-voice\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: -29px auto auto 327.72px;\">Chat with your voice</div>\n              <span aria-label=\"Send\"\n              role=\"button\"\n              data-tooltipid=\"tooltip-send-msg\"\n              tabindex=0\n              id=\"chatbot-send-btn\">\n              <span class=\"material-icons\" style=\"margin-top: 14px;font-size: 34px;color: #388557;\">send</span></span>\n            <div id=\"tooltip-send-msg\" role=\"tooltip\" tabindex=\"-1\" class=\"tooltip chatbot-hide-elem\" style=\"inset: -29px auto auto 357.72px;\">Send message</div>\n              <i\n              title=\"Reset bot\"\n              role=\"button\"\n              tabindex=0\n              class=\"fas fa-history fa-2x chatbot-reset-bot chatbot-hide-elem\"\n              style=\"cursor: pointer; margin-left: 3px; margin-top: 5px\"\n            ></i>\n          </div>\n        </div>\n        <!--bot widget -->\n      </div>\n  ");
    var cssMarkup = "\n\n      .tooltip{\n        position: absolute;\n        background: #555856;\n        padding: 5px;\n        border-radius: 5px;\n        color: white;\n        font-size: 14px;\n      }\n\n      .chatbot-logo img{\n        width:70px;\n        margin-left: 35px;\n      }\n      .center-chatbot-logo{\n        margin-left: 20px !important;\n        margin-right: 10px;\n      }\n      .chatbot-sub-tagline{\n        color: white;\n        margin-left: 5px;\n        font-size: small;\n        font-style: italic;\n        display: block;\n        white-space: pre;\n      }\n      .chatbot-inner-bubble:after {\n          content: ' ';\n          position: absolute;\n          width: 0;\n          height: 0;\n          left: auto;\n          right: 38px;\n          bottom: -20px;\n          border: 12px solid;\n          border-color: #ebf3ee #ebf3ee transparent transparent;\n          z-index: 2;\n      }\n      .chatbot-welcome-image-container{\n        display: flex;\n        flex-grow: 2;\n        align-items: center;\n        justify-content: center;\n      }\n      .chatbot-container *{\n        outline:none;\n      }\n\n      #increase-font-icon{\n        transform: rotate(270deg);\n      }\n      #decrease-font-icon{\n        transform: rotate(90deg);\n      }\n      .visuallyHidden {\n        border: 0;\n        clip: rect(0, 0, 0, 0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n    }\n    .chatbot-welcome-tagline{\n        margin: 8px;\n        margin-top: 35px;\n    }\n    .chatbot-container{\n        line-height: 1.6;\n    }\n    .close-welcome-message{\n      cursor:pointer;\n      display:flex;\n      margin-top:10px;\n    }\n\n    .close-welcome-message i{\n      font-size: 38px;\n      font-weight: 1000;\n    }\n    .chatbot-welcome-text {\n        max-width: 210px;\n        background: #ebf3ee;\n        color: #388557;\n        border-radius: 12px;\n        padding: 8px 0;\n        position: absolute;\n        z-index: 999;\n        bottom: 20%;\n        left: -76%;\n        margin-left: -80px;\n        font-size: 16px;\n        padding: 6px;\n        display: flex;\n        flex-direction: column;\n        box-shadow: 0 0.25rem 0.5rem rgb(1 1 1 / 50%);\n        animation:fadeWelcomeText1 0.5s 1;\n        -webkit-animation:fadeWelcomeText1 0.5s 1;\n        animation-fill-mode: forwards;\n        animation-delay:5s;\n        -webkit-animation-delay:5s; /* Safari and Chrome */\n        -webkit-animation-fill-mode: forwards;\n        border-radius: 40px;\n        border: 6px solid #97c2a9;\n    }\n\n    @keyframes fadeWelcomeText{\n      from {opacity :1;}\n      to {opacity :0;}\n  }\n\n  @-webkit-keyframes fadeWelcomeText{\n      from {opacity :1;}\n      to {opacity :0;}\n  }\n  .chatbot-welcome-text::after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: auto;\n      right: 30px;\n      bottom: -39px;\n      border: 20px solid;\n      border-color: #97c2a9 #97c2a9 transparent transparent;\n      border-bottom-right-radius: 10px;\n    }\n    .chatbot-welcome-text.shift{\n      left:0%;\n    }\n    #chatbot-welcome-popup{\n      margin: 8px;\n      margin-right: 10px;\n      color: #388557;\n      font-size: 18px;\n      font-weight: bold;\n      text-align: center;\n    }\n  .chatbot-bot-msg overflow-scroll {\n    height: 250px;\n    overflow-y: scroll;\n  }\n  .fa-paper-plane:before {\n    content: \"\\f1d8\";\n    color: #388557;\n  }\n\n  .chatbot-widget {\n    display: flex;\n    flex-direction: column;\n    max-height: 590px;\n    width: 480px;\n    right: 15px;\n    height: 72%;\n    bottom: 5%;\n    position: fixed;\n    border-radius: 10px 10px 10px 10px;\n    box-shadow: 0px 2px 10px 1px #b5b5b5;\n    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n    z-index: 999;\n    font-weight: 400;\n    background: #f7f8f9;\n    display:none;\n  }\n\n  .chatbot-header {\n    height: 60px;\n    background-color: #388557;\n    border-radius: 10px 10px 0px 0px;\n    padding: 5px;\n    font-size: 20px;\n  }\n\n  .chatbot-canvas {\n    width:100%;\n    padding: 5px;\n    padding-top: 0px;\n    margin-top: 5px;\n    border-radius: 1px;\n    overflow-y: scroll;\n    transition: 0.2s;\n    height: calc(100% - 140px);\n  }\n\n  .chatbot-msgs{\n    margin-top: 10px;\n  }\n\n  div.chatbot-canvas::-webkit-scrollbar,\n  div.chatbot-settings::-webkit-scrollbar,\n  div.chatbot-bot-msg::-webkit-scrollbar {\n    width: 4px;\n    /* remove scrollbar space /\n      background: transparent;\n      / optional: just make scrollbar invisible */\n  }\n\n  /* Track */\n\n  div.chatbot-canvas::-webkit-scrollbar-track,\n  div.chatbot-settings::-webkit-scrollbar-track,\n  div.chatbot-bot-msg::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 20px;\n  }\n\n  /* Handle */\n\n  div.chatbot-canvas::-webkit-scrollbar-thumb,\n  div.chatbot-settings::-webkit-scrollbar-thumb,\n  div.chatbot-bot-msg::-webkit-scrollbar-thumb {\n    background: #388557;\n    border-radius: 5px;\n  }\n\n  /* Handle on hover */\n\n  div.chatbot-canvas::-webkit-scrollbar-thumb:hover,\n  div.chatbot-settings::-webkit-scrollbar-thumb:hover,\n  div.chatbot-bot-msg::-webkit-scrollbar-thumb:hover {\n    background: #b30000;\n  }\n\n  #chatbot-close,\n  #minimize {\n    cursor: pointer;\n  }\n\n  .chatbot-clearfix {\n    margin-top: 2px;\n    margin-bottom: 2px;\n  }\n\n  .chatbot-bot-msg {\n    float: left;\n    margin-top: 5px;\n    background: #ffffff;\n    box-shadow: 2px 5px 5px 1px #efeef5;\n    border: 1px solid #ffffff;\n    margin-left: 0.5em;\n    padding: 0.6em 1em;\n    border-radius: 1.5em;\n    max-width: 90%;\n    min-width: 25%;\n    font-size: 16px;\n    word-wrap: break-word;\n    box-sizing: border-box;\n    /* max-height: 250px;\n    overflow-y: auto;*/\n  }\n\n  .chatbot-user-msg {\n    animation: animateElement linear 0.2s;\n    animation-iteration-count: 1;\n    margin-top: 5px;\n    word-wrap: break-word;\n    padding: 0.6em 1em;\n    float: right;\n    margin-right: 0.5em;\n    background: #388557;\n    border: 1px solid #388557;\n    color: #fff;\n    border-radius: 1.5em;\n    margin-bottom: 0.15em;\n    font-size: 16px;\n    max-width: 55%;\n    min-width: 25%;\n    line-height: 1.5em;\n    box-sizing: border-box;\n  }\n\n  .chatbot-msg-card {\n    padding-right: 15px;\n  }\n\n  .chatbot-suggestions {\n    padding: 5px;\n    width: 100%;\n    border-radius: 10px;\n    background: #ffffff;\n    box-shadow: 2px 5px 5px 1px #dbdade;\n  }\n\n  .chatbot-keypad {\n    display: flex;\n    align-items:center;\n    height: 45px;\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n  }\n\n  .chatbot-keypad > * {\n      padding-right: 5px;\n  }\n\n  .chatbot-user-input {\n    background: #f1f0f0;\n    width: 100%;\n    margin-left: 4%;\n    border-radius: 20px;\n    box-shadow: 0px 2px 10px 1px #b5b5b5;\n    border: 0;\n    padding-left: 15px;\n    height: 35px;\n  }\n\n  .chatbot-keypad input:focus {\n    outline: none;\n  }\n\n  .chatbot-buttons-menu {\n    padding: 5px;\n    max-width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .chatbot-list {\n    padding: 5px;\n    max-width: 100%;\n  }\n\n  .chatbot-menu-chips {\n    border: 3px solid;\n    display: inline-block;\n    padding: .4em 1em;\n    text-decoration: none;\n    transition: all .4s ease;\n    line-height: 1.4;\n    margin-right: 3px;\n    text-align: center;\n    margin-bottom: 5px;\n    cursor: pointer;\n    font-size: 14px;\n    box-shadow: 0 0.25rem 0.5rem rgb(1 1 1 / 25%);\n    font-weight: 550;\n    background-color: #388557;\n    border-color: transparent;\n    color: #fff;\n    border-radius: 7px;\n  }\n\n  .chatbot-menu-chips:hover {\n    box-shadow: 4px 6px 15px 1px rgba(33, 63, 88, 0.25);\n  }\n\n  @keyframes animateElement {\n    0% {\n      opacity: 0;\n      transform: translate(0px, 10px);\n    }\n\n    100% {\n      opacity: 1;\n      transform: translate(0px, 0px);\n    }\n  }\n\n  .chatbot-img {\n    width: 100%;\n    padding: 2%;\n  }\n\n  #chatbot-logos-container {\n    position: fixed;\n    bottom: 55px;\n    right: 16px;\n    width: 100px;\n    height: 12%;\n    transition: 0.35s;\n    transform: translate(400%);\n    z-index: 999;\n  }\n\n  .chatbot-button-suggestions {\n    background-color: transparent;\n    box-shadow: none;\n  }\n\n  .jc-bs3-container {\n    width: 30%;\n  }\n\n  #chatbot-send-btn:hover,\n  #chatbot-mic-btn-on:hover,\n  #chatbot-mic-btn-off:hover {\n    cursor: pointer;\n  }\n\n  .chatbot-popup {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  /* The actual popup */\n\n  .chatbot-popup .chatbot-popuptext {\n    visibility: hidden;\n    width: 117px;\n    background: #388557;\n    color: #fff;\n    text-align: center;\n    border-radius: 12px;\n    padding: 8px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -80px;\n  }\n\n  /* Popup arrow */\n\n  .chatbot-popup .chatbot-popuptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 69%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #388557 transparent transparent transparent;\n  }\n\n  /* Toggle this class - hide and show the popup */\n\n  .chatbot-popup .chatbot-show-elem {\n    visibility: visible;\n    -webkit-animation: fadeIn 1s;\n    animation: fadeIn 1s;\n  }\n\n  /* Add animation (fade in the popup) */\n\n  @-webkit-keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n\n  .chatbot-popup .chatbot-show-elem {\n  }\n\n  .chatbot-hide-elem {\n    display: none;\n  }\n\n  .chatbot-activate-mini {\n    color: #2ab6e9;\n  }\n\n  .scroll {\n    overflow-y: scroll;\n    height: 300px;\n  }\n\n  .chatbot-clearfix {\n    clear: both;\n  }\n\n  div#chatbot-loading-msg {\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  div#chatbot-loading-msg .chatbot-loading-dot {\n    display: inline-block;\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    margin-right: 3px;\n    background: #388557;\n    animation: chatbot-loading-msg 1.3s linear infinite;\n  }\n\n  div#chatbot-loading-msg .chatbot-loading-dot:nth-child(2) {\n    animation-delay: -1.1s;\n  }\n\n  div#chatbot-loading-msg .chatbot-loading-dot:nth-child(3) {\n    animation-delay: -0.9s;\n  }\n\n  @keyframes chatbot-loading-msg {\n    0%,\n    60%,\n    100% {\n      transform: initial;\n    }\n\n    30% {\n      transform: translateY(-15px);\n    }\n  }\n\n  .chatbot-shortcuts-info {\n    display:flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n\n  .chatbot-shortcuts-info > * {\n    float: left;\n  }\n\n  .chatbot-settings {\n    right: 10%;\n    background-color: #ffffff;\n    border: 2px solid #c1ced4;\n    text-align: center;\n    border-radius: 12px;\n    padding: 8px 0;\n    position: absolute;\n    z-index: 1;\n    padding: 10px;\n    color: #000000;\n    text-align: left;\n    font-size: 16px;\n    max-height: 180px;\n    overflow-y: scroll;\n    top: 65px;\n  }\n\n  .chatbot-settings::before {\n    content: \"\";\n    position: absolute;\n    top: -16px;\n    left: 69%;\n    margin-left: 44px;\n    border-width: 7px;\n    border-style: solid;\n    border-color: transparent transparent #c1ced4 transparent;\n  }\n\n  .chatbot-action-btns {\n    color: white;\n    margin-right: 7px;\n    padding-top: 2px;\n    cursor: pointer;\n    visibility: visible;\n    padding-left: 5px;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n\n  .chatbot-settings-value {\n    display:flex;\n    padding-left: 5px;\n    font-style: italic;\n  }\n\n  #chatbot-reset-bot i::before {\n    color: white;\n  }\n\n  #chatbot-mic-btn-on,\n  #chatbot-mic-btn-off,\n  #chatbot-send-btn {\n    font-size: 30px;\n    padding-left: 3px;\n  }\n\n  .chatbot-reset-bot {\n    padding-left: 3px;\n  }\n\n  #chatbot-keypad {\n    font-size: 14px;\n    height: 35px;\n  }\n  .yes-no-btn{\n    padding: 8px;\n    padding-left: 22px;\n    padding-right: 22px;\n  }\n  .chatbot-bot-msg a {\n    color: #388557;\n  }\n\n  @media (max-width: 720px) {\n    .chatbot-widget {\n      max-width: calc(100% - 40px);\n    }\n  }\n\n  .fa-2x {\n      font-size: 32px;\n  }\n\n  .chatbot-bot-msg a {\n      font-weight: bold;\n  }\n  .chatbot-settings-label{\n    font-weight:bold;\n  }\n\n  .chatbot-logo{\n    cursor:pointer;\n  }\n\n  .limit-reached{\n        box-shadow: 0px 0px 10px 2px #d89595;\n   }\n  ";
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
    var idPayload = null;
    var enableTextBotIcon = false;
    var fontSize = 16;
    var isNewSession = false;
    var firstMessageSent = false;
    var noUserInput = false;
    var msg = "";
    var botUserHistory = "";
    var BOT_USER_HISTORY = "user-bot-history";
    var CHATBOT_SESSION_ID = "chatbot-session-id";
    var CHATBOT_TAB_COUNT = "chatbot-tab-count";
    var INPUT_CHAR_LIMIT = 119; // const API_END_POINT =
    //   "https://chatbot.neurosoph.io:15005/webhooks/rest/webhook";

    var API_END_POINT = "https://aibot.neurosoph.com:5000/webhooks/rest/webhook"; // const API_END_POINT =
    //   "https://561df67b866f.ngrok.io/webhooks/rest/webhook";

    $(document).ready(function () {
      $(".chatbot-welcome-image-container.chatbot-logo").focus();

      if (localStorage.getItem(CHATBOT_TAB_COUNT)) {
        localStorage.setItem(CHATBOT_TAB_COUNT, parseInt(localStorage.getItem(CHATBOT_TAB_COUNT)) + 1);
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

    document.querySelector("#chatbot-logos-container").style.transform = "translate(-20%)";
    setTimeout(function () {
      document.querySelector("#chatbot-logos-container").style.transform = "translate(20%)";
    }, 400);
    msg = "Sorry, the chatbot is offline. Please try again later.";
    /* Disable chatbot on language change */

    var observer = new MutationObserver(function (event) {
      if (document.documentElement.className.match("translated") && $(".goog-te-menu-value span:first").text() != "English") {
        $(".chatbot-container").addClass("chatbot-hide-elem");
      } else {
        $(".chatbot-container").removeClass("chatbot-hide-elem");
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false
    });

    function isWebSpeechSupported() {
      var agent = window.navigator.userAgent.toLowerCase();
      return agent.indexOf("chrome") > -1 && !!window.chrome && !(agent.indexOf("edg/") > -1) && location.protocol == "https:" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) ? true : false;
    }

    function getBotUserHistory() {
      var lSBotUserHistory = localStorage.getItem(BOT_USER_HISTORY);
      var sSBotUserHistory = sessionStorage.getItem(BOT_USER_HISTORY);

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
      var lSChatBotSessionId = localStorage.getItem(CHATBOT_SESSION_ID);
      var sSChatBotSessionId = sessionStorage.getItem(CHATBOT_SESSION_ID);

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
      var toggleMic = function toggleMic() {
        $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
        $("#chatbot-mic-btn-on").toggleClass("chatbot-hide-elem");
      };
      /* Initialize the Webspeech API */


      try {
        /* Stop listening the user */
        var _stopListening = function _stopListening() {
          recognition.stop();
        };

        window.SpeechRecognition = window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition || window.SpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.interimResults = true;
        /* Event listener for processing the result of the voice recognition */

        recognition.addEventListener("result", function (e) {
          var transcript = Array.from(e.results).map(function (result) {
            return result[0];
          }).map(function (result) {
            return result.transcript;
          }).join("");
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
          if (e.error != "no-speech") $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
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
      } catch (exception) {
        $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
      }
    } else {
      $("#chatbot-mic-btn-off").toggleClass("chatbot-hide-elem");
    }
    /* Generate a random Unique Id */


    function getUid() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
    /* Update Font Size */


    function updateFontSize() {
      $(".chatbot-bot-msg").each(function (i, el) {
        return el.setAttribute("style", "font-size:".concat(fontSize, "px"));
      });
      $(".chatbot-user-msg").each(function (i, el) {
        return el.setAttribute("style", "font-size:".concat(fontSize, "px"));
      });
      $(".chatbot-menu-chips").each(function (i, el) {
        return el.setAttribute("style", "font-size:".concat(fontSize, "px"));
      });
    }
    /* Update Font Settings */


    function updateFontSettings() {
      if (fontSize == minimumFontSize) {
        $("#chatbot-decrease-font").addClass("chatbot-hide-elem");
      } else {
        $("#chatbot-decrease-font").removeClass("chatbot-hide-elem");
      }

      if (fontSize == maximumFontSize) {
        document.querySelector("#chatbot-increase-font").addClass("chatbot-hide-elem");
      } else {
        $("#chatbot-increase-font").removeClass("chatbot-hide-elem");
      }
    }
    /* Validate User Input and prepare the user request */


    function sendData(e) {
      var text = DOMPurify.sanitize($(".chatbot-user-input").val(), {
        USE_PROFILES: {
          html: false
        }
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
      var userResponse = "<p class=\"chatbot-user-msg\" style=\"font-size:".concat(fontSize, "px\" tabindex=0>") + val + ' </p><div class="chatbot-clearfix"></div>';
      userResponse = DOMPurify.sanitize(userResponse);
      setBotUserHistory();
      $(userResponse).appendTo(".chatbot-msgs").show("slow");
      $(".chatbot-user-input").val("");
      $(".chatbot-suggestions").remove();
      noUserInput = false;
      var botResponse = "<div class=\"chatbot-bot-msg\" tabindex=0 aria-label=\"waiting for chatbot response\" id=\"typing\" style=\"font-size:".concat(fontSize, "px;border:0px;background:transparent;box-shadow:none\">") + "<div id=\"chatbot-loading-msg\">\n                  <span class=\"chatbot-loading-dot\"></span>\n                  <span class=\"chatbot-loading-dot\"></span>\n                  <span class=\"chatbot-loading-dot\"></span>\n                  </div>" + '</div><div class="chatbot-clearfix"></div>';
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
          sender: idPayload
        });
      } else {
        dataTobeSent = JSON.stringify({
          message: message,
          sender: idPayload
        });
      }

      $.ajax({
        url: API_END_POINT,
        type: "POST",
        contentType: "application/json",
        data: dataTobeSent,
        success: function success(data, textStatus) {
          var firstMessage = $("#chatbot-msgs").eq(0).children().length;

          if (firstMessage == 0) {
            if (data.length > 1) {
              data.pop();
            }
          }

          setBotResponse(data);
          enableUserInput();
        },
        error: function error(errorMessage) {
          setBotResponse("");
          enableUserInput();
        }
      });
    }
    /* Enable User Input */


    function enableUserInput() {
      setTimeout(function () {
        toggleUserInput(false); //   $(".chatbot-user-input").focus();
      }, 1500);
    }
    /* Add the bot response to the window */


    function addBotResponse(markup) {
      var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      markup = DOMPurify.sanitize(markup, {
        ADD_ATTR: ["target"]
      });
      $(markup).appendTo(".chatbot-msgs").hide().fadeIn(50);
      setTimeout(function () {
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
          var markup = "<p class=\"chatbot-bot-msg\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>") + msg + '</p><div class="chatbot-clearfix"></div>';
          addBotResponse(markup);
        } else {
          //if we get response from Rasa
          for (var i = 0; i < val.length; i++) {
            var data; //check if there is text message

            if (val[i].hasOwnProperty("custom")) {
              data = val[i].custom;
              var type = val[i].custom.type;

              if (type == "buttons") {
                addSuggestion(data.buttons, "chatbot-list");
              } else if (type == "age") {
                var markup = "<p class=\"chatbot-bot-msg\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>") + data.text + '</p><div class="chatbot-clearfix"></div>';
                addBotResponse(markup);
              } else if (type == "bullet_points") {
                var bulletPoints = data.bullet_points;
                var markup = data.text + "<ul>";
                bulletPoints.forEach(function (point) {
                  markup += "<li>".concat(point, "</li>");
                });
                markup += "</ul>";
                var botResponse = "<div class=\"chatbot-bot-msg style=\"font-size:".concat(fontSize, "px;\" overflow-scroll\" tabindex=0>") + markup + '</div><div class="chatbot-clearfix"></div>';
                addBotResponse(botResponse);
                addSuggestion(data.buttons, "chatbot-buttons-menu");
              } else if (type == "checkbox") {
                var checkboxes = data.checkbox;
                var markup = data.text + "<div><form class='diseases'>";
                checkboxes.forEach(function (box) {
                  markup += "<div style=\"display:flex;align-items:center\">\n                      <input type=\"checkbox\" id=\"".concat(box, "\" name=\"").concat(box, "\" value=\"").concat(box, "\">\n                      <label style=\"padding-left:5px;\" for=\"").concat(box, "\"> ").concat(box, "</label></div>\n                      ");
                });
                markup += "</form></div>";
                var botResponse = "<div class=\"chatbot-bot-msg overflow-scroll\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>") + markup + '</div><div class="chatbot-clearfix"></div>';
                addBotResponse(botResponse);
                var submitButton = [{
                  title: "Submit",
                  checkbox: true,
                  payload: JSON.stringify({
                    count: "%count"
                  })
                }];
                addSuggestion(submitButton, "chatbot-buttons-menu");
              } else if (type == "hyper_link") {
                var links = data.links;
                var linkData = data.text;
                var markup = "<p class=\"chatbot-bot-msg\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>");
                window.links = links;

                for (var _i = 0; _i < links.length; _i++) {
                  var delimeter = Object.keys(links[_i])[0];

                  for (var prop in links[_i]) {
                    var link = links[_i][prop][0];
                    var textToReplace = links[_i][prop][1];
                    var anchorLink = "<a class=\"chatbot-links\" href=\"".concat(link, "\" >").concat(textToReplace, "</a>");
                    linkData = linkData.replace(delimeter, anchorLink);
                  }
                }

                markup += linkData + '</p><div class="chatbot-clearfix"></div>';
                addBotResponse(markup);
              } else if (type == "hyper_bullets") {
                var hyperPoints = data.hyper_bullets;
                var markup = data.text + "<ul>";
                hyperPoints.forEach(function (point) {
                  //   markup += `<li>${point}</li>`;
                  for (var prop in point) {
                    var link = point[prop][0];
                    var text = point[prop][1];
                    markup += "<li><a class=\"chatbot-links\" href=\"".concat(link, "\" >").concat(text, "</a></li>");
                  }
                });
                markup += "</ul>";
                var botResponse = "<div class=\"chatbot-bot-msg style=\"font-size:".concat(fontSize, "px;\" overflow-scroll\" tabindex=0>") + markup + '</div><div class="chatbot-clearfix"></div>';
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
                var markup = "<p class=\"chatbot-bot-msg\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>");
                var delimeter = "";
                inputStr.forEach(function (str) {
                  if (str.indexOf("https") >= 0) {
                    delimeter = str;
                  }
                });
                markup += val[i].text.split(delimeter)[0];
                markup += "<a class=\"chatbot-links\" href=\"".concat(delimeter, "\" >").concat(val[i].text.split(delimeter)[1], "</a> ");
                markup += '</p><div class="chatbot-clearfix"></div>';
                addBotResponse(markup);
              } else {
                var markup = "<p class=\"chatbot-bot-msg\" style=\"font-size:".concat(fontSize, "px;\" tabindex=0>") + val[i].text + '</p><div class="chatbot-clearfix"></div>';
                addBotResponse(markup);
              }
            } //check if there is button message


            if (val[i].hasOwnProperty("buttons")) {
              if (val[i].hasOwnProperty("custom")) {
                data = JSON.parse(val[i].custom);
                var type = Object.keys(data)[0];
              }

              addSuggestion(val[i].buttons, "chatbot-buttons-menu");
            }
          }

          scrollToBottomOfResults();
          $(".chatbot-user-msg").last().nextAll(".chatbot-bot-msg:first").focus();
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
      var expandedState = $("#chatbot-setting-container").attr("aria-expanded");
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
      setTimeout(function () {
        $("#chatbot-widget").css({
          display: "none"
        });
      }, 150);
      handleChatBotHiding();
      $(".chatbot-settings").addClass("chatbot-hide-elem");
    }
    /* Show Chatbot */


    function showChatBot() {
      chatBotOpened = true;
      setTimeout(function () {
        $("#chatbot-widget").css({
          display: "block"
        });
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
        var suggLength = textToAdd.length; // $(
        //   ' <div class="chatbot-msg-card"> <div class="chatbot-button-suggestions chatbot-suggestions"><div class="' +
        //     type +
        //     '"></div></div></diV>'
        // )
        //   .appendTo(".chatbot-msgs")
        //   .hide()
        //   .fadeIn(1000);
        // Loop through suggestions

        var markup = "";

        for (var i = 0; i < suggLength; i++) {
          markup += "<div role=\"button\" style=\"font-size:".concat(fontSize, "px\" class=\"chatbot-menu-chips ").concat(suggestions[i].payload === "/yes" || suggestions[i].payload === "/no" ? "yes-no-btn" : "", "\" tabindex=\"0\" ");

          if (suggestions[i].checkbox) {
            markup += "checkbox=true";
          }

          markup += " data-payload='" + suggestions[i].payload + "'>" + suggestions[i].title + "</div>"; // $(markup).appendTo("." + type);
        }

        markup = " <div class=\"chatbot-msg-card\"> <div class=\"chatbot-button-suggestions chatbot-suggestions\"><div class=\"".concat(type, "\">").concat(markup, "</div></div></diV>");
        $.when($(markup).appendTo(".chatbot-msgs").hide().fadeIn(50)).done(function () {
          setBotUserHistory();
        });
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
      setTimeout(function () {
        $("#chatbot-logo-tagline").focus();
        scrollToBottomOfResults();
      }, 50);
    }

    function clearHistory() {
      localStorage.removeItem(CHATBOT_SESSION_ID);
      localStorage.removeItem(BOT_USER_HISTORY);
      localStorage.removeItem(CHATBOT_TAB_COUNT); // sessionStorage.removeItem(CHATBOT_SESSION_ID);
      // sessionStorage.removeItem(BOT_USER_HISTORY);
      // sessionStorage.removeItem(CHATBOT_TAB_COUNT);
    }

    function showTooltip(e) {
      // $(".toolip").each(el => {
      //   el.addClass("chatbot-hide-elem");
      // });
      var id = this.dataset.tooltipid;
      setTimeout(function () {
        $("#".concat(id)).removeClass("chatbot-hide-elem");
      }, 100);
    }

    function hideTooltip(e) {
      var id = this.dataset.tooltipid;
      setTimeout(function () {
        $("#".concat(id)).addClass("chatbot-hide-elem");
      }, 100);
    }
    /* *** EVENT Listeners *** */


    $(window).on("beforeunload", function (e) {
      if (localStorage.getItem(CHATBOT_TAB_COUNT)) {
        var chatbotTabId = parseInt(localStorage.getItem(CHATBOT_TAB_COUNT));

        if (chatbotTabId == 1) {
          clearHistory();
        } else localStorage.setItem(CHATBOT_TAB_COUNT, chatbotTabId - 1);
      }
    });
    $("#chatbot-keypad").on("cut copy paste", function (e) {
      e.preventDefault();
    });
    $(".chatbot-welcome-text").on("animationend webkitAnimationEnd", function () {
      $(".chatbot-welcome-text").addClass("chatbot-hide-elem");
    });
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

    $("#chatbot-increase-font").click(function (e) {
      increaseFontSize();
    });
    $("#chatbot-increase-font").keypress(function (e) {
      if (e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault();
        increaseFontSize();
      }
    });
    /* Show increase font size tooltip on hover */

    $("#chatbot-increase-font").hover(showTooltip, hideTooltip);
    /* Decrease Font Size */

    $("#chatbot-decrease-font").click(function (e) {
      decreaseFontSize();
    });
    $("#chatbot-decrease-font").keypress(function (e) {
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
        var diseaseCount = $(".diseases").eq($(".diseases").length - 1).find("input[type=checkbox]:checked").length;
        payload = payload.replace("%count", diseaseCount);
      }

      setUserResponse(text);
      send(payload, "message");
      $(".chatbot-suggestions").remove(); //delete the suggestions
    }); // define a handler

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
    $(window).blur(function (e) {// if ($("#chatbot-widget").is(":visible")) hideChatBot();
    });
    $(window).focus(function (e) {
      var chatbotCanvas = $(".chatbot-msgs").html();

      if (chatbotCanvas.length > 0 && localStorage.getItem(BOT_USER_HISTORY) == null) {
        sessionStarted = false;
        clearHistory();
      }

      var chatbotHistory = getBotUserHistory();

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
  });
}
