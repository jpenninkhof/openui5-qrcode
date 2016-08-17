module.exports = function (grunt) {

    var ui5version = ''
    var uirepo = 'openui5.hana.ondemand.com'

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    base: {
                        path: '.',
                        index: 'index.html',
                    },
                    keepalive: true,
                    open: true,
                    middleware: function (connect, options, defaultMiddleware) {
                        return [require('grunt-connect-proxy/lib/utils').proxyRequest].concat(defaultMiddleware);
                    }
                },
                proxies: [
                    {
                        context: '/resources',
                        host: 'sapui5.hana.ondemand.com',
                        changeOrigin: true,
                        port: 443,
                        https: true,
                        rewrite: {
                            '^/resources': '/' + ui5version + '/resources'
                        }
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'configureProxies:server',
        'connect:server']);

};
