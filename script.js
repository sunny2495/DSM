document.getElementById('saveContact').addEventListener('click', function() {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Deepak Sewing Machine Co.
TEL;WORK;VOICE:+918882547345
TEL;WORK;VOICE:+917428772400
TEL;WORK;VOICE:+919540333364
EMAIL:deepaksewingmachine@gmail.com
ADR:;;D-258, Main Road No.2, West Vinod Nagar, Delhi - 110092;Delhi;;110092;India
ORG:Deepak Sewing Machine Co.
URL:www.deepaksewingmachine.com
END:VCARD
`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Deepak_Sewing_Machine_Contact.vcf';
    link.click();
});
