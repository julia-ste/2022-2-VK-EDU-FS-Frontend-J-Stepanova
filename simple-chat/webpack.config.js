'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

const pages = ['chat', 'chats-list'];
const indexPage = 'chats-list'

module.exports = {
    context: SRC_PATH,
    entry: pages.reduce((config, page) => {
        config[page] = `./pages/${page}/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: '[name].js',
        path: BUILD_PATH,
    },
    resolve: {
        alias: {
            _assets: path.join(SRC_PATH, 'assets'),
            _pages:  path.join(SRC_PATH, 'pages'),
            _styles: path.join(SRC_PATH, 'styles'),
            _utils: path.join(SRC_PATH, 'utils'),
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /shadow\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ].concat(
        pages.map(page => (
            new HTMLWebpackPlugin({
                inject: true,
                template: `./pages/${page}/${page}.html`,
                filename: page === indexPage? 'index.html' : `${page}.html`,
                chunks: [page],
            })
        ))
    ),
};
