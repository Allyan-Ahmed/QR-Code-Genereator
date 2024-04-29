import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([{
        message: 'Enter URL',
        name: 'url'
    }])
    .then((answers) => {


        var qr_svg = qr.image('QR', { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('QR Code.png'));

        console.log(answers.url);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });