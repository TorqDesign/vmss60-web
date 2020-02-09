<template>
    <div>
        <Navbar light-back></Navbar>
        <div class="container" id="schedule" style="margin-top: 75px">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Hotels</h2>
                    <p>If you have any questions or concerns, or need assistance booking, please email us at <a class="expand-link" href="mailto:masseymustangs2020@gmail.com?subject=Hotel book assistance">masseymustangs2020@gmail.com</a></p>
                </div>
                <div class="col-md-6">
                    <GMap
                            ref="gMap"
                            :cluster="{options: {styles: clusterStyle}}"
                            :center="{lat: 42.298595, lng: -83.0414917}"
                            :options="{fullscreenControl: false, styles: mapStyle}"
                            :zoom="12.95"
                    >
                        <GMapMarker
                                v-for="location in locations"
                                :key="location.id"
                                :position="{lat: location.lat, lng: location.lng}"
                                :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
                                @click="currentLocation = location"
                                ref="marker"
                        >
                            <GMapInfoWindow>
                                <b>{{ location.name }}</b>
                                <br>
                                <br>
                                <p>
                                    {{location.address}}
                                </p>
                            </GMapInfoWindow>
                        </GMapMarker>
                    </GMap>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li v-for="location in locations" :key="location.id" class="list-group-item">
                            <div class="row" @click="changeMapView(location, $event)">
                                <div class="col-2">
                                    <img class="img-fluid" :src="location.logo">
                                </div>
                                <div class="col-10">
                                    <strong>{{location.name}}</strong>
                                    <p>{{location.address}}</p>
                                    <p v-if="location.price">Rates: from ${{location.price}} per night</p>
                                    <p v-else>Promotion: {{location.promo}}</p>
                                    <p v-if="location.specialInstruction"><b>{{location.specialInstruction}}</b></p>
                                    <a class="btn btn-outline-primary float-right" v-if="location.canOnlineBook" :href="location.booklink" target="_blank">Book</a>
                                    <a class="btn btn-outline-primary float-right" v-else :href="location.booklink">Call {{location.phone}} to reserve</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
    .list-group {
        max-height: 400px;
        margin-bottom: 10px;
        overflow:scroll;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        border-left: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 4px;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .list-group-item{
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        transition: background-color ease 0.25s;
    }
    .list-group-item:hover{
        background-color: #EFEFEF;
        cursor: pointer;
    }
</style>

<script>
    import Navbar from "../components/Navbar";

    export default {
        name: "hotels",
        components: {Navbar},
        methods: {
            changeMapView(location, event) {
                for (let marker in this.$refs.gMap.markers) {
                    this.$refs.gMap.markers[marker].infoWindow.close()
                }
                this.$refs.gMap.google.maps.event.trigger(this.$refs.gMap.markers[location.id], 'click');
                //this.$refs.marker[location.id].$el.click();
                //this.$refs.gMap.markers[0];
                //this.$refs.gMap.
            }
        },
        head () {
            return {
                title: 'Hotels | Vincent Massey 60th Reunion | Windsor, Ontario',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: 'Welcoming 60 years of alumni back to Vincent Massey Secondary School in Windsor, Ontario on October 9 & 10, 2020.' }
                ]
            }
        },
        data() {
            return {
                markers: {},
                currentLocation: {},
                locations: [
                    {
                        id: 0,
                        lat: 42.2737864,
                        lng: -83.017303,
                        name: "Comfort Inn (Dougall)",
                        address: "2955 Dougall Ave, Windsor, ON, Canada N9E 1S1",
                        promo: '20% off rates',
                        logo: '/hotel-logos/comfort_inn.png',
                        canOnlineBook: true,
                        booklink: 'http://www.comfortinn.com/CN318?srp=LMASSY',
                    },
                    {
                        id: 1,
                        lat: 42.2733348,
                        lng: -83.0501988,
                        name: "Comfort Inn (Huron Church)",
                        address: "2330 Huron Church Rd, Windsor, ON, Canada N9E 3S6",
                        price: 129.99,
                        logo: '/hotel-logos/comfort_inn.png',
                        canOnlineBook: true,
                        booklink: 'https://www.choicehotels.com/en-ca/reservations/groups/YS99R9'
                    },
                    {
                        id: 2,
                        lat: 42.3187267,
                        lng: -83.0452658,
                        name: "Best Western Plus Waterfront Hotel",
                        address: "277 Riverside Dr W, Windsor, ON, Canada N9A 5K4",
                        price: 132,
                        logo: '/hotel-logos/bwp.png',
                        canOnlineBook: false,
                        booklink: 'tel:1-519-973-5555',
                        phone: '+1 (519) 973-5555',
                        specialInstruction: 'Please mention "Vincent Massey 60th Reunion" when booking to use the group rate'
                    },
                    {
                        id: 3,
                        lat: 42.2817501,
                        lng: -83.0582101,
                        name: "Holiday Inn & Suites",
                        address: "1855 Huron Church Rd, Windsor, ON, Canada N9C 2L6",
                        price: 139,
                        logo: '/hotel-logos/holiday_inn.png',
                        canOnlineBook: true,
                        booklink: 'https://www.holidayinn.com/redirect?path=hd&brandCode=HI&localeCode=en&regionCode=1&hotelCode=YQGCA&_PMID=99801505&GPC=VMA&cn=no&viewfullsite=true'
                    },

                ],
                pins: {
                    selected:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAyLTAxVDIwOjAxOjA4LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0yNVQxNTowMzoyMy0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0yNVQxNTowMzoyMy0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjdmZTRiNS05MDQ2LTMxNGMtYmM0My1iMTQ4ZWRlOWRlOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3ZmU0YjUtOTA0Ni0zMTRjLWJjNDMtYjE0OGVkZTlkZThkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDY3ZmU0YjUtOTA0Ni0zMTRjLWJjNDMtYjE0OGVkZTlkZThkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjdmZTRiNS05MDQ2LTMxNGMtYmM0My1iMTQ4ZWRlOWRlOGQiIHN0RXZ0OndoZW49IjIwMTktMDItMDFUMjA6MDE6MDgtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5X7/eUAAAByUlEQVRYw7WXP0gCURzHb3JxDNp0iIg2uUUUtK2GwN3lpM32gqZQSFpcCmwsitSpqbCWGlql8CBoDseIor8QYtfvwXsg1+/9fw2fxbvf9/vRw3fveVEUeYzvtCcjC+wCA+AV+KR8ACG9lpXlTHZ6igI+0AciRfp0xolAXaM4Tt1WoG1RzmibCjQlwUPgnDKU3NvUFSgJws6AHPJr5eg13lxJRyDkhAQK/5SAMxuqCpQ5ARWFckaFk1GWCSSAY2Swo1HO6CA5JDshEigCj8igbyDgIzkkuygSIM/vJzZ0Z1DOuI9lkexAJFBT+R9rgK0jNZFAAxnYtxA4RPIaIoEqMnBjIXCL5FVFAovAG/LcZg3K55Dyd2BJJDANXCCDOwYCLSTnGkjJFqI1ziJS0CgvcDI2VVbCNDBChp+AjEJ5ht6LCcyrvgt4r+ExsAUkkeIkvTbmzJ7ovIzyktfrF9AD9ig9+ploJq+7HzhysBn58+11BFLAi4PyEXv2JluyFQcC67ab0lOL8ksXu+Ip4MGg/BmYcXUuWDAQWHZ5MCGsapRvuD4ZMbYVylv/cTSb5EBQ3lXJsBXwaJFRuSuBuERXZ9aVAOGK4pkK/AIdcUZfknSv+AAAAABJRU5ErkJggg==",
                    notSelected:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAyLTAxVDIwOjAxOjA4LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0yNVQxNTowMzoyMy0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0yNVQxNTowMzoyMy0wNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjdmZTRiNS05MDQ2LTMxNGMtYmM0My1iMTQ4ZWRlOWRlOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3ZmU0YjUtOTA0Ni0zMTRjLWJjNDMtYjE0OGVkZTlkZThkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDY3ZmU0YjUtOTA0Ni0zMTRjLWJjNDMtYjE0OGVkZTlkZThkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjdmZTRiNS05MDQ2LTMxNGMtYmM0My1iMTQ4ZWRlOWRlOGQiIHN0RXZ0OndoZW49IjIwMTktMDItMDFUMjA6MDE6MDgtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5X7/eUAAAByUlEQVRYw7WXP0gCURzHb3JxDNp0iIg2uUUUtK2GwN3lpM32gqZQSFpcCmwsitSpqbCWGlql8CBoDseIor8QYtfvwXsg1+/9fw2fxbvf9/vRw3fveVEUeYzvtCcjC+wCA+AV+KR8ACG9lpXlTHZ6igI+0AciRfp0xolAXaM4Tt1WoG1RzmibCjQlwUPgnDKU3NvUFSgJws6AHPJr5eg13lxJRyDkhAQK/5SAMxuqCpQ5ARWFckaFk1GWCSSAY2Swo1HO6CA5JDshEigCj8igbyDgIzkkuygSIM/vJzZ0Z1DOuI9lkexAJFBT+R9rgK0jNZFAAxnYtxA4RPIaIoEqMnBjIXCL5FVFAovAG/LcZg3K55Dyd2BJJDANXCCDOwYCLSTnGkjJFqI1ziJS0CgvcDI2VVbCNDBChp+AjEJ5ht6LCcyrvgt4r+ExsAUkkeIkvTbmzJ7ovIzyktfrF9AD9ig9+ploJq+7HzhysBn58+11BFLAi4PyEXv2JluyFQcC67ab0lOL8ksXu+Ip4MGg/BmYcXUuWDAQWHZ5MCGsapRvuD4ZMbYVylv/cTSb5EBQ3lXJsBXwaJFRuSuBuERXZ9aVAOGK4pkK/AIdcUZfknSv+AAAAABJRU5ErkJggg=="
                },
                mapStyle: [],
                clusterStyle: [
                    {
                        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                        width: 56,
                        height: 56,
                        textColor: "#fff"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>