<template>
  <div class="login">
    <div class="box">
      <ul class="minbox">
        <li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      <ol class="maxbox">
        <li></li><li></li><li></li><li></li><li></li><li></li>
      </ol>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.5"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="remove"
      class="lizi">
    </vue-particles>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
      <el-form-item label="" prop="username">
        <el-input placeholder="账户/邮箱/手机号" v-model="loginForm.username" @keyup.enter.native="submitForm('loginForm')"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="submitLoading" @click="submitForm('loginForm')"><template v-if="submitLoading">登录中</template><template v-else>登录</template></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        validateCode: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入账户名称', trigger: 'change' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
        ],
      },
      submitLoading: false,
      parmas: {},
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitLoading = true;
          this.loginAction();
        }
      });
    },
    loginAction() {
      const params = Object.assign(this.loginForm, this.parmas, { channelcode: 'VUE' });
      this.$post('login.ajax', params).then(
        (res) => {
          if (res.rspCode === '000000') {
            this.$router.push('portal');
          } else if (res.rspCode === '999999') {
            this.$msg({ type: 'error', message: res.errorMsg });
            this.submitLoading = false;
          }
        },
      ).catch(() => {
        this.submitLoading = false;
      });
    },
  },
};
</script>

<style lang="scss">
  .login {
	  @keyframes move{
	    0%{
				-webkit-transform: rotateX(13deg) rotateY(0deg);
        transform: rotateX(13deg) rotateY(0deg);
			}
			100%{
				-webkit-transform:rotateX(13deg) rotateY(360deg);
        transform:rotateX(13deg) rotateY(360deg);
			}
    }
    // background: linear-gradient(top, #2df3ff, #00a8ff);
    background-color: #869ec1;
    width: 100%;
    height: 100%;
    position: relative;
		.box{
			width: 200px;
			height: 200px;
			position: absolute;
			transform-style: preserve-3d;
			transform: rotateX(13deg);
      animation: move 5s linear infinite;
      top: 35%;
      left: 20%;
      // transform: translateY(-50%);
		  .minbox{
			  width:100px;
			  height:100px;
			  position: absolute;
			  left:50px;
			  top:50px;
        transform-style:preserve-3d;
        li {
			    width:100px;
			    height:100px;
			    position: absolute;
			    left:0;
			    top:0;
        }
		    li:nth-child(1){
			    background: url(../../assets/images/01.svg) no-repeat 0 0;
			    transform:translateZ(50px);
		    }
		    li:nth-child(2){
			    background: url(../../assets/images/01.svg) no-repeat 0 0;
			    transform: rotateX(180deg) rotateZ(180deg) translateZ(50px);
		    }
		    li:nth-child(3){
			    background: url(../../assets/images/02.svg) no-repeat 0 0;
			    transform:rotateX(-90deg) translateZ(50px);
		    }
		    li:nth-child(4){
			    background: url(../../assets/images/01.svg) no-repeat 0 0;
			    transform:rotateX(90deg) translateZ(50px);
		    }
		    li:nth-child(5){
			    background: url(../../assets/images/03.svg) no-repeat 0 0;
			    transform:rotateY(-90deg) translateZ(50px);
		    }
		    li:nth-child(6){
			    background: url(../../assets/images/03.svg) no-repeat 0 0;
			    transform:rotateY(90deg) translateZ(50px);
		    }
      }
		  .maxbox{
			  width: 200px;
			  height: 200px;
			  position: absolute;
			  left: 0;
			  top: 0;
        transform-style: preserve-3d;
        li {
			    width: 200px;
			    height: 200px;
			    background: #fff;
			    border:1px solid #ccc;
			    position: absolute;
			    left: 0;
			    top: 0;
			    opacity: 0.2;
			    transition:all 1s ease;
        }
		    li:nth-child(1){
			    transform:translateZ(100px);
		    }
		    li:nth-child(2){
			    transform:rotateX(180deg) translateZ(100px);
		    }
		    li:nth-child(3){
			    transform:rotateX(-90deg) translateZ(100px);
		    }
		    li:nth-child(4){
			    transform:rotateX(90deg) translateZ(100px);
		    }
		    li:nth-child(5){
			    transform:rotateY(-90deg) translateZ(100px);
	      }
		    li:nth-child(6){
			    transform:rotateY(90deg) translateZ(100px);
		    }
		  }
    }
    .box:hover ol li:nth-child(1){
			transform:translateZ(300px);
		}
		.box:hover ol li:nth-child(2){
			transform:rotateX(180deg) translateZ(300px);
		}
		.box:hover ol li:nth-child(3){
			transform:rotateX(-90deg) translateZ(300px);
		}
		.box:hover ol li:nth-child(4){
			transform:rotateX(90deg) translateZ(300px);
		}
		.box:hover ol li:nth-child(5){
			transform:rotateY(-90deg) translateZ(300px);
		}
		.box:hover ol li:nth-child(6){
			transform:rotateY(90deg) translateZ(300px);
		}
    .el-form {
      width: 26%;
      position: absolute;
      top: 50%;
      left: 70%;
      transform: translate(-50%, -50%);
      padding-top: 22px;
      background-color:rgba(255,255,255,0.3);
      padding: 42px 60px 20px;
      .el-button{
        width:100%;
        font-size: 18px;
      }
      .el-input__inner {
        width:100%;
        font-size: 16px;
        font-weight: lighter;
      }
    }
  }
</style>


