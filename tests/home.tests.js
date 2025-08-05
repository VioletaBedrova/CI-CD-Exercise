const { describe, it } = require('mocha');
const assert = require('assert');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

describe('Home page', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8080/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Students Registry</h1>"));
  });
  
  it('Students count', async function() {
    let res = await fetch("http://localhost:8080/");
    let body = await res.text();
    assert.ok(body.includes("Registered students: <b>2</b>"));
  });
});
