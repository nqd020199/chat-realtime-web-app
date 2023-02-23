<template>
  <div class="list-user">
    <div class="list-user_header">
      <div class="btn-box">
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-bars-progress"></i>
        </button>
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-language is-large"></i>
        </button>
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-user-plus is-large"></i>
        </button>
        <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-users is-large"></i>
        </button>
      </div>
      <div class="search-box">
        <input type="text" name="search-term" />
        <button type="submit">Search</button>
      </div>
      <div></div>
    </div>
    <div class="list-user_content">
      <div class="list-user_content_item">
        <div class="list-user_content_item_avatar">
          <img src="" alt="Avatar" />
        </div>
        <div class="list-user_content_item_info">
          <div class="list-user_content_item_info_name">
            <a href="#">John Doe</a>
          </div>
          <div class="list-user_content_item_info_status">
            <span class="label label-success">Online</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.list-user_header {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  box-shadow: 0px 5px 8px -5px #2c2c2c;
}

.list-user_header .btn-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list-user_header .btn-box button {
  border: none;
  background: none;
  font-size: 16px;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
  width: 40px;
}
.list-user_header .btn-box button:focus {
  box-shadow: 0px 5px 15px -5px #2c2c2c;
  background-color: #69a3e0;
}
.list-user_header .search-box {
  position: relative;
  padding: 10px 20px;
  font-family: "Open Sans", sans-serif;
  transition: all 0.3s;
  display: flex;
  border-radius: 6px;
}
.list-user_header .search-box > input {
  width: 100%;
  height: 30px;
  transition: all 0.3s;
  border-radius: 15px;
  background: #fafafa;
  border: none;
  padding: 8px 12px;
  border: 1px solid #69a3e0;
}
.list-user_header .search-box > button {
  width: fit-content;
  height: 30px;
  transition: all 0.3s;
  border-radius: 6px;
  background: #aeaeae9d;
  border: none;
  padding: 0 7px;
  margin-left: 6px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #69a3e0;
}
.list-user_header .search-box > button:focus {
  background: #69a3e0;
  color: #ffffff;
  box-shadow: 0px 5px 8px -5px #2c2c2c;
}
.list-user_header .search-box > input:focus {
  outline: none;
  box-shadow: 0px 5px 6px -5px #2c2c2c;
}
</style>
