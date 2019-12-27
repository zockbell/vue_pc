<template>
    <div class="loginwrap">
        <div class="logo"><img src="../../assets/images/pep.png" alt="人教数字"></div>

        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="name">
                <Input v-model="formValidate.name" size="large" placeholder="请输入用户名" />
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input type="password" v-model="formValidate.password" size="large" placeholder="请输入密码" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')" style="margin-left: -80px;">登录</Button>
                <Button style="margin-left: 10px">注册</Button>
            </FormItem>
        </Form>

    </div>
</template>

<script>
import { Login } from '@/api/http';
import Vue from 'vue';
import { Form, FormItem, Button, Input, Modal } from 'iview';
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.component('Modal', Modal);
Vue.prototype.$Modal = Modal;   // 全局引用$Modal，方便下边调用

export default {
    name: 'login',
    data() {
        return {
            showPopup: false,
            formValidate: {
                name: '',
                password: '',
                dev_id: '111',
                dev_name: '111',
                activeText: '账号或密码错误!',
            },
            ruleValidate: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });

            let param = null;
            // 账号或密码错误
            if (!this.formValidate.name || !this.formValidate.password) {
                this.formValidate.activeText = '账号或密码错误!';
                this.instance('warning');
                return;
            }

            if (!this.formValidate.dev_id) {
                this.formValidate.activeText = '请填写dev_id';
                this.instance('warning');
                return;
            }

            if (!this.formValidate.dev_name) {
                this.formValidate.activeText = '请填写dev_name';
                this.instance('warning');
                return;
            }

            param = {
                username: this.formValidate.name,
                pwd: this.formValidate.password,
                dev_id: this.formValidate.dev_id,
                dev_name: this.formValidate.dev_name,
            };

            Login(param)
            .then((res) => {
                if (res.errcode === '110') {
                    localStorage.setItem('access_token', res.access_token);
                    localStorage.setItem('user_id', res.user_info.user_id);
                    localStorage.setItem('name', res.user_info.name);
                    window.access_token = res.access_token;
                    window.user_id = res.user_info.user_id;
                    window.name = res.user_info.name;

                    // 登录成功后跳转
                    // this.$router.push({ name: "User" });
                    let redirect = this.$route.query.redirect;
                    if (!redirect) {
                        redirect = 'home';
                    }
                    this.$router.push({
                        path: '/' + redirect,
                    });

                } else if (res.errcode === '500482') {
                    this.instance('error');
                    this.activeText = '用户名或密码错误!';
                } else if (res.errcode === '500481') {
                    this.instance('error');
                    this.activeText = '用户不存在!';
                } else if (res.errcode === '500487') {
                    this.instance('error');
                    this.activeText = '设备数量超限!';
                } else {
                    this.activeText = res.errmsg;
                }
            })
            .catch((error) => {
                window.console.log(error);
            });
        },
        instance(type) {
            const title = '登录失败';
            const content = this.formValidate.activeText;
            switch (type) {
                case 'info':
                    this.$Modal.info({
                        title,
                        content,
                    });
                    break;
                case 'success':
                    this.$Modal.success({
                        title,
                        content,
                    });
                    break;
                case 'warning':
                    this.$Modal.warning({
                        title,
                        content,
                    });
                    break;
                case 'error':
                    this.$Modal.error({
                        title,
                        content,
                    });
                    break;
            }
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/styles/login";
</style>