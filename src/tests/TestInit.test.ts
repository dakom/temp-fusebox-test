
import { expect } from 'chai';

export class TesterInit {
    timeout: 30000;
    
    'Timer test'(done) {
        const amount = 500;
        const target = 10000;
        let total = 0;
        const interval = setInterval(() => {
            expect(true).to.equal(true);

            total += amount;

            if(total === target) {
                clearInterval(interval);
                done();
            }

            console.log(`Current total: ${total}`);
        }, amount);
    }
}




