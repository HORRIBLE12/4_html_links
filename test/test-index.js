const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {

    beforeEach((done) => {
        JSDOM.fromFile('index.html')
        .then((dom) => {
          global.document = dom.window.document
        })
        .then(done, done);
    });

    describe('Create an a(anchor) tag.', () => {
        it('a (anchor) tag should exist', () => {
            expect(document.querySelector('a')).to.exist
        })
        it('a (anchor) tag should have the href attribute that points to https://freecatphotoapp.com link', () => {
            expect(document.querySelector('a')).to.have.attribute('href', 'https://freecatphotoapp.com')
        })
        it("a (anchor) tag should have the text 'cat photos'", () => {
            expect(document.querySelector('a')).to.have.text('cat photos')
        })
    }) 
})