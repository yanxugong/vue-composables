<script setup lang="ts">
import { ElMessage } from "element-plus"
import { computed, ref } from "vue"
import { useUser } from "@/composables/useUser"

const { loginModel, user, login, loggedIn, logout } = useUser()
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <p v-if="loggedIn">
      Welcome {{ user?.username }},
      <a href="#" @click.prevent="logout">Logout</a>
    </p>
    <el-form v-if="!loggedIn" ref="form" :model="loginModel" label-width="80px">
      <el-form-item label="username">
        <el-input
          v-model="loginModel.username"
          placeholder="username"
        ></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input
          v-model="loginModel.password"
          type="password"
          placeholder="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
