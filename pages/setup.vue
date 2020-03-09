<template>
    <div>
        <div class="container" id="schedule" style="padding-top: 75px; min-height: 100vh">

            <div class="row">
                <div class="col-lg-12">
                    <h2 style="text-align: center">Complete Your Profile</h2>
                    <p>Please complete your profile by filling in the following information</p>
                    <form ref="infoForm" :action="`https://${this.$route.query['auth0_domain']}/continue?state=${this.$route.query['state'] || ''}`" method="post">
                        <div class="form-group">
                            <label for="firstNameInput">First Name</label>
                            <input type="text" class="form-control" id="firstNameInput" placeholder="First Name" v-model="firstName" v-on:keyup.enter="submitInfo">
                        </div>
                        <div class="form-group">
                            <label for="lastNameInput">Last Name</label>
                            <input type="text" class="form-control" id="lastNameInput" placeholder="Last Name" v-model="lastName" v-on:keyup.enter="submitInfo">
                        </div>
                        <input type="hidden" name="success" ref="successField">
                        <button type="button" class="btn btn-primary float-right" @click="submitInfo">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    export default {
        name: "setup",
        data() {
            return {
                firstName: "",
                lastName: "",
            }
        },
        head() {
            return {
                title: 'Account Setup' + process.env.pageTitleTail,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: process.env.metaDescription
                    }
                ]
            }
        },
        methods: {
            submitInfo(e) {
                if(!this.$route.query['user_id'] || !this.$route.query['auth0_domain']){
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        html: this.$vmss60.generateErrorString(this.$route, 'Invalid URL.', 'setup/submitInfo')
                    });
                    return;
                }
                this.$axios.post(process.env.apiBaseURL + '/provisionUser', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    bindID: this.$route.query['user_id'],
                    email: this.$route.query['user_email']
                })
                    .then((response) => {
                        this.$refs.successField.value = "yes";
                        this.$refs.infoForm.submit();
                    })
                    .catch((error) => {
                        this.$sentry.captureException(error);
                        Swal.fire({
                            type: 'error',
                            title: 'Error',
                            html: this.$vmss60.generateErrorString(this.$route, 'Unable to activate your account.', 'setup/provisionUser')
                        });
                    });
            }
        }
    }
</script>

<style scoped>

</style>