const path = require('path')

const getProjectPath = (name) => path.resolve(__dirname, "apps/" + name)

const MF = {
    app_root: "app_root",
    app_auth: "app_auth",
}


const MFList = {
    [MF.app_root]: {
        host: {
            dev: 'http://localhost',
            prod: 'http://localhost'
        },
        port: {
            dev: 9001,
            prod: 80
        },
        publicPath:{
            dev: '/',
            prod: '/root/'
        },
        import: [
            MF.app_auth,
        ]
    },
    [MF.app_auth]: {
        host: {
            dev: 'http://localhost',
            prod: 'http://localhost'
        },
        port: {
            dev: 9002,
            prod: 80
        },
        publicPath:{
            dev: '/',
            prod: '/root/app_auth/'
        }
    },

}

const config = {
    rootPublicPath:{
        dev: '/',
        prod: '/root/'
    }
}

module.exports = {
    config,
    MFList,
    getProjectPath
}



