<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="cart">
                <div class="cart-body">
                    <img class="mx-auto d-block" src="../assets/icon.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" class="form-control" v-model="confirmPassword">
                        </div>
                        <button class="btn btn-block btn-success" type="submit">注册</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                email:"",
                password:"",
                confirmPassword:""
            }
        },
        methods:{
            onSubmit() {
                console.log(111);
            }
        }
    }
</script>