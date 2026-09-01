import { test, expect } from '@playwright/test';
import path from 'path';

test('Multiple File Upload example', async ({ page }) => {
    await page.goto('https://www.patternfly.org/components/file-upload/multiple-file-upload');

    const fileInput = page.locator('input[type="file"]');//locator for file input field
    
    //Files outside the project folder can be uploaded using the below code
    const filePath1 = 'C:\\Users\\PRASHANTH\\Downloads\\sample-500kb.pdf';//path to the first file to be uploaded
    // Files insdie the project folder can be uploaded using the below code
    const filePath2 = path.join(__dirname, 'file2.jpg');//path to the second file to be uploaded
    
    
    

    await fileInput.setInputFiles([filePath1, filePath2]);//Set the files to be uploaded

    await expect(page.getByText('2 of 2 files uploaded')).toBeVisible();
    await expect(page.getByText('sample-500kb.pdf')).toBeVisible();
    await expect(page.getByText('file2.jpg')).toBeVisible();

    await page.pause();
});