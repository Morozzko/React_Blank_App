// This import syntax is required for use with Webpack 5 Module Federation when we use exposes module
// @ts-ignore
void import('./index.tsx')

require.ensure([], require => {
    require('react-hook-form')
    require('uuid')
    require('react-window')
    require('react-helmet')
});
