import 'jsdom-global/register';
import App from './App'
import React from 'react'
const fs = require('fs');
const cheerio = require('cheerio') //for html testing
const inlineCss = require('inline-css'); //for css testing

//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

const htmlPath = __dirname + '/index.html';
const html = fs.readFileSync(htmlPath, 'utf-8'); //load the HTML file once

//absolute path for relative loading (if needed)
const baseDir = 'file://'+__dirname+'/';
console['error'] = (errorMessage) => { expect(errorMessage.split('\n', 1)[0]).toBe("") }

describe('The app renders', () => { 
    it('renders without crashing', () => {
      mount(<App />); //quick test
    });
})
    describe('implements an `App` component', () => {
      let wrapper; //the rendered app
  
      beforeAll(() => {
        wrapper = mount(<App  />);
      })
  
      it('has the `container` CSS class', () => {
        let wrapper = shallow(<App  />);
        expect(wrapper.hasClass('container')).toBe(true);
      })
  
      it('contains a heading', () => {
        let heading = wrapper.find('div');
        expect(heading.hasClass('Main_Header')).toBe(true)
      })
  
      it('renders a Headers', () => {
        expect(wrapper.find(Headers).length).toBe(1); 
      });
    })
    describe('Source code is valid', () => {
        test('HTML validates without errors', async () => {
          const lintOpts = {
            'attr-bans':['align', 'background', 'bgcolor', 'border', 'frameborder', 'marginwidth', 'marginheight', 'scrolling', 'style', 'width', 'height'], //adding height, allow longdesc
            'doctype-first':true,
            'doctype-html5':true,
            'html-req-lang':true,
            'attr-name-style': false, //for meta tags
            'line-end-style':false, //either way
            'indent-style':false, //can mix/match
            'indent-width':false, //don't need to beautify
            'line-no-trailing-whitespace': false, //don't need to beautify
            'id-class-style':false, //I like dashes in classnames
            'img-req-alt':false, //for this test; captured later!
          }
      
          await expect(htmlPath).toHaveNoHtmlLintErrorsAsync(lintOpts);
        })  
      
        test('CSS validates without errors', async () => {
          await expect('problem-a/css/*.css').toHaveNoCssLintErrorsAsync();
        })
      });
      
      describe('Has required HTML', () => {
        let $; //cheerio instance
      
        beforeAll(() => {
          $ = cheerio.load(html);
        })
      
        test('Specifies charset', () => {
          expect($('head > meta[charset]').length).toBe(1); //has 1 tag
        })
    })