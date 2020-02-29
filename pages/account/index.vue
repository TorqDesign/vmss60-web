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
                            <p><span class="h6">Voucher Balance: </span>${{user.balance !== undefined ?
                                user.balance.toFixed(2) : ''}}</p>
                        </div>
                        <div class="col-12">
<!--                            <h2>Your Tickets</h2>-->
<!--                            <div v-for="ticket in tickets">{{ticket}}-->
<!--                                <button class="btn btn-warning"-->
<!--                                        @click="configureItem(ticket)">Configure Now</button>-->
<!--                            </div>-->
                            <h2>Your Tickets</h2>
                            <div v-if="!user.orders || user.orders.length < 1">
                                You have no orders.
                            </div>
                            <div class="table-responsive" v-else>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Item</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="ticket in tickets">
                                        <td>{{ticket._id}}</td>
                                        <td>{{items[ticket.itemID].name}}</td>
                                        <td>{{items[ticket.itemID].description}}</td>
                                        <td><button class="btn btn-warning" @click="configureItem(ticket)">Edit</button></td>
<!--                                        <td><span v-if="findById(user.orders, ticket.orderID).status === 'Fulfilled'"><button class="btn btn-warning" @click="configureItem(ticket)">Configure Now</button></span><span v-else>{{findById(user.orders, ticket.orderID).status}}</span></td>-->
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                <td><span v-if="order.status === 'Fulfilled' && items[order.itemID].type === 'ticket'"><button class="btn btn-warning"
                                                                                      @click="configureItem(order)">Configure Now</button></span><span
                                        v-else>{{order.status}}</span></td>
                                <td>{{order.additional ? order.additional : 'N/A'}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </div>
        <b-modal id="configure-modal" title="Item Configurator" @ok="saveItem">
            <ItemConfigurator :order="currentItem" ref="itemConfigurator"></ItemConfigurator>
        </b-modal>
    </div>
</template>

<script>
    import Navbar from '../../components/Navbar';
    import Swal from 'sweetalert2';
    import ItemConfigurator from "../../components/ItemConfigurator";

    export default {
        name: "index",
        components: {Navbar, ItemConfigurator},
        middleware: 'auth',
        data() {
            return {
                user: {},
                items: {},
                currentItem: {},
                tickets: []
            }
        },
        async beforeMount(context) {
            try {
                let res = this.$axios.get(process.env.apiBaseURL + '/user/');
                let res2 = this.$axios.get(process.env.apiBaseURL + '/allProducts');
                let res3 = this.$axios.get(process.env.apiBaseURL + '/ticket');
                res = await res;
                res2 = await res2;
                res3 = await res3;
                this.tickets = res3.data;
                this.user = res.data.user;
                let items = {};
                for (let item of res2.data) {
                    items[item._id] = item;
                }
                this.items = items;
            } catch (e) {
                console.log(e);
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
            configureItem(order) {
                this.currentItem = order;
                this.$bvModal.show('configure-modal')
            },
            async saveItem() {
                try {
                    await this.$refs.itemConfigurator.saveData();
                } catch (e) {
                    return await Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Something went wrong! ${e.toString()}`,
                    })
                }
                await Swal.fire({
                    icon: 'success',
                    title: 'Data saved'
                })
            },
            findById(container, id) {
                for (let i in container) {
                    console.log(container[i], id);
                    if (container[i].transID === id) {
                        return container[i]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>