<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    methods: {
        ...mapActions(useAppStore, ['login']),
        async doLogin() {
            console.log("Do Login");
            this.login(this.form)
        }
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
}
</script>
<template >
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <h1>Login</h1>
                    <form @submit.prevent="doLogin">
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input v-model="form.username" type="text" id="form3Example3"
                                class="form-control form-control-lg" placeholder="Enter a valid email address" />
                            <label class="form-label" for="form3Example3">Email address</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input v-model="form.password" type="password" id="form3Example4"
                                class="form-control form-control-lg" placeholder="Enter password" />
                            <label class="form-label" for="form3Example4">Password</label>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;"> Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style >
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}

.h-custom {
    height: calc(100% - 73px);
}

@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>