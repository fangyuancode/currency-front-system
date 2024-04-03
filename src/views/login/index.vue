<template>
  <div class="login">
    <div class="common-layout ">
      <el-container>
        <el-header class="header-warpped">
          <div class="header-content">
            <h3>通用后台管理系统</h3>
            <span class="title">欢迎您登录</span>
          </div>
        </el-header>
        <el-main>
          <div class="content-wrap">
            <el-card class="box-card">
              <el-tabs v-model="activeName" class="demo-tabs" stretch>
                <el-tab-pane label="登录" name="first">
                  <el-form :model="loginData" label-width="auto" style="max-width: 600px" class="login-form">
                    <el-form-item label="账号">
                      <el-input v-model="loginData.account" placeholder="请输入账号" />
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="loginData.password" placeholder="请输入密码" />
                    </el-form-item>
                    <!-- 登录底部 -->
                    <div class="foot-wrapped">
                      <div class="forget-password">
                        <span>忘记密码</span>
                      </div>

                      <div class="footer-button">
                        <el-button type="primary" style="width: 200px;height: 40px;">登 录</el-button>
                      </div>

                      <div class="footer-go-register">
                        还没有账号？<span class="go-register">
                          马上注册
                        </span>
                      </div>
                    </div>

                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                  <el-form :model="loginData" label-width="auto" style="max-width: 600px" class="register-form">
                    <el-form-item label="账号">
                      <el-input v-model="registerData.account" placeholder="账号长度6-12位" />
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="registerData.password" placeholder="密码需要长度6-12位含字母数字" type="password" />
                    </el-form-item>
                    <el-form-item label="确认密码">
                      <el-input v-model="registerData.repassword" placeholder="请再次输入密码" type="password" />
                    </el-form-item>
                    <div class="footer-button">
                      <el-button type="primary" style="width: 200px;height: 40px;">注 册</el-button>
                    </div>
                  </el-form>

                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
        </el-main>
        <el-footer>
          <div class="footer-content">
            <div class="title">
              <span>掘金看月亮的方源</span> |
              <span>好好学习</span>
            </div>
          </div>

        </el-footer>
      </el-container>
    </div>
  </div>

</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
const activeName = ref("first");
interface formData {
  account: number;
  password: string;
  repassword?: string;
}
const loginData = <Ref<formData>>ref({
  account: null,
  password: "",
});
const registerData = <Ref<formData>>ref({
  account: null,
  password: "",
  repassword: "",
});
</script>



<style lang="scss" scoped>
.header-warpped {
  margin-top: 10px;
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 14px;
    }
  }
}
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/image/login-bg.svg");
}
.content-wrap {
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  align-items: center;
  align-items: center;
  // background-color: pink;
  .box-card {
    width: 400px;
    height: 330px;
    margin: 40px auto;
  }
}
.footer-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  margin-top: 20px;
}
.login-form {
  .foot-wrapped {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .forget-password {
      font-size: 14px;
      display: flex;
      flex-direction: row-reverse;
      color: #419eff;
    }
    .footer-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer-go-register {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      font-size: 14px;
      .go-register {
        color: #419eff;
      }
    }
  }
}
.register-form {
  .footer-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
:deep(.el-tabs__item) {
  font-size: 18px;
}
:deep(.el-input__inner) {
  height: 40px;
}
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
</style>