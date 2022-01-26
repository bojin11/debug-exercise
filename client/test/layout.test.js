const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })


    describe('text', () => {
        test('it has correct text', () => {
            const title = document.querySelector('text');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Let's motivate you")
        })
    })
})