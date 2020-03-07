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
                            <input type="text" class="form-control" id="firstNameInput" placeholder="First Name" v-model="firstName">
                        </div>
                        <div class="form-group">
                            <label for="lastNameInput">Last Name</label>
                            <input type="text" class="form-control" id="lastNameInput" placeholder="Last Name" v-model="lastName">
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
        methods: {
            submitInfo(e) {
                if(!this.$route.query['user_id'] || !this.$route.query['auth0_domain']){
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Invalid URL. Try closing your browser and logging in again. If the issue persists, please email vmss60dev@gmail.com.'
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
                        this.$sentry.captureException(error)
                        Swal.fire({
                            type: 'error',
                            title: 'Error',
                            text: 'We\'re having trouble activating your account. Please try again later.'
                        });
                    });
            }
        }
    }
</script>

<style scoped>

</style>