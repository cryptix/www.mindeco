#!/usr/bin/env node

var Metalsmith = require('metalsmith')
var debug = require('metalsmith-debug')
var templates = require('metalsmith-templates')
var collections = require('metalsmith-collections')
var partial = require('metalsmith-partial')
var msstatic = require('metalsmith-static')
var serve = require('metalsmith-serve')
var watch = require('metalsmith-watch')
var markdown = require('metalsmith-markdown')
var headingsidentifier = require("metalsmith-headings-identifier");
var permalinks = require('metalsmith-permalinks')
var feed = require('metalsmith-feed')

var nunjucks = require('nunjucks')
var njmd = require('nunjucks-markdown')
var njdate = require('nunjucks-date')
var marked = require('marked')

marked.setOptions({
  gfm: true,
  tables: true,
  smartLists: true,
})

njenv = nunjucks.configure()
njmd.register(njenv, marked)

njdate.setDefaultFormat('YYYY-MM-DD, h:mm:ss a');
njdate.install(njenv)

njenv.addFilter('dump', JSON.stringify)

Metalsmith(__dirname)
  .use(debug())
  .metadata({
    site: {
      title: "cryptix' Blog",
      url: "https://www.mindeco.de/blog/",
      author: "cryptix",
    },
  })
  .use(collections({
    posts: {},
  }))
  .use(markdown())
  .use(templates({ "directory": ".", "engine": "nunjucks", "inPlace": true }))
  .use(templates({ "directory": ".", "engine": "nunjucks" }))
  .use(headingsidentifier())
  .use(permalinks())
  .use(feed({"collection": "posts"}))
  .use(msstatic({"src": "tmpl/static", "dest": "static"}))
  .use(serve({
    "port": 8081,
    "verbose": true
  }))
  .use(watch())
  .destination('./build')
  .build(function(err){
    if (err) {
      console.log(err)
      throw err;
    }
  })
