<script>
export default {

}
</script>
<template >
    <div>
        <div class="registration-form">
            <form>
                <div class="container d-flex justify-content-center">
                    <h2>Tambah Akun</h2>
                </div>
                <hr>
                <div class="form-group">
                    <input type="text" class="form-control item" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control item" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="email" placeholder="Ketik Ulang Password">
                </div>
                <div class="form-group">
                    <select class="form-select" aria-label="Default select example" style="border-radius: 20px;">
                        <option selected>--Pilih Role --</option>
                        <option value="admin">Admin</option>
                        <option value="guru">Guru</option>
                        <option value="student">Murid</option>
                    </select>
                </div>
                <div class="form-group d-flex justify-content-end">
                    <button type="button" class="btn btn-block create-account">Create Account</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
body {
    background-color: #dee9ff;
}

.registration-form {
    padding: 50px 0;
}

.registration-form form {
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon {
    text-align: center;
    background-color: #5891ff;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item {
    border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account {
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media {
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons {
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a {
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.registration-form .social-icons a:hover {
    text-decoration: none;
    opacity: 0.6;
}

@media (max-width: 576px) {
    .registration-form form {
        padding: 50px 20px;
    }

    .registration-form .form-icon {
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
    }
}
</style>