<template>
  <div class="notification-container">
    <div class="wrapper">
      <div class="notifications">
        <div class="notifications__item">
          <div class="notifications__item__avatar">
            <img
              src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_1.jpg"
            />
          </div>

          <div class="notifications__item__content">
            <span class="notifications__item__title">Verdieu Steeve</span>
            <span class="notifications__item__message"
              >Just started following you</span
            >
          </div>

          <div>
            <div class="notifications__item__option delete js-option">
              <i class="bx bxs-trash-alt"></i>
            </div>
          </div>
        </div>

        <div class="notifications__item">
          <div class="notifications__item__avatar">
            <img
              src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_2.jpg"
            />
          </div>

          <div class="notifications__item__content">
            <span class="notifications__item__title">Mikes Miles</span>
            <span class="notifications__item__message"
              >Just liked your video story</span
            >
          </div>

          <div>
            <div class="notifications__item__option delete js-option">
              <i class="bx bxs-trash-alt"></i>
            </div>
          </div>
        </div>

        <div class="notifications__item">
          <div class="notifications__item__avatar">
            <img
              src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_3.jpg"
            />
          </div>

          <div class="notifications__item__content">
            <span class="notifications__item__title">Helen Saga</span>
            <span class="notifications__item__message"
              >Added you to a todos list for tomorrow</span
            >
          </div>

          <div>
            <div class="notifications__item__option delete js-option">
              <i class="bx bxs-trash-alt"></i>
            </div>
          </div>
        </div>

        <div class="notifications__item">
          <div class="notifications__item__avatar">
            <img
              src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_4.jpg"
            />
          </div>

          <div class="notifications__item__content">
            <span class="notifications__item__title">Sarah Sharp</span>
            <span class="notifications__item__message"
              >Just commented on your last post</span
            >
          </div>

          <div>
            <div class="notifications__item__option delete js-option">
              <i class="bx bxs-trash-alt"></i>
            </div>
          </div>
        </div>

        <div class="notifications__item">
          <div class="notifications__item__avatar">
            <img
              src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_5.jpg"
            />
          </div>

          <div class="notifications__item__content">
            <span class="notifications__item__title">John Lee</span>
            <span class="notifications__item__message"
              >Just started following you</span
            >
          </div>

          <div>
            <div class="notifications__item__option delete js-option">
              <i class="bx bxs-trash-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: #c9463d;
  color: black;
}

.wrapper {
  width: 480px;
  margin: 50px auto;
}

.notifications__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 105px;
  margin-bottom: 20px;
  padding: 0 20px;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 15px 20px 0px rgb(0, 0, 0, 0.2);

  transition: all 0.3s ease-in;
  cursor: pointer;
}

.notifications__item__avatar {
  width: 75px;
  height: 75px;
  overflow: hidden;
  margin-right: 20px;

  border-radius: 50%;
}

.notifications__item__avatar img {
  width: 100%;
  height: 100%;
}

.notifications__item__content {
  width: calc(100% - 105px);
}
.notifications__item__title,
.notifications__item__message {
  display: block;
}

.notifications__item__title {
  letter-spacing: 2px;
  font-family: "atvice", sans-serif;
  font-size: 17px;
}

.notifications__item__message {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #929292;
}

.notifications__item__option {
  width: 20px;
  height: 20px;
  margin: 8px 0;

  border-radius: 50%;
  color: white;
  opacity: 0;

  font-size: 10px;
  text-align: center;
  line-height: 20px;

  cursor: pointer;
  transition: all 0.2s;
}

.notifications__item__option.archive {
  background-color: #3dc98c;
}

.notifications__item__option.delete {
  background-color: #c93d4d;
}

/*
* Animation part
*/
.notifications__item:hover {
  background-color: #f7f7f7;
  transform: scale(0.95);
  box-shadow: 0px 5px 10px 0px rgb(0, 0, 0, 0.2);
}

.notifications__item:hover .notifications__item__option {
  opacity: 1;
}

.notifications__item.archive .notifications__item__title,
.notifications__item.delete .notifications__item__title {
  color: white;
}

.notifications__item.archive .notifications__item__message,
.notifications__item.delete .notifications__item__message {
  color: #f3f3f3;
}

.notifications__item.archive {
  background-color: #3dc98c;
  animation: archiveAnimation 1.5s cubic-bezier(0, 0, 0, 1.12) forwards;
  animation-delay: 0.6s;
}

.notifications__item.delete {
  background-color: #c93d4d;
  animation: deleteAnimation 1.5s cubic-bezier(0, 0, 0, 1.12) forwards;
  animation-delay: 0.6s;
}

@keyframes deleteAnimation {
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}
</style>
