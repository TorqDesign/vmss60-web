<template>
    <div>
        <Navbar light-back></Navbar>
        <div class="container" id="schedule" style="padding-top: 75px; min-height: 100vh">
            <h2 style="text-align: center">Events</h2>
            <div class="row">
                <div class="col-md-6">
                    <h5>Friday Oct 9th</h5>
                    <div class="schedule-box">
                        <h6>Opening Ceremonies</h6>
                    </div>
                    <div class="schedule-box">
                        <h6>Classic/Antique Car Show (All-Night)</h6>
                        <p>View the beautiful collection of cars as you take a walk down memory lane.</p>
                        <p><b>Want to volunteer your car?</b> Please email <a href="mailto:masseymustangs2020@gmail.com?subject=Car%20Volunteer%20Request" class="expand-link">masseymustangs2020@gmail.com</a> to find out more.</p>
                    </div>
                    <div class="schedule-box">
                        <h6>Battle of the Bands</h6>
                        <p>Band names to be announced!</p>
                    </div>
                    <div class="schedule-box">
                        <h6>Music and Dancing of the Decades</h6>
                        <p>Lorem ipsom dolor</p>
                    </div>
                    <div class="schedule-box">
                        <h6>Decade Rooms</h6>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Saturday Oct 10th</h5>
                    <div class="schedule-box">
                        <h6>Golf Outing</h6>
                    </div>
                    <div class="schedule-box">
                        <h6>Windsor-Essex County Tours</h6>
                    </div>
                    <div class="schedule-box">
                        <h6>Dinner Banquet and Alumni Fashion Show at the Caboto Club</h6>
                        <p>Fashion show of the decades featuring Massey alumni!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Navbar from "../components/Navbar";

    export default {
        name: "events",
        components: {Navbar},
        head() {
            return {
                title: 'Events' + process.env.pageTitleTail,
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
    }
</script>

<style scoped>
    #schedule {
        color: black;
    }
</style>