<!-- Author@ISSEI MIYAMOTO -->

<template>
  <div class="drawer">
    <input type="checkbox" id="drawer-check" class="drawer-hidden" />
    <label for="drawer-check" class="drawer-open">
      <span></span>
    </label>

    <div class="drawer-content">
      <div class="tab-wrap">
        <input
          id="TAB-01"
          type="radio"
          name="TAB"
          class="tab-switch"
          checked="checked"
        />
        <label class="tab-label" for="TAB-01">ルーム情報</label>
        <div class="tab-content">
          <div class="content-container">
            <div class="participant-container">
              <p class="participant-title">参加者一覧</p>

              <div class="members">
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>Ryo Omae</p>
                </div>
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>Meisho Kanaomi</p>
                </div>
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>Ryota Watanabe</p>
                </div>
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>Tomoharu Yanase</p>
                </div>
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>Kota Yukawa</p>
                </div>
                <div class="member-container">
                  <img src="../assets/Okinawa.jpg" />
                  <p>ISSEY MIYAMOTO</p>
                </div>
              </div>
            </div>

            <div class="chara-container">
              <p>文字サイズ</p>

              <div class="font-container">
                <button type="button" class="bigger btn">大</button>
                <button type="button" class="smaller btn">小</button>
              </div>
            </div>

            <div class="tourID-container">
              <p class="id-title">ツアーID</p>

              <div class="id-wrapper">
                <p>xxxxxxxxxxx</p>
              </div>
              <button class="remove-btn">退出する</button>
            </div>
          </div>
        </div>
        <input id="TAB-02" type="radio" name="TAB" class="tab-switch" />
        <label class="tab-label" for="TAB-02">チャット情報</label>
        <div class="tab-content">
          <div class="chat-container">
            <div class="messages-container">
              <div class="message">
                <div class="user-name">test user</div>
                <div class="message-content">これでええかな？</div>
              </div>
              <div class="message">
                <div class="user-name">test user</div>
                <div class="message-content">これでええかな？</div>
              </div>
              <div class="message">
                <div class="user-name">test user</div>
                <div class="message-content">これでええかな？</div>
              </div>
            </div>
            <div class="send-container">
              <textarea
                cols="1"
                rows="1"
                placeholder="メッセージを送信"
              ></textarea>
              <button>送信</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.tab-wrap {
  background: White;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 0 0;
}

.tab-label {
  color: Gray;
  cursor: pointer;
  flex: 1;
  font-weight: bold;
  order: -1;
  padding: 12px 24px;
  position: relative;
  text-align: center;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  font-size: 12px;
}

.tab-label:hover {
  background: rgba(0, 191, 255, 0.1);
}

.tab-switch:checked + .tab-label {
  color: DeepSkyBlue;
}

.tab-label::after {
  background: DeepSkyBlue;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: translateX(100%);
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s 80ms;
  width: 100%;
  z-index: 1;
}

.tab-switch:checked ~ .tab-label::after {
  transform: translateX(-100%);
}

.tab-switch:checked + .tab-label::after {
  opacity: 1;
  transform: translateX(0);
}

.tab-content {
  height: 0;
  opacity: 0;
  padding: 0;
  pointer-events: none;
  transform: translateX(-30%);
  transition: transform 0.3s 80ms, opacity 0.3s 80ms;
  width: 100%;
}

.tab-switch:checked ~ .tab-content {
  transform: translateX(30%);
}

.tab-switch:checked + .tab-label + .tab-content {
  height: auto;
  opacity: 1;
  order: 1;
  pointer-events: auto;
  transform: translateX(0);
}

.tab-wrap::after {
  content: "";
  height: 20px;
  order: -1;
  width: 100%;
  border-top: solid 0.5px gainsboro;
}

.tab-switch {
  display: none;
}

.drawer-hidden {
  display: none;
}

.drawer-open {
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  cursor: pointer;
}

.drawer-open span,
.drawer-open span:before,
.drawer-open span:after {
  content: "";
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #333;
  transition: 0.5s;
  position: absolute;
}

.drawer-open span:before {
  bottom: 8px;
}

.drawer-open span:after {
  top: 8px;
}

#drawer-check:checked ~ .drawer-open span {
  background: rgba(255, 255, 255, 0);
}

#drawer-check:checked ~ .drawer-open span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#drawer-check:checked ~ .drawer-open span::after {
  top: 0;
  transform: rotate(-45deg);
}

.drawer-content {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 80px;
  left: 100%;
  z-index: 99;
  background: #fff;
  transition: 0.5s;
}

#drawer-check:checked ~ .drawer-content {
  left: 80%;
}

.drawer-content {
  padding: 0;
  width: 360px;
  height: 720px;
  border: solid 1px gray;
  border-radius: 5px;
}

.content-container {
  padding: 0;
  width: 90%;
}

.participant-title {
  padding-top: 24px;
  padding-bottom: 8px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
  font-weight: bold;
}

.member-container {
  padding: 0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 16px;
}

.member-container img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 16px;
}

.members {
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;
}

.member-container p {
  margin: 0;
  font-size: 12px;
}

.chara-container {
  height: 120px;
}

.chara-container button {
  font-size: 16px;
}

.chara-container p {
  padding-bottom: 8px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
  font-weight: bold;
}

.font-container {
  padding: 0;
  text-align: center;
  align-content: center;
}

.btn {
  width: 45%;
  height: 24px;
  border-radius: 2px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  font-size: 12px;
  border: 1px solid gray;
}

.bigger {
  font-weight: bold;
}

.id-title {
  font-weight: bold;
  padding-bottom: 8px;
  margin-bottom: 24px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
}

.id-wrapper {
  width: 100%;
  padding: 0;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.id-wrapper p {
  font-size: 12px;
  padding: 0;
  margin: 0;
}

.remove-btn {
  width: 100%;
  padding: 0;
  margin-top: 64px;
  text-align: center;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(255, 56, 92, 1);
  font-size: 14px;
  color: white;
  font-weight: bold;
}

.chat-container {
  padding: 0;
  height: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.messages-container {
  padding: 0;
  height: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.send-container {
  padding: 0;
  height: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.send-container textarea {
  font-size: 12px;
  width: 75%;
  margin-left: 5%;
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
  border: none;
  border-bottom: solid 1px darkgray;
  resize: none;
}

.send-container textarea:focus {
  outline: none;
  border-bottom: solid 2px deepskyblue;
}

.send-container button {
  width: 21%;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  height: 32px;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  background-color: deepskyblue;
  /* padding-top: 6px; */
}

.message {
  padding: 0;
  margin-bottom: 12px;
}

.user-name,
.message-content {
  font-size: 12px;
}
</style>

<script></script>
