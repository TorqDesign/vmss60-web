<template>
    <div>
        <b-form ref="configForm">
            <b-form-group v-for="(value, name) in schema" :key="name" :label="name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) + (value.required ? ' (required)' : '') + ':'">
                <b-form-select :options="value.enum" v-if="value.type === 'enum'" :required="value.required" v-model="orderData[name]">
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
                    </template>
                </b-form-select>
                <!-- This datepicker causes lots of issues -->
<!--                <b-form-datepicker v-else-if="value.type === 'date'" :required="value.required" v-model="orderData[name]"></b-form-datepicker>-->
                <b-input type="text" class="form-control" v-else :required="value.required" v-model="orderData[name]"></b-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    import schema from 'async-validator'
    import _ from 'lodash'

    export default {
        name: "ItemConfigurator",
        props: {
            order: {
                type: Object,
                required: true
            },
            schema: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                orderData: {}
            }
        },
        mounted() {
            //this.required = flatten(this.required);
            if(this.order.additional){
                this.orderData = this.order.additional;
            }

        },
        methods: {
            async saveData() {
                await this.$axios.post(process.env.apiBaseURL + '/order/update', {
                    orderMetadata: this.orderData,
                    orderID: this.order._id
                })
            },
            resetOnClose() {

            },
            validate() {
                if(this.schema){
                    let validator = new schema(this.schema);
                    return new Promise((resolve, reject) => {

                        validator.validate(this.orderData).then(() => {
                            return resolve();
                            //submit it
                        }).catch(({ errors, fields }) => {
                            return reject(errors);
                        })
                    });
                }
                else{
                    return new Promise((resolve, reject) => {
                        return resolve();
                    })
                }

            }
        }

    }
</script>

<style scoped>

</style>