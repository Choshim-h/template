<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <div class="login_title">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item prop="email">
        <el-input type="email" v-model="ruleForm.email" prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          prefix-icon="el-icon-s-goods"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
       callback();
    };
    return {
      ruleForm: {
        email: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid===false) {
           alert("error submit!!");
          return false;
        }
        console.log(valid)
        this.$router.push({ path: '/' });
      });
    }
  }
};
</script>

<style>
body,html,#app,.login{
    height: 100%;
}
.login{
    background-color: #2D3A4B;
}
.el-form{
    margin: 0px auto;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    text-align: center;
    box-sizing: border-box;
}
.login_title{
    /* margin-left: 100px; */
    color: #fff;
}

button{
    width: 100%;
}
</style>

