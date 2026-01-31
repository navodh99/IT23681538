import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama vaeda karanavaa');
  await page.getByText('මම වැඩ කරනවා').click();
  //await page.getByRole('button', { name: 'Clear' }).first().click();
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama  gedhara enna   thamaa inne');
  await page.getByText('මම  ගෙදර එන්න   තමා ඉන්නේ').click();
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta pansal yamu!');
  await page.getByText('අපි හෙට පන්සල් යමු!').click();
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Office meeting eka 7.30 PM patan gannavaadha?');
  await page.getByText('Office meeting එක 7.30 PM පටන් ගන්නවාද?').click();
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('malith iiyee campus giyaa');
  await page.getByText('මලිත් ඊයේ campus ගියා').click();
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eya Rs. 2500 k pamaNa vatinavaa');
  await page.getByText('එය Rs. 2500 ක් පමණ වටිනවා').click();
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama heta gedhara yanavaa, haebaeyi mee assignment eka karala inna oone');
  await page.getByText('මම හෙට ගෙදර යනවා, හැබැයි මේ assignment එක කරල ඉන්න ඕනෙ').click();
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata SMS ekakin OTP eka laebuNaa');
  await page.getByText('මට SMS එකකින් OTP එක ලැබුණා').click();
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kochchara asiiru vuvath api ee maargaya Bhaavithaa kalemu');
  await page.getByText('කොච්චර අසීරු වුවත් අපි ඒ මාර්ගය භාවිතා කලෙමු ').click();
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaa adha Colombo yanna hadhanavaa.');
  await page.getByText('එයා අද Colombo යන්න හදනවා.').click();
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa adha enne naedhdha?');
  await page.getByText('ඔයා අද එන්නෙ නැද්ද?').click();
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama oyaagee Linkedin post eka dhaekkaa');
  await page.getByText('මම ඔයාගේ Linkedin post එක දැක්කා').click();
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa ohugen samaava ganna');
  await page.getByText('කරුණාකරලා ඔහුගෙන් සමාව ගන්න').click();
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari mata theerumganna puluvan');
  await page.getByText('හරි හරි මට තේරුම්ගන්න පුලුවන්').click();
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata puLuvannam ehema karapan');
  await page.getByText('ඔයාට පුළුවන්නම් එහෙම කරපන්').click();
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamanuvarayanavaa');
  await page.getByText('මමනුවරයනවා').click();
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama kohomahari tharaGAya jaya gannavaa');
  await page.getByText('මම කොහොමහරි තරඟය ජය ගන්නවා').click();
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiye sellam karaa');
  await page.getByText('මම ඊයෙ සෙල්ලම් කරා').click();
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama eeka karanna baehae');
  await page.getByText('මම ඒක කරන්න බැහැ').click();
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata thibahayi dhaen, vathura biilaa ennam');
  await page.getByText('මට තිබහයි දැන්, වතුර බීලා එන්නම්').click();
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suba raathriyak obata!');
  await page.getByText('සුබ රාත්‍රියක් ඔබට!').click();
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata meeka paehaedhili karalaa dhenna puluvandha?');
  await page.getByText('කරුණාකරලා මට මේක පැහැදිලි කරලා දෙන්න පුලුවන්ද?').click();
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta gamee yanna thamayi inne.');
  await page.getByText('අපි හෙට ගමේ යන්න තමයි ඉන්නේ.').click();
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('gaman gath Bus raThayak saha Lorry raThayak athara adha udhaesana Kiribathgoda pradheesheedhi aethi vuu maarga anathurak nisaa minissun kihipa dhenekuta thuvaala sidhu vii aethi athara, thuvala laebuu aya vaedidhura prathikaara sadhahaa koLaBa maha roohalata raegena giya bava poliisiya saDHahan kaLeeya. ');
  await page.getByText('ගමන් ගත් Bus රථයක් සහ Lorry රථයක් අතර අද උදැසන Kiribathgoda ප්‍රදේශේදි ඇති වූ මාර්ග අනතුරක් නිසා මිනිස්සුන් කිහිප දෙනෙකුට තුවාල සිදු වී ඇති අතර, තුවල ලැබූ අය වැඩිදුර ප්‍රතිකාර සදහා කොළඹ මහ රෝහලට රැගෙන ගිය බව පොලීසිය සඳහන් කළේය. ').click();
});

test('Pos_Fun_0025', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo ikmanata mata eeka Whatsapp dhaapanko');
  await page.getByText('අඩෝ ඉක්මනට මට ඒක Whatsapp දාපන්කො').click();
});

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('12.08.1981');
  await page.getByText('12.08.1981').click();
});

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ගmata yanavaa');
  await page.getByText('Sinhala characters are not allowed in Singlish input.').click();
  
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ma     ma heta  ko LaBa ya na vaa');
  await page.getByText('මම හෙට  කොළඹ යනවා').click();
});


test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mlith andha panslata yannvaaa');
  await page.getByText('මලිත් අද පන්සලට යනවා').click();
  //Expected: මලිත් අද පන්සලට යනවා
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('please, oyaa ikman karalaa ethanata yanna');
  await page.getByText('කරුණාකරල, ඔයා ඉක්මන් කරලා එතනට යන්න').click();
  //Expected: කරුණාකරල, ඔයා ඉක්මන් කරලා එතනට යන්න
});


test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo machan full ela scene ekak bn');
  await page.getByText('අඩෝ මචන් මාර scene එකක් බ්න්').click();
    //Expected: අඩෝ මචන් මාර scene එකක් බ්න්

});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Please check the report and send it to the HR.');
  await page.getByText('කරුණාකර report පරීක්ෂා කර HR වෙත යවන්න.').click();
    //Expected: කරුණාකර report පරීක්ෂා කර HR වෙත යවන්න.

});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mam#a gedhara @yanavaa!!!');
  await page.getByText('මම ගෙදර යනවා!!!').click();
    //Expected: මම ගෙදර යනවා!!!

});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('yanavaa heta api gedhara');
  await page.getByText('අපි හෙට ගෙදර යනවා').click();
    //Expected:  අපි හෙට ගෙදර යනවා

});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama mama mam@ bath kanavaa');
  await page.getByText('මම බත් කනවා').click();
      //Expected:  මම බත් කනවා

});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata paan kanna oni');
  await page.getByText('මට පාන් කන්න ඕනේ').click();
      //Expected:  මට පාන් කන්න ඕනේ

});