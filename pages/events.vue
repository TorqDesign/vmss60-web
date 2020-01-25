<template>
    <div>
        <Navbar></Navbar>
        <div class="container" id="schedule" style="margin-top: 75px">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-10">
                    <h2>Events</h2>
                    <h5>Friday Oct 9th</h5>
                    <div class="schedule-box">
                        <h6>Opening Ceremonies</h6>
                    </div>
                    <div class="schedule-box">
                        <h6>Classic/Antique Car Show (All-Night)</h6>
                        <p>View the beautiful collection of cars as you take a walk down memory lane.</p>
                    </div>
                    <div class="schedule-box">
                        <h6>Battle of the Bands</h6>
                        <p>Band names to be announced!</p>
                    </div>
                    <div class="schedule-box">
                        <h6>Decade Rooms</h6>
                    </div>
                    <h5>Saturday Oct 10th</h5>
                    <div class="schedule-box">
                        <h6>Golf Outing and Brunch (Morning)</h6>
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
        components: {Navbar}
    }
</script>

<style scoped>

</style>