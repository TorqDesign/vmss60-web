<template>
    <div>
        <Navbar light-back back-mode="/store" back-name="Back to Store"></Navbar>
        <div class="container" style="padding-top: 105px; min-height: 100vh">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-12">
                            <h2>Your Account</h2>

                            <p><span class="h6">First Name: </span>{{user.firstName}}</p>
                            <p><span class="h6">Last Name: </span>{{user.lastName}}</p>
                            <p><span class="h6">Email: </span>{{$auth.user.email}}</p>
                            <p><span class="h6">Voucher Balance: </span>${{user.balance !== undefined ? user.balance.toFixed(2) : ''}}</p>
                        </div>
                        <div class="col-12">
                            <h2>Your Tickets</h2>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <h2>Orders</h2>
                    <div v-if="!user.orders || user.orders.length < 1">
                        You have no orders.
                    </div>
                    <div class="table-responsive" v-else>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Item</th>
                                    <th>Status</th>
                                    <th>Additional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in user.orders">
                                    <td>{{order._id}}</td>
                                    <td>{{items[order.itemID] ? items[order.itemID].name : ''}}</td>
                                    <td><span v-if="order.status === 'Not Configured'"><button class="btn btn-warning">Configure Now</button></span><span v-else>{{order.status }}</span></td>
                                    <td>{{order.additional ? order.additional : 'N/A'}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Navbar from '../../components/Navbar';
    import Swal from 'sweetalert2';
    export default {
        name: "index",
        components: {Navbar},
        middleware: 'auth',
        data() {
            return {
                user: {},
                items: {}
            }
        },
        async beforeMount(context){
            try{
                let res = await this.$axios.get(process.env.apiBaseURL + '/user/');
                this.user = res.data.user;

                let res2 = await this.$axios.get(process.env.apiBaseURL + '/allProducts');
                let items = {};
                for(let item of res2.data){
                    items[item._id] = item;
                }
                this.items = items;
            }
            catch {
                Swal.fire({
                    type: 'error',
                    title: 'Unauthorized',
                    text: 'Your session has expired and you have been logged out for security reasons.'
                }).then(() => {
                    this.logoutWithAuth0(null);
                });
            }

        },
        mounted() {
        },
        methods: {
            logoutWithAuth0(e, logoutUrl = process.env.defaultLogoutRef) {
                this.$auth.logout();
                window.location.replace(process.env.auth0LogoutUrl + logoutUrl)
            },
        }
    }
</script>

<style scoped>

</style>