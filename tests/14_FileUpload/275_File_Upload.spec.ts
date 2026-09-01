import{test, expect, Locator} from '@playwright/test';
import path from 'path';

test('File Upload example', async({page})=>
{
    //Locate the file input field and the file to be uploaded
    const fileInput = page.locator('#file-upload');//locator for file input field
    const filePath = path.join(__dirname, 'testfile.txt');//path to the file to be uploaded

    await page.goto('https://the-internet.herokuapp.com/upload');
    
    //Set the file to be uploaded
    await fileInput.setInputFiles(filePath);
    
    //Click the submit button to upload the file
    await page.locator('#file-submit').click();

    //Verify the upload succeeded
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('testfile.txt');

    await page.pause();




});