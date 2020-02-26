export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap'},
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/assets/css/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/vue-recaptcha-v3.js', ssr: false},
        {src: '~/plugins/vue-countdown.js', mode: "client"},
        {src: '~/plugins/vue-fullpage.js', mode: "client"},
        {
            src: "~/plugins/v-waypoint.client.js",
            mode: 'client'
        },
        { mode: 'client', src: '~plugins/vue-router-back-button.client.js' }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: ['@nuxtjs/google-analytics'],

    googleAnalytics: {
        id: 'UA-157210382-1'
    },

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        ['nuxt-gmaps', {
            key: 'AIzaSyC_sWhSGaT5rxzZXeYtiQpNMmoJhCC1glE',
            //you can use libraries: ['places']
        }],
        ['nuxt-stripe-module', {
            version: 'v3',
            publishableKey: 'pk_test_vpi8zOYHwSCBPUpj4C5DQkNT00VL4HeoMn',
        }]
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: 'https://staging.vmss60.com/api'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },
        // babel: {
        //     presets: function ({isServer}, [preset, options]) {
        //
        //         const r = [
        //             [
        //                 preset, {
        //                 buildTarget: isServer ? 'server' : 'client',
        //                 ...options
        //             }]
        //             // [ Other presets ]
        //         ];
        //
        //         r[0][1].targets = {
        //             "browsers": ["> 1%", "last 2 versions"],
        //             ie: 11
        //         };
        //
        //         r[0][1].polyfills = [
        //             'es6.array.iterator',
        //             'es6.promise',
        //             'es6.object.assign',
        //             'es6.symbol',
        //             'es6.array.find',
        //             'es6.array.from',
        //             'es7.promise.finally',
        //             'es7.object.entries',
        //         ];
        //
        //         return r;
        //     },
        //
        //     plugins: [
        //         ['@babel/plugin-transform-runtime']
        //     ]
        // }
    },
    /*
  ** Router configuration
  */
    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1))
                        }, 100)
                    })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({top: el.offsetTop, behavior: 'smooth'})
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return {x: 0, y: 0}
        }
    },
    auth: {
        redirect: {
            home: '/store/',
            login: '/store/login/',
            callback: '/store/login/'
        },
        strategies: {
            auth0: {
                domain: 'vmss60.auth0.com',
                client_id: 'da66CdZisDbTvTAdF4KvT87iVx8DvwHf',
                audience: 'https://api.vmss60.com'
            }
        }
    },
    env: {
        auth0LogoutUrl: 'https://vmss60.auth0.com/v2/logout?returnTo=',
        defaultLogoutRef: 'http%3A%2F%2Flocalhost%3A3000%2Fstore%2Flogin%2F&client_id=da66CdZisDbTvTAdF4KvT87iVx8DvwHf'
    }

}
